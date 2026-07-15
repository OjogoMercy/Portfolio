export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  logo: string;
  highlights: string[];
  tags: string[];
}

export interface ProjectItem {
  id: string;
  company: string;
  logo: string;
  highlights: string[];
  tags: string[];
  link?: string;
}

export const experience: ExperienceItem[] = [
  {
    id: "1",
    company: "Ransact",
    role: "Frontend Mobile Developer",
    logo: "/src/assets/ransact.png",
    highlights: [
      "Built a cross-platform fintech application for bank transfers and cryptocurrency transactions using React Native, Expo Router, and TypeScript",
      "Implemented a multi-step KYC (Know Your Customer) flow including identity verification, document capture, face scan, and address verification with camera and image picker integration",
      "Engineered a QR code scanner with and wallet address validation for seamless crypto transactions",
      "Migrated global state management from Zustand to Redux Toolkit, improving scalability and maintainability across the application",
      "Developed reusable hooks and UI components including a custom loading state system wired to real component lifecycle events",
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
    id: "2",
    company: "Cephas ICT Hub",
    role: "Mobile Application Developer",
    logo: "/src/assets/Cephas.jpg",
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
  {
    id: "3",
    company: "CowryWise",
    role: "Campus Ambassador",
    logo: "/src/assets/cowry.webp",
    highlights: [
      "Served as a tech advocate, promoting digital financial tools and onboarding users through peer-led sessions",
      "Organized community events focused on financial literacy, increasing platform adoption within the campus community",
      "Strengthened public speaking and cross-functional communication skills",
    ],
    tags: ["Community Advocacy", "Financial Literacy", " Onboarding"],
  },
];

export const Projects: ProjectItem[] = [
  {
    id: "1",
    company: "HealthCard (In Progress)",
    logo: "/src/assets/ransact.png",
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
      " Node.js ",
      "Express",
      " Prisma",
      " PostgreSQL",
      " Jest",
    ],
  },
  {
    id: "2",
    company: "ScanMe",
    logo: "/src/assets/ransact.png",
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
      " Expo-camera ",
      "Zustand",
    ],
  },
  {
    id: "3",
    company: "Paylinc(Winner, Green Advocates Competition LAUTECH)",
    logo: "/src/assets/ransact.png",
    highlights: [
      "Solving the friction and leakage of cash-based fare collection on university transport by building a QR-based digital wallet system that lets students pay instantly without carrying cash.",
      "The system handles wallet balances, QR scan-to-pay, and a flat per-transaction fee model built entirely from scratch in React Native, resulting in faster boarding, transparent transaction records, and a scalable payments model — earning recognition through the Green Advocates competition and entry into the OPay & Google National Innovation Challenge 2026.",
    ],
    tags: [
      "React Native",
      "Expo Router",
      "TypeScript",
      "Redux Toolkit",
      " Expo-camera ",
      "Zustand",
    ],
  },
  {
    id: "4",
    company: "AKAMS Solar",
    logo: "/src/assets/akams.PNG",
    link: "https://akams-solar.vercel.app/",
    highlights: [
      "Addressed a solar energy client's need for a fast, professional web presence by building and deploying a marketing website from the ground up.",
      "The site was built optimized for performance, resulting in strong Lighthouse scores across the board and a smooth, production-ready deployment.",
    ],
    tags: [
      "HTML",
      "Tailwind",
      "Vercel",
      "Performance Optimization",
      "javaScript",
    ],
  },
];
