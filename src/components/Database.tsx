export const RESUME_URL =
  "https://drive.google.com/file/d/1tbdBeJZ47FlYmO4527FEbG4n0hFQ9U3x/view?usp=drive_link";

export const projectLinkLabel = (link: string) =>
  link.includes("github.com") ? "View on GitHub" : "Visit live site";

export interface SkillGroup {
  label: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    label: "Mobile",
    items: [
      "React Native",
      "Expo",
      "Expo Router",
      "TypeScript",
      "Redux Toolkit",
      "Zustand",
      "AsyncStorage",
      "expo-camera",
    ],
  },
  {
    label: "Backend",
    items: [
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL",
      "MongoDB",
      "REST APIs",
      "JWT authentication",
    ],
  },
  {
    label: "Web",
    items: ["Next.js", "JavaScript", "HTML", "Tailwind"],
  },
  {
    label: "Testing and delivery",
    items: [
      "Jest",
      "TestFlight",
      "Render",
      "Vercel",
      "Performance optimization",
    ],
  },
];

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  logo: string;
  highlights: string[];
  tags: string[];
}

export interface ProjectScreen {
  src: string;
  alt: string;
  caption: string;
  note: string;
}

export interface ProjectStory {
  label: string;
  text: string;
}

export interface ProjectItem {
  id: string;
  company: string;
  story?: ProjectStory;
  award?: string;
  badge?: string;
  logo: string;
  fit?: "cover" | "contain";
  highlights: string[];
  tags: string[];
  link?: string;
  screens?: ProjectScreen[];
}

export const experience: ExperienceItem[] = [
  {
    id: "1",
    company: "Ransact",
    role: "Frontend Mobile Developer",
    period: "Jan 2026 – Present",
    location: "Remote",
    logo: "/ransact.png",
    highlights: [
      "Developed a cross-platform fintech application using React Native, Expo Router, and TypeScript.",
      "Built a multi-step KYC onboarding flow with identity, document, facial, and address verification.",
      "Integrated native camera and image picker functionality for secure identity verification.",
      "Migrated application state management from Zustand to Redux Toolkit.",
      "Integrated REST APIs for authentication, KYC, and wallet management",
    ],
    tags: [
      "React Native",
      "Expo Router",
      "TypeScript",
      "Redux Toolkit",
      "expo-camera",
    ],
  },
  {
    id: "3",
    company: "CowryWise",
    role: "Campus Ambassador",
    period: "Apr 2025 – Present",
    location: "Ogbomosho, Nigeria",
    logo: "/cowry.webp",
    highlights: [
      "Served as a tech advocate, promoting digital financial tools and onboarding users through peer-led sessions",
      "Organized community events focused on financial literacy, increasing platform adoption within the campus community",
      "Strengthened speaking and cross-functional communication skills",
    ],
    tags: ["Community Advocacy", "Financial Literacy", "Onboarding"],
  },
  {
    id: "2",
    company: "Cephas ICT Hub",
    role: "Mobile Application Developer",
    period: "Apr 2025 – Dec 2025",
    location: "Ogbomosho, Nigeria",
    logo: "/Cephas.jpg",
    highlights: [
      "Developed mobile applications using React Native, Expo, AsyncStorage, Redux Toolkit, and Zustand",
      "Drove a 16% improvement in usability metrics through independent design refinements and interface optimization",
      "Contributed to agile sprints, streamlining workflows and resolving complex version control issues",
    ],
    tags: [
      "React Native",
      "Testflight",
      "Deployment",
      "Redux Toolkit",
      "Zustand",
    ],
  },
];

