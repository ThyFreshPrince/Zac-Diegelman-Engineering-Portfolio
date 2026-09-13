export type ProjectCategory = 'Mechatronics' | 'Design' | 'Manufacturing' | 'Prototyping';

export type Project = {
  slug: string;
  index: string;
  category: ProjectCategory;
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
};

export const site = {
  name: 'Zechariah “Zac” Diegelman',
  firstName: 'Zac Diegelman',
  title: 'Mechanical Engineering Student',
  location: 'Charlotte, North Carolina',
  school: 'UNC Charlotte',
  degree: 'B.S. Mechanical Engineering',
  graduation: 'Expected December 2027',
  email: 'zdiegelm@charlotte.edu',
  linkedin: 'https://www.linkedin.com/in/zechariahdiegelman/',
  intro: 'I design, build, analyze, test, troubleshoot, and improve physical systems.',
  availability: 'Open to internships, co-ops, and engineering opportunities',
};

export const projects: Project[] = [
  {
    slug: 'robotic-manipulator',
    index: '01',
    category: 'Mechatronics',
    discipline: 'Mechanical systems · Rotary motion',
    title: 'Robotic Manipulator / Rotary Axis Design',
    shortTitle: 'Robotic manipulator',
    summary: 'A focused study in translating rotary motion into a controllable, serviceable mechanical assembly.',
    role: 'Mechanical design, analysis, documentation',
    tools: ['CAD', 'Mechanism design', 'Tolerance thinking', 'Technical documentation'],
    year: '2025',
    accent: 'cyan',
    brief: 'Design a rotary axis for a robotic manipulator with attention to the interface between structure, motion, and control.',
    approach: ['Defined the axis envelope and interfaces before selecting components.', 'Developed a parametric assembly to make design intent visible and revisions inexpensive.', 'Documented open questions and verification steps rather than assuming performance.'],
    deliverables: ['Parametric CAD assembly', 'Interface and concept sketches', 'Design review documentation'],
    outcomes: ['Editable outcome placeholder — add measured repeatability or load results when available.', 'Editable outcome placeholder — add final design decision and rationale when available.'],
    status: 'Case study in progress',
  },
  {
    slug: 'mechatronics-vibration',
    index: '02',
    category: 'Mechatronics',
    discipline: 'Experimental methods · Dynamics',
    title: 'Mechatronics / Vibrating Beam Experimental System',
    shortTitle: 'Vibrating beam system',
    summary: 'An experimental system for making vibration behavior observable through a repeatable physical setup.',
    role: 'System design, test setup, troubleshooting',
    tools: ['Experimental design', 'Sensors', 'Data collection', 'Troubleshooting'],
    year: '2025',
    accent: 'amber',
    brief: 'Build a practical test system that connects a physical beam, instrumentation, and repeatable data collection.',
    approach: ['Separated the test fixture, excitation, measurement, and observation questions.', 'Focused on repeatability and access so the setup could be adjusted without starting over.', 'Used test planning to identify what must be measured before interpreting behavior.'],
    deliverables: ['Physical test fixture', 'Instrumentation plan', 'Test procedure and observations'],
    outcomes: ['Editable outcome placeholder — add frequency response or measured behavior when available.', 'Editable outcome placeholder — add troubleshooting findings when available.'],
    status: 'Case study in progress',
  },
  {
    slug: 'additive-manufacturing',
    index: '03',
    category: 'Manufacturing',
    discipline: 'Additive manufacturing · CAD',
    title: 'Additive Manufacturing / Advanced 3D Design',
    shortTitle: 'Advanced 3D design',
    summary: 'A CAD-to-part workflow exploring how geometry, process constraints, and iteration affect a physical result.',
    role: '3D design, manufacturability, iteration',
    tools: ['Parametric CAD', 'Additive manufacturing', 'Design for process', 'Iteration'],
    year: '2024',
    accent: 'violet',
    brief: 'Explore an additive manufacturing workflow where the digital model has to anticipate the physical process.',
    approach: ['Built geometry with edits and manufacturing logic in mind.', 'Considered support, orientation, access, and inspection as design inputs.', 'Used physical iteration to turn a model into a more informed design.'],
    deliverables: ['Advanced 3D model', 'Manufacturing-ready export', 'Iteration notes'],
    outcomes: ['Editable outcome placeholder — add print orientation or material details when available.', 'Editable outcome placeholder — add lessons from physical iteration when available.'],
    status: 'Case study in progress',
  },
  {
    slug: 'engineering-design-prototyping',
    index: '04',
    category: 'Prototyping',
    discipline: 'Design process · Physical build',
    title: 'Engineering Design & Prototyping',
    shortTitle: 'Design & prototyping',
    summary: 'A hands-on design process grounded in making, learning from imperfect prototypes, and improving the next version.',
    role: 'Concept development, fabrication, test learning',
    tools: ['Rapid prototyping', 'Fabrication', 'Design reviews', 'Problem solving'],
    year: '2024',
    accent: 'green',
    brief: 'Move from a design question to a physical prototype, using each build to reduce uncertainty.',
    approach: ['Started with the user, interface, and failure questions rather than a polished rendering.', 'Built quickly enough to expose fit, access, and usability issues.', 'Captured what changed between versions and why.'],
    deliverables: ['Concept sketches', 'Physical prototype', 'Build and revision notes'],
    outcomes: ['Editable outcome placeholder — add prototype count or final evaluation when available.', 'Editable outcome placeholder — add next-step recommendation when available.'],
    status: 'Case study in progress',
  },
];

export const toolkit = [
  { label: 'CAD & design', detail: 'Parametric modeling · assemblies · drawing intent' },
  { label: 'Build & fabrication', detail: 'Hands-on prototyping · fit-up · practical troubleshooting' },
  { label: 'Analysis mindset', detail: 'Free-body thinking · test planning · evidence before claims' },
  { label: 'Communication', detail: 'Technical documentation · design reviews · crew leadership' },
];

export const coursework = [
  { code: 'ENGR 1201', name: 'Engineering for Engineers', note: 'Foundations of the engineering design process' },
  { code: 'MEGR —', name: 'Mechanical engineering sequence', note: 'Course archive — update with official course names and terms' },
  { code: 'MATH / PHYS', name: 'Math & physics foundation', note: 'Course archive — update with official course names and terms' },
  { code: 'CPCC AE', name: 'Associate in Engineering', note: 'Central Piedmont Community College' },
];

export const journey = [
  { date: 'Now', title: 'Mechanical Engineering at UNC Charlotte', copy: 'Building a stronger foundation in mechanics, design, and the discipline required to turn analysis into a reliable part.' },
  { date: 'Before engineering school', title: 'Hands-on work, real constraints', copy: 'Cabinetry, construction, landscaping, home-service work, farm work, and mechanical work taught me to notice fit, sequence, access, and the cost of rework.' },
  { date: 'Along the way', title: 'Work that depends on people', copy: 'Crew leadership made communication practical: set a clear plan, pay attention to the next person’s interface, and leave the work better than you found it.' },
  { date: 'Perspective', title: 'Costa Rica & Honduras', copy: 'Travel broadened how I listen, adapt, and work with people. Spanish proficiency remains part of how I connect across a jobsite or team.' },
];
