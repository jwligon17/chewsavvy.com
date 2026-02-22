export type ContentLink = {
  label: string;
  href: string;
  description?: string;
};

export type ContentCta = {
  label: string;
  href: string;
  enabled?: boolean;
};

export type MainNavItem = {
  label: string;
  href?: string;
  megaMenu?: {
    groups: {
      title: string;
      links: ContentLink[];
    }[];
  };
};

export type ResourceCategory = "Case Study" | "Guide" | "Blog" | "Webinar" | "Download";

export type ResourceItem = {
  slug: string;
  title: string;
  summary: string;
  category: ResourceCategory;
  href: string;
  body: string[];
};

export type ChewsavvyContent = {
  brand: {
    name: string;
    tagline?: string;
    shortDescription?: string;
    logo?: {
      src: string;
      alt: string;
    };
  };
  topBar: {
    enabled: boolean;
    text: string;
    emphasize: string;
  };
  utilityLinks: {
    label: string;
    href: string;
  }[];
  ctas: {
    primary: ContentCta;
    secondary: ContentCta;
  };
  mainNav: MainNavItem[];
  footer: {
    links: ContentLink[];
    legal: ContentLink[];
    contact: {
      email: string;
      location: string;
      phone: string;
    };
  };
  homePage: {
    announcement?: {
      text: string;
      link: ContentLink;
    };
    hero: {
      headline: string;
      supportingLine?: string;
      subheadline: string;
      bullets: string[];
      primaryCta: ContentCta;
      secondaryCta?: ContentCta;
      image?: {
        src: string;
        alt: string;
        variant?: "phone" | "photo";
      };
      heroVisual: {
        metricCard: {
          label: string;
          value: string;
          delta: string;
          deltaLabel: string;
        };
        miniTable: {
          title: string;
          columns: string[];
          rows: string[][];
        };
      };
      illustrationLabel: string;
    };
    stats: {
      heading: string;
      description: string;
      items: {
        value: string;
        label: string;
      }[];
    };
    whatYouGet: {
      title: string;
      items: Array<{ title: string; description?: string }>;
    };
    coreCapabilities: {
      eyebrow: string;
      title: string;
      description: string;
      cards: {
        title: string;
        description: string;
      }[];
      roadmapNote: string;
    };
    modules: {
      eyebrow: string;
      title: string;
      description: string;
      cardLinkLabel: string;
      cards: {
        title: string;
        description: string;
        href: string;
      }[];
    };
    finalCTA: {
      headline: string;
      supportingText: string;
      primaryCta: ContentCta;
      secondaryCta: ContentCta;
    };
  };
  platformPage: {
    overview: {
      eyebrow: string;
      title: string;
      description: string;
    };
    modules: {
      title: string;
      description: string;
      cardLinkLabel: string;
    };
    integrationsTeaser: {
      title: string;
      description: string;
      links: ContentLink[];
    };
    securityTeaser: {
      title: string;
      description: string;
      bullets: string[];
    };
  };
  solutionsPage: {
    byOrganization: {
      eyebrow: string;
      title: string;
      description: string;
      organizations: {
        name: string;
        summary: string;
        focusAreas: string[];
      }[];
    };
  };
  resourcesPage: {
    heading: {
      eyebrow: string;
      title: string;
      description: string;
    };
    filterLabel: string;
    allFilterLabel: string;
    cardLinkLabel: string;
    categories: ResourceCategory[];
    items: ResourceItem[];
  };
  companyAboutPage: {
    hero: {
      eyebrow: string;
      title: string;
      description: string;
    };
    mission: {
      title: string;
      body: string;
    };
    values: {
      title: string;
      items: {
        title: string;
        description: string;
      }[];
    };
    howItWorks: {
      title: string;
      steps: {
        title: string;
        description: string;
      }[];
    };
    whyChewsavvy: {
      title: string;
      body: string;
    };
  };
  contactPage: {
    hero: {
      eyebrow: string;
      title: string;
      description: string;
    };
    form: {
      submitLabel: string;
      successTitle: string;
      successBody: string;
      fields: {
        name: string;
        email: string;
        org: string;
        message: string;
      };
      errors: {
        required: string;
        emailInvalid: string;
      };
    };
  };
};

