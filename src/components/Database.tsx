export interface ExperienceItem {
  id: string;
  company: string;
  role?: string;
  logo: string;
  highlights: string[];
  tags: string[];
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

export const Projects: ExperienceItem[] = [
  {
    id: "1",
    company: "HealthCard (In Progress)",
    logo: "/src/assets/ransact.png",
    highlights: [
      "Building and deploying a maternal and child health platform with authentication, profile management, immunization tracking, and growth monitoring",
      "Designed a modular backend (routes/controller/service architecture) using Express, TypeScript, and Prisma",
      "Implemented JWT-based session handling with centralized token-expiry recovery",
      "Deployed the API live on Render, with core flows covered by automated tests using Jest and Supertest",
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
    highlights: [
      "Built a QR code scanner with smart tagging, haptic feedback, and flashlight support",
"Implemented local history storage and state management using Zustand",
"Added filtering by type/date and deletion controls"
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
];
