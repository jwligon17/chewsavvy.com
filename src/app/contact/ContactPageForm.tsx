"use client";

import { FormEvent, useMemo, useState } from "react";

type ContactFormState = {
  name: string;
  email: string;
  organization: string;
  message: string;
};

type ContactFormErrors = Partial<Record<"name" | "email" | "message", string>>;

const initialState: ContactFormState = {
  name: "",
  email: "",
  organization: "",
  message: "",
};

export function ContactPageForm() {
  const [formState, setFormState] = useState<ContactFormState>(initialState);
  const [fieldErrors, setFieldErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [submitError, setSubmitError] = useState("");

  const emailRegex = useMemo(() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/, []);

  function setField<K extends keyof ContactFormState>(field: K, value: ContactFormState[K]) {
    setFormState((prev) => ({ ...prev, [field]: value }));
    if (status !== "idle") {
      setStatus("idle");
      setSubmitError("");
    }
  }

  function validate(values: ContactFormState): ContactFormErrors {
    const errors: ContactFormErrors = {};
    if (!values.name.trim()) errors.name = "Name is required.";
    if (!values.email.trim()) {
      errors.email = "Email is required.";
    } else if (!emailRegex.test(values.email.trim())) {
      errors.email = "Please enter a valid email.";
    }
    if (!values.message.trim()) errors.message = "Message is required.";
    return errors;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(formState);
    setFieldErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("error");
      return;
    }

    setStatus("sending");
    setSubmitError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          organization: formState.organization,
          message: formState.message,
        }),
      });

      const data = (await response.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (!response.ok || !data.ok) {
        setStatus("error");
        setSubmitError(data.error || "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setFieldErrors({});
      setFormState(initialState);
    } catch {
      setStatus("error");
      setSubmitError("Something went wrong. Please try again.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="mx-auto mt-12 w-full max-w-[980px] rounded-2xl border border-white/20 bg-[#101014] p-6 sm:p-8 lg:p-10"
    >
      <div className="space-y-6 text-left">
        <div>
          <label htmlFor="contact-name" className="text-sm font-medium text-white/85">
            Name
          </label>
          <input
            id="contact-name"
            type="text"
            value={formState.name}
            onChange={(event) => setField("name", event.target.value)}
            className="mt-2 h-12 w-full rounded-lg border border-white/25 bg-[#0B0B0D] px-4 text-base text-white outline-none transition-colors placeholder:text-white/35 focus:border-white/50"
          />
          {fieldErrors.name ? <p className="mt-2 text-sm text-rose-300">{fieldErrors.name}</p> : null}
        </div>

        <div>
          <label htmlFor="contact-email" className="text-sm font-medium text-white/85">
            Email
          </label>
          <input
            id="contact-email"
            type="email"
            value={formState.email}
            onChange={(event) => setField("email", event.target.value)}
            className="mt-2 h-12 w-full rounded-lg border border-white/25 bg-[#0B0B0D] px-4 text-base text-white outline-none transition-colors placeholder:text-white/35 focus:border-white/50"
          />
          {fieldErrors.email ? <p className="mt-2 text-sm text-rose-300">{fieldErrors.email}</p> : null}
        </div>

        <div>
          <label htmlFor="contact-organization" className="text-sm font-medium text-white/85">
            Organization
          </label>
          <input
            id="contact-organization"
            type="text"
            value={formState.organization}
            onChange={(event) => setField("organization", event.target.value)}
            className="mt-2 h-12 w-full rounded-lg border border-white/25 bg-[#0B0B0D] px-4 text-base text-white outline-none transition-colors placeholder:text-white/35 focus:border-white/50"
          />
        </div>

        <div>
          <label htmlFor="contact-message" className="text-sm font-medium text-white/85">
            Message
          </label>
          <textarea
            id="contact-message"
            rows={6}
            value={formState.message}
            onChange={(event) => setField("message", event.target.value)}
            className="mt-2 w-full rounded-lg border border-white/25 bg-[#0B0B0D] px-4 py-3 text-base text-white outline-none transition-colors placeholder:text-white/35 focus:border-white/50"
          />
          {fieldErrors.message ? <p className="mt-2 text-sm text-rose-300">{fieldErrors.message}</p> : null}
        </div>
      </div>

      {status === "success" ? (
        <p className="mt-6 text-sm text-emerald-300">Thanks, your message has been sent.</p>
      ) : null}
      {status === "error" && submitError ? <p className="mt-6 text-sm text-rose-300">{submitError}</p> : null}

      <div className="mt-8 flex justify-start">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex min-h-[44px] items-center rounded-lg bg-white px-5 text-sm font-medium text-[#0B0B0D] transition-transform duration-200 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "sending" ? "Sending..." : "Submit"}
        </button>
      </div>
    </form>
  );
}
