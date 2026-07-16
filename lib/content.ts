// Single source of truth for portfolio content, mirrored from the CV.

export const profile = {
  name: "Gabriel Nuñez Arenas",
  shortName: "Gabriel Nuñez",
  role: "Software Developer",
  location: "Arequipa, Perú",
  email: "gabriel.nunez.arenas@gmail.com",
  summary:
    "I build and ship web systems end to end — from clean, high-performance interfaces to cloud deployments with Docker and CI/CD.",
  bio: [
    "Software Developer passionate about building and deploying web systems, with hands-on experience in web development and cloud deployments. I work primarily within the JavaScript and Python ecosystems, developing web applications and managing their delivery through Docker, CI/CD pipelines, and cloud platforms (VPS and PaaS environments).",
    "I am a self-taught professional with a strong sense of responsibility, capable of taking ownership of the entire lifecycle from development to production. Currently, I am strengthening my skills in Cloud Infrastructure and DevOps practices while continuing to deliver reliable web solutions.",
    "I am also an active member and organizer of the Google Developer Group (GDG) Arequipa, where I help organize events and foster the growth of the local tech community.",
  ],
  currently: "AI & Full Stack Developer @ AM Digital",
  community: "Organizer @ GDG Arequipa",
};

export const socials = {
  github: "https://github.com/NunezGabriel",
  linkedin: "https://www.linkedin.com/in/gabriel-nu%C3%B1ez-arenas/",
  x: "https://x.com/gabrielnunez_23",
  instagram: "https://www.instagram.com/gabri3l_nun3z/",
  email: "mailto:gabriel.nunez.arenas@gmail.com",
};

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  stack: string[];
}

export const experience: Experience[] = [
  {
    company: "AM Digital",
    role: "AI & Full Stack Developer",
    period: "May 2026 — Jul 2026",
    location: "Arequipa, Perú",
    summary:
      "Software development and digital marketing agency building custom applications for diverse clients.",
    highlights: [
      "Architected and deployed production-ready WhatsApp bots integrated with clients’ ERPs, automating 100% of the appointment scheduling lifecycle.",
      "Leveraged agentic development workflows (Claude Code) to accelerate delivery of complex features while maintaining code quality.",
      "Built scalable backend services with NestJS and high-performance web interfaces with Next.js.",
      "Containerized applications with Docker and managed deployments on cloud VPS environments.",
    ],
    stack: ["NestJS", "Next.js", "Docker", "VPS", "Claude Code"],
  },
  {
    company: "Ecytel S.A.C.",
    role: "Full Stack Developer · Contract",
    period: "Feb 2026 — Mar 2026",
    location: "Arequipa, Perú",
    summary:
      "OHS management platform: training, assessments, compliance tracking and safety documentation for telecom crews.",
    highlights: [
      "Built and deployed the complete backend — Node.js, Express and Prisma over PostgreSQL — with a layered architecture and 40+ REST endpoints.",
      "Implemented JWT authentication with differentiated roles, authorization middleware and bcrypt password management.",
      "Integrated Google Drive API for document storage and Resend for email notifications, optimizing infrastructure costs.",
      "Developed an examination system with automatic validation, temporary lockouts and random question generation.",
    ],
    stack: ["Node.js", "Express", "Prisma", "PostgreSQL", "Next.js"],
  },
  {
    company: "Monasterio ERP",
    role: "Frontend Developer & Organizer",
    period: "Aug 2024 — Jan 2025",
    location: "Arequipa, Perú",
    summary:
      "Web application built with Tecsup for the Santa María Monastery, digitizing internal processes and institutional presence.",
    highlights: [
      "Contributed to the design and development of web components, creating UI views in Figma.",
      "Developed scalable, reusable frontend components in TypeScript, ensuring type safety and visual consistency.",
      "Helped coordinate the UI and frontend teams during the early stages of development.",
    ],
    stack: ["TypeScript", "React", "Figma"],
  },
  {
    company: "PoketVet",
    role: "Junior Frontend Developer",
    period: "Oct 2023 — Jan 2024",
    location: "Lima, Perú",
    summary:
      "Web application for a veterinary clinic with patient management and an equipment-purchasing logistics module.",
    highlights: [
      "Programmed reusable, modular components with Vue.js to improve development efficiency and scalability.",
      "Focused on performance optimization and accessibility, improving the end-user experience.",
      "Created and integrated backend endpoints against API services built in Express.",
    ],
    stack: ["Vue.js", "Express", "REST API"],
  },
  {
    company: "Dellior",
    role: "Freelance Web Developer",
    period: "Jul 2023 — Sep 2023",
    location: "Arequipa, Perú",
    summary:
      "E-commerce web application for a bakery, featuring a complete product catalog with prices and details.",
    highlights: [
      "Built an intuitive, accessible web application with React and Tailwind using responsive design.",
      "Established the company’s online presence, increasing visibility and attracting new clients.",
      "Boosted sales by highlighting special online-only offers for digital customers.",
    ],
    stack: ["React", "Tailwind CSS"],
  },
];

