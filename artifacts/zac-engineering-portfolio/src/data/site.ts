export type ProjectContext = "Academic" | "Personal" | "Professional";

export type ProjectCategory =
  | "Mechanical Design"
  | "Mechatronics"
  | "Manufacturing"
  | "Testing & Instrumentation"
  | "Software"
  | "Personal Builds"
  | "Prototyping"
  | "Automotive"
  | "Mechanical"
  | "Product"
  | "Web / Brand"
  | "Professional";

export type CaseStudySection = { title: string; copy: string };

export type Project = {
  slug: string;
  index: string;
  context: ProjectContext;
  categories: ProjectCategory[];
  discipline: string;
  title: string;
  shortTitle: string;
  summary: string;
  role: string;
  tools: string[];
  year: string;
  accent: string;
  brief: string;
  approach: string[];
  deliverables: string[];
  outcomes: string[];
  status: string;
  image: string;
  imageAlt: string;
  galleryImages?: Array<{ src: string; alt: string }>;
  caseStudySections?: CaseStudySection[];
};

export const site = {
  name: "Zechariah “Zac” Diegelman",
  firstName: "Zac Diegelman",
  title: "Mechanical Engineering Student",
  location: "Charlotte, North Carolina",
  school: "UNC Charlotte",
  degree: "B.S. Mechanical Engineering",
  graduation: "Expected December 2027",
  email: "zdiegelm@charlotte.edu",
  linkedin: "https://www.linkedin.com/in/zechariahdiegelman/",
  intro:
    "I design, build, analyze, test, troubleshoot, and improve physical systems.",
  availability: "Open to internships, co-ops, and engineering opportunities",
};

/** Temporary stock references. Replace paths here when project photography is available. */
export const stockImages = {
  robotics: {
    src: "/images/stock/robotics-arm.jpg",
    alt: "Temporary stock image of an engineering workstation with code and hardware",
    note: "Temporary stock image — not documentation of Zac’s project.",
  },
  instrumentation: {
    src: "/images/stock/instrumentation.jpg",
    alt: "Temporary stock image of a close-up electronics and instrumentation board",
    note: "Temporary stock image — not documentation of Zac’s project.",
  },
  additive: {
    src: "/images/stock/additive-manufacturing.jpg",
    alt: "Temporary stock image of a designer working at a technical workstation",
    note: "Temporary stock image — not documentation of Zac’s project.",
  },
  prototyping: {
    src: "/images/stock/prototyping.jpg",
    alt: "Temporary stock image of engineering drawings and tools on a prototyping table",
    note: "Temporary stock image — not documentation of Zac’s project.",
  },
  accord: {
    src: "/images/stock/accord-engine.jpg",
    alt: "Temporary stock image of hands inspecting an automotive engine in a workshop",
    note: "Temporary stock image — replace with Accord engine-project photography.",
  },
  verseKey: {
    src: "/images/stock/versekey-product.jpg",
    alt: "Temporary stock image of a smartphone beside a software development workstation",
    note: "Temporary stock image — replace with VerseKey screenshots.",
  },
  jAdamBuilders: {
    src: "/images/stock/j-adam-builders.jpg",
    alt: "Temporary stock image of a contemporary residential home",
    note: "Temporary stock image — replace with J. Adam Builders website captures.",
  },
  handsOn: {
    src: "/images/stock/hands-on-work.jpg",
    alt: "Temporary stock image of a craftsperson working with wood in a workshop",
    note: "Temporary stock image — replace with Zac’s building and fabrication photography.",
  },
  costaRica: {
    src: "/images/stock/costa-rica.jpg",
    alt: "Temporary stock image of a forest waterfall in Costa Rica",
    note: "Temporary stock image — Costa Rica.",
  },
  honduras: {
    src: "/images/stock/honduras.jpg",
    alt: "Temporary stock image of Tegucigalpa, Honduras, and surrounding mountains",
    note: "Temporary stock image — Honduras.",
  },
} as const;

export const projectFilters: Array<"All" | ProjectCategory> = [
  "All",
  "Mechanical Design",
  "Mechatronics",
  "Manufacturing",
  "Testing & Instrumentation",
  "Software",
  "Personal Builds",
];