export const Projects: ProjectItem[] = [
  {
    id: "0",
    company: "TrustVax",
    award: "Pima Health Hackathon",
    badge: "1st place",
    logo: "/trustvax.PNG",
    link: "https://trustvax-phi.vercel.app/",
    highlights: [
      "I came up with the idea, built the parent-facing side, and pitched for my team. We had 2 hours to build, and our first presentation failed because the judges couldn’t hear us. We got a second chance with 4 minutes to pitch and walk through the demo and won first place.",
    ],
    tags: [
      "Tailwind",
      "Vercel",
      "Performance Optimization",
      "JavaScript",
      "MongoDB",
      "Next.js",
    ],
  },
  {
    id: "1",
    company: "Ojiva",
    story: {
      label: "The question",
      text: "Almost every Nigerian shares the same experience of immunisation as a child, and most families go along with it even when there could be a better alternative. Ojiva came from asking what that alternative could look like.",
    },
    logo: "/OjivaHomescreen.jpg",
    fit: "cover",
    link: "https://github.com/OjogoMercy/HealthCard",
    highlights: [
      "Addressed the difficulty families face tracking immunization schedules and growth milestones by building a full-stack maternal and child health platform with authentication, profile management, and progress tracking built in.",
      "The system pairs a React Native mobile experience with a modular Express and Prisma backend, using JWT-based session handling with centralized token-expiry recovery for secure, uninterrupted access. Core flows are covered by automated tests and deployed live on Render, resulting in a reliable platform families can depend on for ongoing health tracking",
    ],
    tags: [
      "React Native",
      "Expo Router",
      "TypeScript",
      "Redux Toolkit",
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL",
      "Jest",
    ],
    screens: [
      {
        src: "/OjivaHomescreen.jpg",
        alt: "Ojiva home screen with the next immunisation, vaccination progress and each vaccine's status",
        caption: "Home",
        note: "Next immunisation and progress at a glance",
      },
      {
        src: "/OjivaModal.jpg",
        alt: "Ojiva profile screen with a logout confirmation modal over it",
        caption: "Confirmation modal",
        note: "Confirms before logging out",
      },
    ],
  },
  {
    id: "2",
    company: "ScanMe",
    story: {
      label: "Why I built it",
      text: "I keep a lot of notes and wanted an easy way to keep track of the things I find useful every day. ScanMe is how I made that easier for myself.",
    },
    logo: "/scanMeHomescreen.jpg",
    fit: "cover",
    link: "https://github.com/OjogoMercy/ScanMeV2",
    highlights: [
      "Addressed the need for a reliable, offline-friendly QR scanning tool by building a utility app that goes beyond basic scanning into smart organization and accessibility.",
      "The app supports smart data tagging, haptic feedback, and flashlight support, with local history managed through Zustand for fast, dependable state handling — resulting in a smooth, distraction-free scanning experience with filtering and deletion controls for easy history management.",
    ],
    tags: [
      "React Native",
      "Expo Router",
      "TypeScript",
      "Redux Toolkit",
      "Expo-camera",
      "Zustand",
    ],
    screens: [
      {
        src: "/scanMeHomescreen.jpg",
        alt: "ScanMe home screen with scan QR and scan text actions above a list of recent scans",
        caption: "Home",
        note: "Scan QR or text, with recent scans below",
      },
      {
        src: "/scanMeModal.jpg",
        alt: "ScanMe scan history with open, copy, star and delete actions on each scan",
        caption: "Scan history",
        note: "Open, copy, star or delete each scan",
      },
    ],
  },
  {
    id: "3",
    company: "Paylinc",
    award: "Green Advocates Competition, LAUTECH",
    badge: "Winner",
    story: {
      label: "Status",
      text: "A startup I'm actively building with classmates from university.",
    },
    logo: "/paylinc.PNG",
    highlights: [
      "Solving the friction and leakage of cash-based fare collection on university transport by building a QR-based digital wallet system that lets students pay instantly without carrying cash.",
      "The system handles wallet balances, QR scan-to-pay, and a flat per-transaction fee model built entirely from scratch in React Native, resulting in faster boarding, transparent transaction records, and a scalable payments model — earning recognition through the Green Advocates competition and entry into the OPay & Google National Innovation Challenge 2026.",
    ],
    tags: [
      "React Native",
      "Expo Router",
      "TypeScript",
      "Redux Toolkit",
      "Expo-camera",
      "Zustand",
    ],
  },
  {
    id: "4",
    company: "AKAMS Solar",
    logo: "/akams.PNG",
    fit: "cover",
    link: "https://www.akams-solar.com/",
    highlights: [
      "Addressed a solar energy client's need for a fast, professional web presence by building and deploying a marketing website from the ground up.",
      "The site was built optimized for performance, resulting in strong Lighthouse scores across the board and a smooth, production-ready deployment.",
    ],
    tags: [
      "HTML",
      "Tailwind",
      "Vercel",
      "Performance Optimization",
      "JavaScript",
    ],
  },
];