export interface Project {
  name: string;
  kind: "Personal" | "Client" | "Community";
  context: string;
  description: string;
  stack: string[];
  video?: string;
  href?: string;
}

export const projects: Project[] = [
  {
    name: "MetalOps",
    kind: "Personal",
    context: "Work-order management",
    description:
      "Web application for managing and executing work orders in a metalworking company — traceability, operational efficiency and workflow organization.",
    stack: ["Next.js", "TypeScript", "Django", "Spring Boot", "PostgreSQL", "Tailwind CSS"],
    video: "/MetalOps/VideoMetalOps.mp4",
  },
  {
    name: "Keynest",
    kind: "Personal",
    context: "Real estate platform",
    description:
      "Application for searching and listing real estate sales, with a clean browsing experience over a REST API.",
    stack: ["Next.js", "Laravel", "REST API", "Tailwind CSS"],
  },
  {
    name: "BingoBTP",
    kind: "Community",
    context: "GDG · Breaking The Pattern",
    description:
      "Networking web application for the GDG “Breaking The Pattern” event, deployed on Vercel and Render.",
    stack: ["Next.js", "Express", "Prisma", "PostgreSQL", "Tailwind CSS"],
  },
  {
    name: "WhatsApp AI Bots",
    kind: "Client",
    context: "AM Digital · 2026",
    description:
      "Production WhatsApp bots integrated with clients’ ERPs, automating the full appointment scheduling lifecycle and customer service workflows.",
    stack: ["NestJS", "Next.js", "Docker", "VPS"],
  },
  {
    name: "OHS Management System",
    kind: "Client",
    context: "Ecytel S.A.C. · 2026",
    description:
      "Occupational Health & Safety platform — training, assessments with automatic validation, compliance tracking and safety documentation.",
    stack: ["Node.js", "Express", "Prisma", "PostgreSQL", "Next.js"],
  },
  {
    name: "Monasterio ERP",
    kind: "Client",
    context: "Tecsup × Santa María Monastery · 2024",
    description:
      "Institutional ERP digitizing internal operations and organizational presence, built collaboratively with Tecsup.",
    stack: ["TypeScript", "React", "Figma"],
  },
  {
    name: "PoketVet",
    kind: "Client",
    context: "Veterinary clinic · 2023",
    description:
      "Patient management platform with a logistics module for equipment purchasing.",
    stack: ["Vue.js", "Express"],
  },
  {
    name: "Dellior",
    kind: "Client",
    context: "Bakery e-commerce · 2023",
    description:
      "E-commerce with a complete product catalog, prices and details — built to establish the bakery’s online presence.",
    stack: ["React", "Tailwind CSS"],
  },
];

export interface Education {
  institution: string;
  program: string;
  period: string;
  location: string;
}

export const education: Education[] = [
  {
    institution: "Tecsup",
    program: "Software Design and Development",
    period: "2023 — 2026",
    location: "Arequipa, Perú",
  },
  {
    institution: "Codeable",
    program: "Intensive full-stack web development program · full-time, 8 months",
    period: "2023",
    location: "Lima, Perú",
  },
  {
    institution: "Universidad Católica San Pablo",
    program: "Computer Science · first two years",
    period: "2021 — 2023",
    location: "Arequipa, Perú",
  },
];

export const certifications = [
  { name: "React — The Complete Guide (Hooks, MERN)", issuer: "Udemy" },
  { name: "Node.js, Express, MongoDB & More: The Complete Bootcamp", issuer: "Udemy" },
  { name: "HTML y CSS — Curso completo de desarrollo web", issuer: "Platzi" },
];

export const languages = [
  { name: "Spanish", level: "Native" },
  { name: "English", level: "Intermediate — Advanced" },
  { name: "French", level: "Beginner · currently learning" },
];