export const chewsavvyContent: ChewsavvyContent = {
  brand: {
    name: "Chewsavvy",
    logo: { src: "/chewsavvy-logo.png", alt: "Chewsavvy" },
    tagline: "Compete with top savers. Earn stars by clipping and redeeming deals.",
    shortDescription:
      "Chewsavvy brings scattered deals into one daily feed so you can clip, redeem, and climb the weekly leaderboard.",
  },
  topBar: {
    enabled: true,
    text: "Compete with top savers. Earn stars by clipping and redeeming deals.",
    emphasize: "Earn stars",
  },
  utilityLinks: [],
  ctas: {
    primary: {
      label: "Get early access",
      href: "/contact",
    },
    secondary: {
      label: "Login",
      href: "/login",
      enabled: false,
    },
  },
  mainNav: [
    {
      label: "Product",
      href: "/product",
    },
    {
      label: "Download Now",
      href: "/#download",
    },
    {
      label: "How it Works",
      href: "/#how-it-works",
    },
    {
      label: "Security & Privacy",
      href: "/security-privacy",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ],
  footer: {
    links: [
      { label: "Product", href: "/product" },
      { label: "Security & Privacy", href: "/security-privacy" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
    contact: {
      email: "info@chewsavvy.com",
      location: "United States",
      phone: "",
    },
  },
  homePage: {
    announcement: {
      text: "New: Weekly leaderboard season is live.",
      link: {
        label: "See how it works",
        href: "/product",
      },
    },
    hero: {
      headline: "Know every deal.",
      supportingLine:
        "Chewsavvy pulls the best deals from your favorite stores into one daily feed. Clip what you want, redeem in-store or online, and earn stars that move you up the weekly leaderboard.",
      subheadline:
        "Discover deals, clip and redeem in minutes, earn stars, and track verified savings you can share.",
      bullets: [
        "Fresh deals from your favorite stores (updated daily)",
        "Stars, streaks, and weekly leaderboards",
        "Verified savings totals you can share",
      ],
      primaryCta: {
        label: "Download our App",
        href: "/contact",
      },
      heroVisual: {
        metricCard: {
          label: "Stars this week",
          value: "1,240",
          delta: "+18%",
          deltaLabel: "vs last week",
        },
        miniTable: {
          title: "Top Deals Right Now",
          columns: ["Store", "Deal", "Stars", "Savings"],
          rows: [
            ["FreshMart", "30% off snacks", "+40", "$12.40"],
            ["HomeSupply", "Buy 1 Get 1", "+28", "$18.00"],
          ],
        },
      },
      illustrationLabel: "Chewsavvy savings and leaderboard preview",
    },
    stats: {
      heading: "Savings momentum you can see",
      description:
        "Track fresh deals, redeemed offers, and verified savings totals in one shareable view.",
      items: [
        { value: "12k+", label: "deals refreshed every day" },
        { value: "$84", label: "average monthly verified savings" },
        { value: "7.4", label: "average weekly savings streak (days)" },
        { value: "3.1x", label: "more redemptions with leaderboard motivation" },
      ],
    },
    whatYouGet: {
      title: "Actionable, Verified Savings",
      items: [
        {
          title: "Deal feed that stays fresh",
          description: "",
        },
        {
          title: "Competition that keeps you saving",
          description: "",
        },
        {
          title: "Savings totals you can prove",
          description: "",
        },
      ],
    },
    coreCapabilities: {
      eyebrow: "CORE CAPABILITIES",
      title: "A Focused Toolkit for Saving",
      description:
        "Personalized deal discovery, motivation through competition, and progress you can share.",
      cards: [
        {
          title: "Deal Discovery",
          description:
            "Personalized deals with freshness you can trust.",
        },
        {
          title: "Competition & Motivation",
          description:
            "Leaderboards, streaks, and challenges that keep you saving.",
        },
        {
          title: "Insights & Sharing",
          description: "Track your savings and share your wins.",
        },
      ],
      roadmapNote:
        "More retail and wallet integrations are on the roadmap as we expand verified redemption coverage.",
    },
    modules: {
      eyebrow: "Capabilities",
      title: "Core capabilities for smarter savings",
      description:
        "Find the best deals faster, stay motivated with competition, and prove your savings with confidence.",
      cardLinkLabel: "View capability details",
      cards: [
        {
          title: "Deal Discovery",
          description:
            "Personalized deal streams, freshness indicators, and smart filtering by category and store.",
          href: "/product#deal-discovery",
        },
        {
          title: "Competition & Motivation",
          description:
            "Stars, streaks, and weekly leaderboards designed to keep saving fun and consistent.",
          href: "/product#competition-motivation",
        },
        {
          title: "Insights & Sharing",
          description: "Verified savings tracking and shareable progress snapshots you can post in seconds.",
          href: "/product#insights-sharing",
        },
      ],
    },
    finalCTA: {
      headline: "Ready to start climbing the weekly savings leaderboard?",
      supportingText: "Launching soon — join the waitlist.",
      primaryCta: {
        label: "Get early access",
        href: "/contact",
      },
      secondaryCta: {
        label: "See how it works",
        href: "/#how-it-works",
      },
    },
  },
  platformPage: {
    overview: {
      eyebrow: "Platform Overview",
      title: "A complete savings layer for everyday shoppers",
      description:
        "Chewsavvy brings deal discovery, redemption tracking, and weekly competition into one practical loop.",
    },
    modules: {
      title: "Core Capabilities",
      description: "A focused toolkit for discovering, redeeming, and sharing savings.",
      cardLinkLabel: "View capability",
    },
    integrationsTeaser: {
      title: "Integrations",
      description:
        "Connect Chewsavvy with retailers, wallets, and partner channels to verify savings and keep feeds fresh.",
      links: [
        { label: "Retail Partners", href: "#", description: "Verified offers and fast deal refresh across stores." },
        { label: "Wallet Sync", href: "#", description: "Clip once and redeem with fewer checkout steps." },
        { label: "Sharing Tools", href: "#", description: "Publish weekly progress cards and savings snapshots." },
      ],
    },
    securityTeaser: {
      title: "Security",
      description:
        "Built for consumer trust with practical controls, account security, and reliable infrastructure.",
      bullets: [
        "Purpose-limited data handling with minimized personal data collection.",
        "Strong account protections and least-privilege internal access.",
        "Reliable hosting with backups and monitored support workflows.",
      ],
    },
  },
  solutionsPage: {
    byOrganization: {
      eyebrow: "By Saver Type",
      title: "Savings patterns matched to how you shop",
      description:
        "Chewsavvy adapts to your shopping habits with tailored deal discovery and competition dynamics.",
      organizations: [
        {
          name: "Students",
          summary: "Stretch every dollar with daily essentials, food deals, and leaderboard-friendly streaks.",
          focusAreas: [
            "Campus-area deal discovery",
            "Budget-first shopping filters",
            "Fast shareable weekly wins",
          ],
        },
        {
          name: "Families",
          summary: "Plan recurring purchases with verified savings across grocery, household, and pharmacy.",
          focusAreas: [
            "Household-focused deal bundles",
            "Savings history by category",
            "Shared family progress snapshots",
          ],
        },
        {
          name: "Competitive Savers",
          summary: "Turn daily deal hunting into a game with stars, streaks, and weekly rank movement.",
          focusAreas: [
            "Leaderboard strategies",
            "Challenge-based saving goals",
            "Performance trend insights",
          ],
        },
      ],
    },
  },
  resourcesPage: {
    heading: {
      eyebrow: "Resources",
      title: "Playbooks, examples, and templates for top savers",
      description:
        "Browse practical resources for finding better deals, improving redemption rates, and sharing savings progress.",
    },
    filterLabel: "Filter by category",
    allFilterLabel: "All",
    cardLinkLabel: "View resource",
    categories: ["Case Study", "Guide", "Blog", "Webinar", "Download"],
    items: [
      {
        slug: "backlog-reduction-case-study",
        title: "Weekly Savings Climb Case Study",
        summary: "How one user moved from casual clipping to a top-10 weekly leaderboard rank.",
        category: "Case Study",
        href: "/resources/backlog-reduction-case-study",
        body: [
          "Insert approved case study narrative and context.",
          "Add baseline metrics, implementation scope, and outcomes.",
          "Include stakeholder quote and lessons learned.",
        ],
      },
      {
        slug: "deal-stacking-guide",
        title: "Deal Stacking Guide",
        summary: "Framework for combining store offers, app deals, and timing windows.",
        category: "Guide",
        href: "/resources/deal-stacking-guide",
        body: [
          "Define operating model and governance roles.",
          "Document SLA tiers and escalation logic.",
          "Add implementation checklist and review cadence.",
        ],
      },
      {
        slug: "deal-feed-freshness-blog",
        title: "Deal Feed Freshness",
        summary: "How freshness windows and verification reduce deal decay.",
        category: "Blog",
        href: "/resources/deal-feed-freshness-blog",
        body: [
          "Explain why data quality drives operational decisions.",
          "Add practical validation rules and examples.",
          "Provide recurring data review workflow.",
        ],
      },
      {
        slug: "leaderboard-strategy-webinar",
        title: "Leaderboard Strategy Webinar",
        summary: "Session recap on stars, streaks, and weekly climb tactics.",
        category: "Webinar",
        href: "/resources/leaderboard-strategy-webinar",
        body: [
          "Add webinar summary and key takeaways.",
          "Link follow-up templates.",
          "Insert timestamped highlights.",
        ],
      },
      {
        slug: "weekly-savings-planner-download",
        title: "Weekly Savings Planner",
        summary: "Downloadable template for planning clips, redemptions, and goals.",
        category: "Download",
        href: "/resources/weekly-savings-planner-download",
        body: [
          "Outline template structure and intended use.",
          "Add sample language by request severity.",
          "Include review and approval workflow.",
        ],
      },
      {
        slug: "shareable-progress-case-study",
        title: "Shareable Progress Case Study",
        summary: "Story on how sharing verified savings boosted motivation and streak consistency.",
        category: "Case Study",
        href: "/resources/shareable-progress-case-study",
        body: [
          "Add communication workflow before/after launch.",
          "Include support center impact metrics.",
          "Capture operational takeaways for replication.",
        ],
      },
      {
        slug: "streak-building-guide",
        title: "Streak Building Guide",
        summary: "Practical playbook for turning occasional savings into weekly habits.",
        category: "Guide",
        href: "/resources/streak-building-guide",
        body: [
          "Add phased onboarding model for crews.",
          "Include supervisor coaching checklist.",
          "Define adoption milestones.",
        ],
      },
      {
        slug: "monthly-budget-savings-blog",
        title: "Monthly Budget Savings Planning",
        summary: "How to roll up weekly wins into month-over-month savings momentum.",
        category: "Blog",
        href: "/resources/monthly-budget-savings-blog",
        body: [
          "Describe reporting views for financial stakeholders.",
          "Map common data requests to standard reports.",
          "Add pre-budget prep timeline.",
        ],
      },
      {
        slug: "verified-redemption-webinar",
        title: "Verified Redemption Webinar",
        summary: "How Chewsavvy validates redeemed deals and reports true savings totals.",
        category: "Webinar",
        href: "/resources/verified-redemption-webinar",
        body: [
          "Summarize quality assurance framework.",
          "Add scorecard indicators and acceptance criteria.",
          "Include handoff and closeout best practices.",
        ],
      },
      {
        slug: "implementation-checklist-download",
        title: "30-Day Savings Habit Checklist",
        summary: "Downloadable checklist for daily deal discovery and weekly leaderboard goals.",
        category: "Download",
        href: "/resources/implementation-checklist-download",
        body: [
          "Add checklist by launch phase.",
          "Include team ownership matrix.",
          "Define go-live readiness indicators.",
        ],
      },
    ],
  },
  companyAboutPage: {
    hero: {
      eyebrow: "About Chewsavvy",
      title: "Purpose-built software for smarter everyday savings",
      description:
        "Chewsavvy helps shoppers find better deals faster and stay motivated with fair, fun competition.",
    },
    mission: {
      title: "Mission",
      body: "Help people turn scattered offers into verified savings outcomes through practical, motivating daily workflows.",
    },
    values: {
      title: "Values",
      items: [
        {
          title: "Freshness First",
          description: "Prioritize up-to-date deal coverage so users can act before offers expire.",
        },
        {
          title: "Verified Outcomes",
          description: "Measure real redeemed savings, not vanity metrics.",
        },
        {
          title: "Motivation by Design",
          description: "Use stars, streaks, and leaderboards to make saving more consistent and fun.",
        },
      ],
    },
    howItWorks: {
      title: "How It Works",
      steps: [
        {
          title: "Discover",
          description: "Browse a daily feed of relevant, high-value deals from trusted sources.",
        },
        {
          title: "Clip & Redeem",
          description: "Save offers quickly and redeem with fewer steps at checkout.",
        },
        {
          title: "Compete & Share",
          description: "Earn stars, climb the weekly leaderboard, and share verified savings progress.",
        },
      ],
    },
    whyChewsavvy: {
      title: "Why Chewsavvy",
      body: "Saving is easier when freshness, verification, and motivation work together. Chewsavvy combines all three in one simple app loop.",
    },
  },
  contactPage: {
    hero: {
      eyebrow: "Contact",
      title: "Talk with the Chewsavvy team",
      description:
        "Join beta / early access and tell us how you want deals, streaks, and leaderboard competition to work for you.",
    },
    form: {
      submitLabel: "Request early access",
      successTitle: "Thanks for reaching out",
      successBody: "You’re on our radar for early access. A Chewsavvy team member will follow up soon.",
      fields: {
        name: "Name",
        email: "Email",
        org: "Favorite stores (optional)",
        message: "Message (optional)",
      },
      errors: {
        required: "This field is required.",
        emailInvalid: "Enter a valid email address.",
      },
    },
  },
};
