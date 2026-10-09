export const education = {
  school: "IIITDM Jabalpur",
  degree: "B.Tech in Computer Science Engineering",
  location: "Madhya Pradesh, India",
  start: "Dec 2021",
  end: "Aug 2025",
  coursework: [
    "Operating Systems",
    "Data Structures",
    "DBMS",
    "Artificial Intelligence",
    "Machine Learning",
    "Networking",
  ],
};

export const experience = [
  {
    // TODO(prem): confirm exact start date.
    company: "Cognizant Technology Solutions",
    role: "Software Engineer",
    start: "2025",
    end: "Present",
    points: [
      "Built a GenAI report generation pipeline that automatically produces site section reports, using Spring Boot, Angular, and Azure OpenAI REST APIs.",
    ],
  },
  {
    company: "Fusion — Institute ERP",
    role: "Backend Engineer",
    start: "Dec 2023",
    end: "Aug 2024",
    points: [
      "Architected 15+ RESTful APIs for primary healthcare features — appointments, inventory, announcements, medical relief workflows — cutting processing time by 40%.",
      "Built role-based access control across 4 user types: students, staff, dependents, and compounders.",
      "Designed scheduling and inventory modules covering 100+ beds, a blood bank, and 500+ medicines.",
      "Wired up report generation and dashboard logic with error handling and logging for day-to-day reliability.",
    ],
  },
];

export type Project = {
  name: string;
  period?: string;
  description: string;
  points: string[];
  stack: string[];
  github?: string;
  live?: string;
};

export const projects: Project[] = [
  {
    name: "Beam — Real-Time Video Calling App",
    description:
      "A peer-to-peer video calling app with a multi-participant WebRTC mesh and a custom signaling server.",
    points: [
      "Multi-participant WebRTC mesh architecture with a custom WebSocket signaling server for low-latency real-time audio/video across browsers.",
      "STUN/TURN relay fallback for NAT traversal on restrictive networks, plus a reconnect protocol with session grace periods to survive dropped connections.",
      "Host-approval join flow with shareable room links; signaling server deployed on a Google Cloud VM behind a Caddy reverse proxy with automated TLS.",
    ],
    stack: ["React", "TypeScript", "Node.js", "WebRTC", "WebSocket", "GCP"],
    github: "https://github.com/prem-charan/beam",
    live: "https://beamwebrtc.vercel.app",
  },
  {
    name: "Brainly — Your Second Brain",
    description:
      "A second-brain app for organizing tweets, YouTube videos, and Google Docs in one place.",
    points: [
      "React SPA with 10+ TypeScript components and an Express backend for saving and organizing embedded content.",
      "JWT-authenticated CRUD with a responsive masonry layout and real-time filtering.",
      "Shipped to production on Vercel/Render with MongoDB Atlas across 8 REST endpoints.",
    ],
    stack: ["React", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/prem-charan/brainly",
    live: "https://brainly-yoursecondbrain.vercel.app/",
  },
  {
    name: "Parallel MergeSort",
    period: "Dec 2024",
    description:
      "A pthreads-based parallel merge sort, built to see how far thread-level parallelism could push a classic algorithm.",
    points: [
      "14x speedup over the sequential version on datasets from 10^6 to 10^8 elements.",
      "Mutex-based synchronization across threads, verified thread-safe over 50+ test cases.",
      "Tuned thread management and memory allocation to cut scheduling overhead.",
    ],
    stack: ["C++", "pthreads", "Multithreading"],
    github: "https://github.com/prem-charan/parallel-mergeSort",
  },
  {
    name: "Synchronous Chat Application",
    description:
      "Real-time messaging app with direct and group channels, built on Socket.io.",
    points: [
      "Bidirectional messaging with instant delivery and typing indicators, for both DMs and group channels.",
      "JWT auth over HTTP-only cookies with 256-bit encryption for session security.",
      "File sharing via Cloudinary — 10+ file types up to 25MB with real-time upload progress.",
      "50+ reusable Tailwind components, responsive from desktop down to mobile.",
    ],
    stack: ["React", "Node.js", "Express", "Socket.io", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/prem-charan/synchronous-chat-app",
    live: "https://synchronous-chat-app-three.vercel.app",
  },
];

export const skills = [
  {
    label: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "SQL", "HTML", "CSS"],
  },
  {
    label: "Frontend",
    items: ["React", "Next.js", "shadcn/ui", "Tailwind CSS"],
  },
  {
    label: "Backend & Database",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Node.js", "Bun", "Prisma"],
  },
  {
    label: "Workflow & Tools",
    items: ["Git", "Docker"],
  },
];