export const projects: Project[] = [
  {
    slug: "robotic-manipulator",
    index: "01",
    context: "Academic",
    categories: ["Mechanical Design", "Mechatronics"],
    discipline: "Mechanical systems · Rotary motion",
    title: "Robotic Manipulator / Rotary Axis Design",
    shortTitle: "Robotic manipulator",
    summary:
      "A focused study in translating rotary motion into a controllable, serviceable mechanical assembly.",
    role: "Mechanical design, analysis, documentation",
    tools: [
      "CAD",
      "Mechanism design",
      "Tolerance thinking",
      "Technical documentation",
    ],
    year: "2025",
    accent: "cyan",
    brief:
      "Design a rotary axis for a robotic manipulator with attention to the interface between structure, motion, and control.",
    approach: [
      "Defined the axis envelope and interfaces before selecting components.",
      "Developed a parametric assembly to make design intent visible and revisions inexpensive.",
      "Documented open questions and verification steps rather than assuming performance.",
    ],
    deliverables: [
      "Parametric CAD assembly",
      "Interface and concept sketches",
      "Design review documentation",
    ],
    outcomes: [
      "Editable outcome placeholder — add measured repeatability or load results when available.",
      "Editable outcome placeholder — add final design decision and rationale when available.",
    ],
    status: "Case study in progress",
    image: stockImages.robotics.src,
    imageAlt: stockImages.robotics.alt,
  },
  {
    slug: "mechatronics-vibration",
    index: "02",
    context: "Academic",
    categories: ["Mechatronics", "Testing & Instrumentation"],
    discipline: "Experimental methods · Dynamics",
    title: "Mechatronics / Vibrating Beam Experimental System",
    shortTitle: "Vibrating beam system",
    summary:
      "An experimental system for making vibration behavior observable through a repeatable physical setup.",
    role: "System design, test setup, troubleshooting",
    tools: [
      "Experimental design",
      "Sensors",
      "Data collection",
      "Troubleshooting",
    ],
    year: "2025",
    accent: "amber",
    brief:
      "Build a practical test system that connects a physical beam, instrumentation, and repeatable data collection.",
    approach: [
      "Separated the test fixture, excitation, measurement, and observation questions.",
      "Focused on repeatability and access so the setup could be adjusted without starting over.",
      "Used test planning to identify what must be measured before interpreting behavior.",
    ],
    deliverables: [
      "Physical test fixture",
      "Instrumentation plan",
      "Test procedure and observations",
    ],
    outcomes: [
      "Editable outcome placeholder — add frequency response or measured behavior when available.",
      "Editable outcome placeholder — add troubleshooting findings when available.",
    ],
    status: "Case study in progress",
    image: stockImages.instrumentation.src,
    imageAlt: stockImages.instrumentation.alt,
  },
  {
    slug: "additive-manufacturing",
    index: "03",
    context: "Academic",
    categories: ["Mechanical Design", "Manufacturing"],
    discipline: "Additive manufacturing · CAD",
    title: "Additive Manufacturing / Advanced 3D Design",
    shortTitle: "Advanced 3D design",
    summary:
      "A CAD-to-part workflow exploring how geometry, process constraints, and iteration affect a physical result.",
    role: "3D design, manufacturability, iteration",
    tools: [
      "Parametric CAD",
      "Additive manufacturing",
      "Design for process",
      "Iteration",
    ],
    year: "2024",
    accent: "violet",
    brief:
      "Explore an additive manufacturing workflow where the digital model has to anticipate the physical process.",
    approach: [
      "Built geometry with edits and manufacturing logic in mind.",
      "Considered support, orientation, access, and inspection as design inputs.",
      "Used physical iteration to turn a model into a more informed design.",
    ],
    deliverables: [
      "Advanced 3D model",
      "Manufacturing-ready export",
      "Iteration notes",
    ],
    outcomes: [
      "Editable outcome placeholder — add print orientation or material details when available.",
      "Editable outcome placeholder — add lessons from physical iteration when available.",
    ],
    status: "Case study in progress",
    image: stockImages.additive.src,
    imageAlt: stockImages.additive.alt,
  },
  {
    slug: "engineering-design-prototyping",
    index: "04",
    context: "Academic",
    categories: ["Mechanical Design", "Manufacturing", "Prototyping"],
    discipline: "Design process · Physical build",
    title: "Engineering Design & Prototyping",
    shortTitle: "Design & prototyping",
    summary:
      "A hands-on design process grounded in making, learning from imperfect prototypes, and improving the next version.",
    role: "Concept development, fabrication, test learning",
    tools: [
      "Rapid prototyping",
      "Fabrication",
      "Design reviews",
      "Problem solving",
    ],
    year: "2024",
    accent: "green",
    brief:
      "Move from a design question to a physical prototype, using each build to reduce uncertainty.",
    approach: [
      "Started with the user, interface, and failure questions rather than a polished rendering.",
      "Built quickly enough to expose fit, access, and usability issues.",
      "Captured what changed between versions and why.",
    ],
    deliverables: [
      "Concept sketches",
      "Physical prototype",
      "Build and revision notes",
    ],
    outcomes: [
      "Editable outcome placeholder — add prototype count or final evaluation when available.",
      "Editable outcome placeholder — add next-step recommendation when available.",
    ],
    status: "Case study in progress",
    image: stockImages.prototyping.src,
    imageAlt: stockImages.prototyping.alt,
  },
  {
    slug: "1995-honda-accord-engine-project",
    index: "05",
    context: "Personal",
    categories: ["Personal Builds", "Automotive", "Mechanical"],
    discipline: "Automotive · Hands-on mechanical work",
    title: "1995 Honda Accord Engine Project",
    shortTitle: "Honda Accord engine project",
    summary:
      "A real engine-swap project built around careful disassembly, fitment, troubleshooting, and persistence.",
    role: "Hands-on mechanical work, troubleshooting, assembly",
    tools: [
      "Automotive tools",
      "Disassembly",
      "Reassembly",
      "Fitment",
      "Troubleshooting",
    ],
    year: "Year to add",
    accent: "steel",
    brief:
      "A personal automotive project where the value is practical mechanical experience: working with real hardware, identifying problems, and adapting when the plan changes.",
    approach: [],
    deliverables: [],
    outcomes: [],
    status: "Project details in progress",
    image: stockImages.accord.src,
    imageAlt: stockImages.accord.alt,
    galleryImages: [
      { src: stockImages.accord.src, alt: stockImages.accord.alt },
    ],
    caseStudySections: [
      {
        title: "Overview",
        copy: "A hands-on engine-swap and automotive mechanical project undertaken outside the classroom.",
      },
      {
        title: "Why I Took It On",
        copy: "A chance to learn directly from a complex physical system and build confidence through real mechanical work.",
      },
      {
        title: "Mechanical Work",
        copy: "The work involved tools, disassembly, reassembly, and close attention to how components interface.",
      },
      {
        title: "Challenges",
        copy: "Real hardware does not always follow the expected sequence. The project required patience and a willingness to revise the plan.",
      },
      {
        title: "Troubleshooting",
        copy: "Problems were approached by inspecting the system, isolating likely causes, and learning from each attempt.",
      },
      {
        title: "Assembly / Fitment",
        copy: "Fit, access, sequence, and the relationship between neighboring components shaped the work.",
      },
      {
        title: "What I Learned",
        copy: "The project reinforced persistence, mechanical awareness, and the value of learning by doing.",
      },
      {
        title: "Gallery",
        copy: "Actual engine-bay, disassembly, fitment, and completed-work photographs will replace the temporary image.",
      },
    ],
  },
  {
    slug: "versekey",
    index: "06",
    context: "Personal",
    categories: ["Software", "Product"],
    discipline: "iOS product · Software development",
    title: "VerseKey",
    shortTitle: "VerseKey",
    summary:
      "A personal iOS product project that extends my technical curiosity beyond mechanical systems.",
    role: "Product concept, user experience, software development",
    tools: [
      "Product thinking",
      "User experience",
      "iOS development",
      "Iteration",
    ],
    year: "Year to add",
    accent: "blue",
    brief:
      "A personal software project shaped around a product idea, the experience around it, and the work required to turn that concept into an iOS application.",
    approach: [],
    deliverables: [],
    outcomes: [],
    status: "Project details in progress",
    image: stockImages.verseKey.src,
    imageAlt: stockImages.verseKey.alt,
    galleryImages: [
      { src: stockImages.verseKey.src, alt: stockImages.verseKey.alt },
    ],
    caseStudySections: [
      {
        title: "Overview",
        copy: "VerseKey is a personal iOS and software product project.",
      },
      {
        title: "Problem",
        copy: "Product problem statement to be added from the project documentation.",
      },
      {
        title: "Concept",
        copy: "Concept details will describe the idea and the reasoning behind the product direction.",
      },
      {
        title: "User Experience",
        copy: "User flows, interface decisions, and interaction details will be added with the real screens.",
      },
      {
        title: "Technology",
        copy: "The confirmed technology stack will be documented here without overstating unverified features.",
      },
      {
        title: "Development",
        copy: "This section is reserved for the implementation process and meaningful development decisions.",
      },
      {
        title: "Challenges",
        copy: "Technical and product challenges will be documented as the case study is completed.",
      },
      {
        title: "Result",
        copy: "Final product state and verified outcomes will be added when available.",
      },
      {
        title: "Screenshots",
        copy: "Real VerseKey interface screenshots will replace the temporary product-development image.",
      },
    ],
  },
  {
    slug: "j-adam-builders",
    index: "07",
    context: "Professional",
    categories: ["Software", "Web / Brand", "Professional"],
    discipline: "Client website · Digital brand",
    title: "J. Adam Builders",
    shortTitle: "J. Adam Builders",
    summary:
      "A website and digital-brand project translating the needs of a residential construction company into a clear online presence.",
    role: "Client requirements, information architecture, design, development",
    tools: [
      "Web development",
      "Information architecture",
      "Visual design",
      "Branding",
      "Deployment",
    ],
    year: "Year to add",
    accent: "slate",
    brief:
      "Professional client work for a residential construction company, centered on understanding the business and shaping a useful, credible website around its needs.",
    approach: [],
    deliverables: [],
    outcomes: [],
    status: "Case study details in progress",
    image: stockImages.jAdamBuilders.src,
    imageAlt: stockImages.jAdamBuilders.alt,
    galleryImages: [
      {
        src: stockImages.jAdamBuilders.src,
        alt: stockImages.jAdamBuilders.alt,
      },
    ],
    caseStudySections: [
      {
        title: "Overview",
        copy: "A real-world website and digital-brand project for a residential construction company.",
      },
      {
        title: "Client Need",
        copy: "The work began with understanding what the business needed the website to communicate and support.",
      },
      {
        title: "Planning",
        copy: "Requirements and content priorities guided the structure before visual development began.",
      },
      {
        title: "Information Architecture",
        copy: "The site organization was shaped to make the company and its work easy to understand.",
      },
      {
        title: "Design",
        copy: "The visual direction supports a professional residential-building brand with a clear, restrained presentation.",
      },
      {
        title: "Development",
        copy: "The website was developed around the approved structure and presentation needs.",
      },
      {
        title: "Deployment",
        copy: "Deployment formed part of delivering a usable website to a real business.",
      },
      {
        title: "Result",
        copy: "Verified project outcomes and the final live context can be added when the case study is completed.",
      },
      {
        title: "Gallery",
        copy: "Real website and brand captures will replace the temporary residential image.",
      },
    ],
  },
];

