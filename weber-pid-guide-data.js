// The Weber County Hive — PID Explainers Guide
// To add a new explainer: copy an object below, fill in the fields,
// and save it. weber-pid-guide.html reads this file and builds the
// guide automatically — you never need to touch that file by hand.
// IMPORTANT: the "link" value below must exactly match the real
// filename of the page you upload to GitHub.
// updated: "YYYY-MM-DD" — shown on the card as "Updated Mon D, YYYY".
// Cards appear in the order listed here (reading order).
const PID_PAGES = [
  {
    kind: "Start Here · General",
    title: "What Is a PID?",
    description: "The mechanism itself — how a Public Infrastructure District is created, who controls it, how it issues bonds, and how that debt gets repaid by the people who move into the development. Read this first if the term is new to you.",
    tags: ["Mechanism", "Statewide"],
    linkLabel: "Open explainer →",
    link: "pid_mechanism_map.html",
    updated: "2026-08-13"
  },
  {
    kind: "For Homebuyers · General",
    title: "The Story of the \"Affordable\" House",
    description: "A plain-language, step-by-step walkthrough of how a PID bill gets left out of an affordability test at closing — with an interactive cost calculator, an optional HOA fee, and what it means for people who don't live anywhere near a PID.",
    tags: ["Plain-Language", "Calculator", "Disclosure"],
    linkLabel: "Open story →",
    link: "affordable-house-story.html",
    updated: "2026-08-22"
  },
  {
    kind: "Interactive Tool · Utah County",
    title: "Utah County PID Cost Calculator",
    description: "An interactive comparison tool: what a home actually costs inside a PID versus a comparable home outside one, using real Utah County comps — plus a renter's-eye view of how PID costs show up as unbundled apartment fees.",
    tags: ["Calculator", "Utah County", "Renters"],
    linkLabel: "Open calculator →",
    link: "utah-county-explainer.html",
    updated: "2026-08-22"
  },
  {
    kind: "Case Study · Schools & Bonding",
    title: "PIDs, Schools & Bonding",
    description: "How PIDs and tax increment financing interact with local school district funding, plus school bonding including the 2025 no-vote bonding change.",
    tags: ["Schools", "Bonding"],
    linkLabel: "Open explainer →",
    link: "weber-pid-school-funds.html",
    updated: "2026-08-17"
  },
  {
    kind: "Case Study · Schools & Bonding",
    title: "What the New Boards Inherit",
    description: "Alpine School District splits in three on July 1, 2027. The boards seated in January 2026 inherit revenue promised away for decades and $201 million of debt approved without an election — after S.B. 188 lifted the borrowing cap for reorganized districts.",
    tags: ["Schools", "Bonding", "Utah County"],
    linkLabel: "Open case study →",
    link: "pidschoolsplitinheritance.html",
    updated: "2026-09-04"
  },
  {
    kind: "Case Study · Weber County",
    title: "The Nordic Village Case File",
    description: "A full case file on one Weber County PID — interactive cost calculators, a 40-year cost trajectory, and the county's own tax-diversion numbers going back to 2021, all built from primary-source budgets and disclosures.",
    tags: ["Case Study", "Weber County", "Calculator"],
    linkLabel: "Open case file →",
    link: "nordic-village-case-file.html",
    updated: "2026-08-27"
  },
  {
    kind: "Case Study · Weber County",
    title: "Three Boards, One Man, No Disclosure",
    description: "Snowbasin's General Manager sits as a trustee on three overlapping Weber County special districts governing his own employer's water, roads, and up to $300 million in infrastructure bonds — all appointed the same way as a cemetery board, with no bonds issued and the districts sitting dormant since a 2022 hotel deal collapsed.",
    tags: ["Case Study", "Weber County", "Conflict of Interest"],
    linkLabel: "Open case file →",
    link: "mount-ogden-pid-ratchford.html",
    updated: "2026-09-02"
  },
  {
    kind: "Case Study · Weber County",
    title: "The Boundary That Left Them Out",
    description: "Ogden Valley City's own incorporation study warned, in writing, that leaving the valley's biggest resorts out of the tax base would strain the budget. Three years later, that's exactly what happened — while a separate $300 million infrastructure authorization tied to the same resort sits unused, overseen by the resort's own top executive.",
    tags: ["Case Study", "Weber County", "Incorporation"],
    linkLabel: "Open case file →",
    link: "ogden-valley-boundary-exclusion.html",
    updated: "2026-09-26"
  },
  {
    kind: "Case Study · Box Elder County",
    title: "Stratos, the Ruby Pipeline & MIDA",
    description: "How the mechanism shows up in a real, live project: the Stratos data center development, the Ruby Pipeline gas contract it depends on, and MIDA's role approving it — including the evergreen clause outside experts say undercuts the project's own timeline.",
    tags: ["Case Study", "Box Elder County", "Data Centers"],
    linkLabel: "Open case study →",
    link: "stratos-ruby-pipeline-mida.html",
    updated: "2026-08-14"
  },
  {
    kind: "Investigation · Statewide",
    title: "The Middlemen: Who Profits From Utah's PID Boom",
    description: "The bankers who built Utah's PID market moved from D.A. Davidson to Piper Sandler in 2020 — and by 2026 the two firms lead Utah's entire municipal bond rankings. Plus: how Zions Bank shows up as advisor, feasibility-study author, underwriter, and trustee on the same deals, including its own written admission of the conflict that creates.",
    tags: ["Investigation", "Statewide", "Follow the Money"],
    linkLabel: "Read the investigation →",
    link: "weber-pid-underwriters.html",
    updated: "2026-08-30"
  },
  {
    kind: "Investigation · Statewide",
    title: "One Firm, Every Hat: Zions' Grip on Utah's PID Market",
    description: "Zions Bank shows up on PID after PID as feasibility-study author, advisor, underwriter, direct purchaser, trustee, disclosure agent, and the firm that bills and forecloses on homeowners — sometimes on the very same deal. Includes Zions' own written admission of the conflict that creates.",
    tags: ["Investigation", "Statewide", "Follow the Money"],
    linkLabel: "Read the investigation →",
    link: "weber-pid-zions.html",
    updated: "2026-08-30"
  }
];
