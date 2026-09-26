/* ============================================================
   Weber County Hive — PID Research index data
   ------------------------------------------------------------
   FIELDS
     id       unique slug, lowercase, no spaces
     title    headline shown on the card
     region   primary place tag (drives the coloured chip)
     summary  one or two sentences — the finding, not a teaser
     date     ISO "YYYY-MM-DD" — publication or last major update.
              Leave "" if unknown; undated entries sort last and
              show no date chip.
     updated  ISO "YYYY-MM-DD" — last update; shown on the card as
              "Updated Mon D, YYYY" and used for newest-first order.
              Leave "" to fall back to date.
     pinned   optional true — always shows first (no label shown)
     order    optional number — reading order (1 = first). Cards
              with a number sort by it; cards without one go after,
              newest update first.
     tags     lowercase strings, used by search + filter chips.
              Keep them reusable so the filter row stays short.
     page     filename of the page
     status   "live" or anything else (renders "Coming soon")
   ============================================================ */

const PID_PAGES = [
  {
    id: "school-split-inheritance",
    order: 6,
    title: "What the New Boards Inherit",
    region: "Utah County",
    summary: "Alpine School District splits in three on July 1, 2027. The boards seated in January 2026 inherit revenue promised away for decades and $201 million of debt approved without an election — after S.B. 188 lifted the borrowing cap for reorganized districts. Nobody has counted the project areas inside each new boundary.",
    date: "2026-09-04",
    updated: "2026-09-04",
    tags: ["schools", "bonding", "tax increment", "utah county", "no-vote debt", "legislation"],
    page: "pidschoolsplitinheritance.html",
    status: "live"
  },
  {
    id: "school-funds",
    order: 5,
    title: "PIDs, Schools & Bonding",
    region: "Schools & Bonding",
    summary: "How PIDs and tax increment financing interact with local school district funding, plus school bonding including the 2025 no-vote bonding change. Includes the full Sweetwater CRA #3 ledger and the Nordic Village and West Weber case files.",
    date: "2026-08-17",
    updated: "2026-08-17",
    tags: ["schools", "bonding", "tax increment", "no-vote debt", "case file"],
    page: "weber-pid-school-funds.html",
    status: "live"
  },
  {
    id: "mechanism-map",
    order: 2,
    title: "PID Mechanism Map",
    region: "General Overview",
    summary: "A statewide, county-agnostic explainer of how Public Infrastructure Districts work — the mechanism behind every other page in this project.",
    date: "2026-08-13",
    updated: "2026-08-13",
    tags: ["explainer", "statewide", "mechanism"],
    page: "pid_mechanism_map.html",
    status: "live"
  },
  {
    id: "affordable-house",
    order: 3,
    title: "The Story of the \"Affordable\" House",
    region: "For Homebuyers",
    summary: "A plain-language, step-by-step walkthrough of how a PID bill gets left out of an affordability test — with an interactive cost calculator and an optional HOA fee.",
    date: "2026-08-22",
    updated: "2026-08-22",
    tags: ["homebuyers", "explainer", "calculator", "housing costs"],
    page: "affordable-house-story.html",
    status: "live"
  },
  {
    id: "utah-county-explainer",
    order: 4,
    title: "Where the Growth Money Goes",
    region: "Utah County",
    summary: "Interactive calculator comparing a PID home to a non-PID home at the same price, a real Utah County renter case study, and the Utah City and Sweetwater case files.",
    date: "2026-08-14",
    updated: "2026-08-22",
    tags: ["utah county", "calculator", "homebuyers", "housing costs", "case file"],
    page: "utah-county-explainer.html",
    status: "live"
  },
  {
    id: "nordic-village",
    order: 7,
    title: "The Nordic Village Case File",
    region: "Weber County",
    summary: "A full case file on one Weber County PID — interactive cost calculators, a 40-year cost trajectory, and the county's own tax-diversion numbers going back to 2021, all built from primary-source budgets and disclosures.",
    date: "2026-08-27",
    updated: "2026-08-27",
    tags: ["weber county", "case file", "calculator", "tax increment"],
    page: "nordic-village-case-file.html",
    status: "live"
  },
  {
    id: "mount-ogden-ratchford",
    order: 8,
    title: "Three Boards, One Man, No Disclosure",
    region: "Weber County",
    summary: "Snowbasin's General Manager sits as a trustee on three overlapping Weber County special districts governing his own employer's water, roads, and up to $300 million in infrastructure bonds — all appointed the same way as a cemetery board.",
    date: "2026-09-02",
    updated: "2026-09-02",
    tags: ["weber county", "disclosure", "conflicts of interest", "appointed officials", "bonding"],
    page: "mount-ogden-pid-ratchford.html",
    status: "live"
  },
  {
    id: "boundary-exclusion",
    order: 9,
    title: "The Boundary That Left Them Out",
    region: "Weber County",
    summary: "Ogden Valley City's own incorporation study warned that leaving the valley's biggest resorts out of the tax base would strain the budget. It did — while a separate $300 million infrastructure authorization tied to the same resort sits unused, overseen by the resort's own top executive.",
    date: "2026-09-02",
    updated: "2026-09-26",
    tags: ["weber county", "boundaries", "bonding", "conflicts of interest"],
    page: "ogden-valley-boundary-exclusion.html",
    status: "live"
  },
  {
    id: "underwriters",
    order: 11,
    title: "The Middlemen: Who Profits From Utah's PID Boom",
    region: "Statewide",
    summary: "The bankers who built Utah's PID market moved from D.A. Davidson to Piper Sandler in 2020 — and by 2026 the two firms lead Utah's entire municipal bond rankings. Plus how Zions Bank shows up as advisor, feasibility-study author, underwriter, and trustee on the same deals.",
    date: "2026-08-30",
    updated: "2026-08-30",
    tags: ["statewide", "underwriters", "bonding", "conflicts of interest"],
    page: "weber-pid-underwriters.html",
    status: "live"
  },
  {
    id: "zions",
    order: 12,
    title: "One Firm, Every Hat: Zions' Grip on Utah's PID Market",
    region: "Statewide",
    summary: "Zions Bank shows up on PID after PID as feasibility-study author, advisor, underwriter, direct purchaser, trustee, disclosure agent, and the firm that bills and forecloses on homeowners — sometimes on the very same deal. Includes Zions' own written admission of the conflict that creates.",
    date: "2026-08-30",
    updated: "2026-08-30",
    tags: ["statewide", "underwriters", "bonding", "conflicts of interest"],
    page: "weber-pid-zions.html",
    status: "live"
  },
  {
    id: "stratos-ruby",
    order: 10,
    title: "Stratos & Ruby Pipeline",
    region: "Box Elder County",
    summary: "A case study on the Stratos data center project and the Ruby Pipeline, and how MIDA's authority reaches into Box Elder County development.",
    date: "2026-08-14",
    updated: "2026-08-14",
    tags: ["box elder", "mida", "data centers", "case file", "tax increment"],
    page: "stratos-ruby-pipeline-mida.html",
    status: "live"
  },
  {
    id: "full-guide",
    order: 1,
    title: "Start Here: What PIDs Are and How to Read This Project",
    region: "Start Here",
    summary: "New to PIDs? Begin with this guide. It explains what a Public Infrastructure District is, how it borrows money, and who pays that money back, then lists every page in this project in reading order, from the basics through real Utah case files.",
    date: "2026-08-14",
    updated: "2026-09-26",
    tags: ["start here", "explainer", "directory"],
    page: "weber-pid-guide.html",
    status: "live",
    pinned: true
  }
];

/* ------------------------------------------------------------
   TEMPLATE — copy inside the array above to add a page.

  {
    id: "new-page-slug",
    title: "Headline",
    region: "Utah County",
    summary: "…",
    date: "",                        // "YYYY-MM-DD" or ""
    updated: "",                     // "YYYY-MM-DD" or ""
    tags: ["tax increment"],         // lowercase, reuse existing tags
    page: "newpagefilename.html",
    status: "planned"                // "live" makes the card clickable
  },

   ------------------------------------------------------------ */