export const academicProjects = projects.filter(
  (project) => project.context === "Academic",
);
export const beyondClassroomProjects = projects.filter(
  (project) => project.context !== "Academic",
);

export const toolkit = [
  {
    label: "CAD & design",
    detail: "Parametric modeling · assemblies · drawing intent",
  },
  {
    label: "Build & fabrication",
    detail: "Hands-on prototyping · fit-up · practical troubleshooting",
  },
  {
    label: "Analysis mindset",
    detail: "Free-body thinking · test planning · evidence before claims",
  },
  {
    label: "Communication",
    detail: "Technical documentation · design reviews · crew leadership",
  },
];

export const handsOnBackground = [
  {
    label: "Tools & materials",
    detail:
      "Cabinetry, construction, farm work, and mechanical work built familiarity with how materials and tools behave in practice.",
  },
  {
    label: "Fit & sequence",
    detail:
      "Real jobs made access, order of operations, physical constraints, and the cost of rework impossible to ignore.",
  },
  {
    label: "People & problems",
    detail:
      "Home-service work and crew leadership sharpened communication, teamwork, customer awareness, and practical troubleshooting.",
  },
];

export const internationalExperience = [
  {
    location: "Costa Rica",
    copy: "Living internationally helped build adaptability and a wider cross-cultural perspective.",
    image: stockImages.costaRica,
  },
  {
    location: "Honduras",
    copy: "Experience across different environments strengthened communication and comfort with unfamiliar contexts.",
    image: stockImages.honduras,
  },
];

