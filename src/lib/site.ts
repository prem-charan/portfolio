// Central place for site-wide facts. Edit here, not in components.
// Before deploying: set NEXT_PUBLIC_SITE_URL to your real domain once you have one.
const email = "premxcharan@gmail.com";

export const site = {
  fullName: "Prem Charan Pampana",
  name: "Prem Charan",
  role: "Software Engineer",
  tagline: "Currently diving deeper into backend and distributed systems.",
  location: "Chennai, Tamil Nadu, India",
  email,
  // mailto: links depend on the visitor having a desktop mail client
  // registered with their OS/browser — most people don't, so clicking one
  // silently fails or opens a blank tab. Linking straight to Gmail's web
  // compose view instead just works, same as the other social links.
  emailHref: `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`,
  github: "https://github.com/prem-charan",
  githubUsername: "prem-charan",
  linkedin: "https://www.linkedin.com/in/prem-charan/",
  x: "https://x.com/premxcharan",
  xHandle: "premxcharan",
  resumeHref: "/PremCharan_resume.pdf",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://premcharan.vercel.app",
  keywords: [
    "Prem Charan",
    "Pampana Prem Charan",
    "premcharan",
    "Prem Charan portfolio",
    "Prem Charan developer",
    "Backend Engineer",
    "Full Stack Developer",
    "IIITDM Jabalpur",
  ],
} as const;
