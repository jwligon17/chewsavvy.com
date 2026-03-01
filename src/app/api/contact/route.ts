import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const MAX_MESSAGE_LENGTH = 5000;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const ADMIN_EMAIL = "admin@chewsavvy.com";
const rateLimitStore = new Map<string, { count: number; resetAt: number }>();

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function toTrimmedString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getClientIp(req: Request) {
  const forwardedFor = req.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() || "unknown";
  }
  return req.headers.get("x-real-ip")?.trim() || "unknown";
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const current = rateLimitStore.get(ip);

  if (!current || now > current.resetAt) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (current.count >= RATE_LIMIT_MAX_REQUESTS) {
    return true;
  }

  current.count += 1;
  rateLimitStore.set(ip, current);
  return false;
}

export async function POST(req: Request) {
  try {
    const resendApiKey = process.env.RESEND_API_KEY?.trim();
    if (!resendApiKey) {
      return NextResponse.json(
        { ok: false, error: "Missing RESEND_API_KEY on server." },
        { status: 500 }
      );
    }
    const resend = new Resend(resendApiKey);

    const ip = getClientIp(req);
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { ok: false, error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await req.json().catch(() => null);
    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { ok: false, error: "Invalid request body." },
        { status: 400 }
      );
    }

    const name = toTrimmedString(body?.name);
    const email = toTrimmedString(body?.email);
    const organization = toTrimmedString(body?.organization);
    const message = toTrimmedString(body?.message);

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { ok: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (message.length > MAX_MESSAGE_LENGTH) {
      return NextResponse.json(
        { ok: false, error: "Message is too long." },
        { status: 413 }
      );
    }

    const from = process.env.CONTACT_FROM_EMAIL?.trim() || "Chewsavvy <onboarding@resend.dev>";
    const subject = `Contact Us submission from ${name}`;

    const text = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Organization: ${organization || "N/A"}`,
      "",
      "Message:",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    const html = `
      <div style="font-family: ui-sans-serif, system-ui; line-height: 1.5;">
        <h2>New Contact Us submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Organization:</strong> ${escapeHtml(organization || "N/A")}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <pre style="white-space: pre-wrap;">${escapeHtml(message)}</pre>
      </div>
    `;

    const { error } = await resend.emails.send({
      from,
      to: ADMIN_EMAIL,
      subject,
      text,
      html,
      replyTo: email,
    });

    if (error) {
      console.error("Resend error while sending contact email.");
      return NextResponse.json(
        { ok: false, error: "Email failed to send." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(
      "Contact API error:",
      err instanceof Error ? err.message : "Unknown error"
    );
    return NextResponse.json(
      { ok: false, error: "Server error." },
      { status: 500 }
    );
  }
}