export const personalEditorialImages = [
  { ...stockImages.accord, theme: "Automotive / mechanical" },
  { ...stockImages.handsOn, theme: "Building / making" },
  { ...stockImages.costaRica, theme: "International perspective" },
];

export const coursework = [
  {
    code: "ENGR 1201",
    name: "Engineering for Engineers",
    note: "Foundations of the engineering design process",
  },
  {
    code: "MEGR —",
    name: "Mechanical engineering sequence",
    note: "Course archive — update with official course names and terms",
  },
  {
    code: "MATH / PHYS",
    name: "Math & physics foundation",
    note: "Course archive — update with official course names and terms",
  },
  {
    code: "CPCC AE",
    name: "Associate in Engineering",
    note: "Central Piedmont Community College",
  },
];

export const journey = [
  {
    date: "Now",
    title: "Mechanical Engineering at UNC Charlotte",
    copy: "Building a stronger foundation in mechanics, design, and the discipline required to turn analysis into a reliable part.",
  },
  {
    date: "Before engineering school",
    title: "Hands-on work, real constraints",
    copy: "Cabinetry, construction, landscaping, home-service work, farm work, and mechanical work taught me to notice fit, sequence, access, and the cost of rework.",
  },
  {
    date: "Along the way",
    title: "Work that depends on people",
    copy: "Crew leadership made communication practical: set a clear plan, pay attention to the next person’s interface, and leave the work better than you found it.",
  },
  {
    date: "Perspective",
    title: "Costa Rica & Honduras",
    copy: "Living internationally broadened how I listen, adapt, and work with people. Spanish proficiency remains part of how I connect across a jobsite or team.",
  },
];
