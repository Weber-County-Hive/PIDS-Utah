// The Weber County Hive — PID Explainers Guide
// To add a new explainer: copy an object below, fill in the fields,
// and save it. weber-pid-guide.html reads this file and builds the
// guide automatically — you never need to touch that file by hand.
// IMPORTANT: the "link" value below must exactly match the real
// filename of the page you upload to GitHub.
const PID_PAGES = [
  {
    kind: "Start Here · General",
    title: "What Is a PID?",
    description: "The mechanism itself — how a Public Infrastructure District is created, who controls it, how it issues bonds, and how that debt gets repaid by the people who move into the development. Read this first if the term is new to you.",
    tags: ["Mechanism", "Statewide"],
    linkLabel: "Open explainer →",
    link: "pid_mechanism_map.html"
  },
  {
    kind: "For Homebuyers · General",
    title: "The Story of the \"Affordable\" House",
    description: "A plain-language, step-by-step walkthrough of how a PID bill gets left out of an affordability test at closing — with an interactive cost calculator, an optional HOA fee, and what it means for people who don't live anywhere near a PID.",
    tags: ["Plain-Language", "Calculator", "Disclosure"],
    linkLabel: "Open story →",
    link: "affordable-house-story.html"
  },
  {
    kind: "Interactive Tool · Utah County",
    title: "Utah County PID Cost Calculator",
    description: "An interactive comparison tool: what a home actually costs inside a PID versus a comparable home outside one, using real Utah County comps — plus a renter's-eye view of how PID costs show up as unbundled apartment fees.",
    tags: ["Calculator", "Utah County", "Renters"],
    linkLabel: "Open calculator →",
    link: "utah-county-explainer.html"
  },
  {
    kind: "Case Study · Box Elder County",
    title: "Stratos, the Ruby Pipeline & MIDA",
    description: "How the mechanism shows up in a real, live project: the Stratos data center development, the Ruby Pipeline gas contract it depends on, and MIDA's role approving it — including the evergreen clause outside experts say undercuts the project's own timeline.",
    tags: ["Case Study", "Box Elder County", "Data Centers"],
    linkLabel: "Open case study →",
    link: "stratos-ruby-pipeline-mida.html"
  },
  {
    kind: "Case Study · Schools & Bonding",
    title: "PIDs, Schools & Bonding",
    description: "How PIDs and tax increment financing interact with local school district funding, plus school bonding including the 2025 no-vote bonding change.",
    tags: ["Schools", "Bonding"],
    linkLabel: "Open explainer →",
    link: "weber-pid-school-funds.html"
  }
];
