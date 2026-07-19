// Single source of truth for portfolio content, mirrored from the CV.
// Every user-facing string lives here in both languages.

export type Lang = "en" | "es";

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

export interface Project {
  name: string;
  group: "personal" | "client";
  context: string;
  description: string;
  stack: string[];
  video?: string;
  href?: string;
}

export interface Education {
  institution: string;
  program: string;
  period: string;
  location: string;
}

export interface Dictionary {
  profile: {
    name: string;
    shortName: string;
    role: string;
    location: string;
    email: string;
    summary: string;
    bio: string[];
    currently: string;
    community: string;
  };
  nav: {
    home: string;
    work: string;
    about: string;
    elsewhere: string;
    subs: Record<string, { id: string; label: string }[]>;
  };
  hero: {
    viewWork: string;
    getInTouch: string;
    currentlyLabel: string;
  };
  strip: { kicker: string };
  services: {
    kicker: string;
    title: string;
    items: { index: string; title: string; description: string }[];
  };
  featured: { kicker: string; title: string; viewAll: string };
  experienceSection: { kicker: string; title: string; fullPath: string };
  contact: { kicker: string; title: string; blurb: string };
  footer: { message: string; version: string; updated: string };
  workPage: {
    kicker: string;
    title: string;
    intro: string;
    personalKicker: string;
    clientKicker: string;
  };
  aboutPage: {
    kicker: string;
    title: string;
    factLabels: {
      location: string;
      currently: string;
      community: string;
      languages: string;
    };
    careerKicker: string;
    careerTitle: string;
    eduKicker: string;
    eduTitle: string;
    certificationsTitle: string;
    languagesTitle: string;
    beyondKicker: string;
    beyondTitle: string;
    beyond: { index: string; title: string; description: string }[];
  };
  experience: Experience[];
  projects: Project[];
  education: Education[];
  certifications: { name: string; issuer: string }[];
  languages: { name: string; level: string }[];
}

const certifications = [
  { name: "React — The Complete Guide (Hooks, MERN)", issuer: "Udemy" },
  {
    name: "Node.js, Express, MongoDB & More: The Complete Bootcamp",
    issuer: "Udemy",
  },
  { name: "HTML y CSS — Curso completo de desarrollo web", issuer: "Platzi" },
];

const en: Dictionary = {
  profile: {
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
  },
  nav: {
    home: "Home",
    work: "Work",
    about: "About",
    elsewhere: "Elsewhere",
    subs: {
      "/": [
        { id: "what-i-do", label: "What I do" },
        { id: "selected-work", label: "Selected work" },
        { id: "experience", label: "Experience" },
        { id: "contact", label: "Contact" },
      ],
      "/work": [
        { id: "personal", label: "Personal" },
        { id: "client-work", label: "Client work" },
      ],
      "/about": [
        { id: "career", label: "Career" },
        { id: "education", label: "Education" },
        { id: "beyond", label: "Beyond the code" },
      ],
    },
  },
  hero: {
    viewWork: "View work",
    getInTouch: "Get in touch",
    currentlyLabel: "Currently",
  },
  strip: { kicker: "The stack I work with" },
  services: {
    kicker: "01 — What I do",
    title: "From interface to infrastructure.",
    items: [
      {
        index: "01",
        title: "Frontend Engineering",
        description:
          "Component-driven UIs with strong typing, server-side rendering and code splitting — performance (Core Web Vitals), accessibility and responsive layouts as defaults. React, Next.js, TypeScript, Tailwind.",
      },
      {
        index: "02",
        title: "Backend & APIs",
        description:
          "REST and GraphQL API design with authentication (JWT, role-based access), data validation and relational modeling over PostgreSQL. Node.js with Express/NestJS, Spring Boot with Java, Django and Laravel.",
      },
      {
        index: "03",
        title: "Software Architecture",
        description:
          "Layered architectures — repositories, services, controllers — MVC/MVT patterns and microservices, designed for scalability, separation of concerns and long-term maintainability.",
      },
      {
        index: "04",
        title: "Cloud & DevOps",
        description:
          "Docker containerization, CI/CD pipelines and Linux server administration — environment and secrets management, reproducible deployments to VPS and PaaS environments with high availability in mind.",
      },
      {
        index: "05",
        title: "AI & Agentic Development",
        description:
          "Agentic workflows with Claude Code — skills, subagents and automated pipelines — RAG, prompt engineering and LLM tool-calling integrations applied to real business processes.",
      },
      {
        index: "06",
        title: "Agile Delivery",
        description:
          "Iterative development under Scrum and Kanban — Git/GitHub team flow, code reviews and clear estimation, shipping in short, predictable cycles.",
      },
    ],
  },
  featured: {
    kicker: "02 — Selected work",
    title: "Things I’ve built recently.",
    viewAll: "View all projects",
  },
  experienceSection: {
    kicker: "03 — Experience",
    title: "Where I’ve worked.",
    fullPath: "Full career path",
  },
  contact: {
    kicker: "04 — Contact",
    title: "Let’s build something together.",
    blurb:
      "Open to new projects and collaborations — if you’d like to talk about work or just say hello, my inbox is open.",
  },
  footer: {
    message: "Let’s build something together.",
    version: "Portfolio v2.0.0",
    updated: "Last updated — July 2026",
  },
  workPage: {
    kicker: "Work — Index",
    title: "Projects & client work.",
    intro:
      "A selection of what I’ve built and contributed to — from personal products and community tools to production systems shipped for clients.",
    personalKicker: "01 — Personal & community",
    clientKicker: "02 — Client & team work",
  },
  aboutPage: {
    kicker: "01 — About",
    title: "About me.",
    factLabels: {
      location: "Location",
      currently: "Currently",
      community: "Community",
      languages: "Languages",
    },
    careerKicker: "02 — Career path",
    careerTitle: "Experience.",
    eduKicker: "03 — Education",
    eduTitle: "Where I learned.",
    certificationsTitle: "Certifications",
    languagesTitle: "Languages",
    beyondKicker: "04 — Beyond the code",
    beyondTitle: "Off the clock.",
    beyond: [
      {
        index: "01",
        title: "Pets",
        description:
          "I share my life with 7 Schnauzers — a big part of my daily routine and inspiration.",
      },
      {
        index: "02",
        title: "Music",
        description:
          "I play piano and guitar, exploring creativity beyond the screen.",
      },
      {
        index: "03",
        title: "Community",
        description:
          "As a GDG Arequipa organizer I help run events that grow the local tech scene.",
      },
    ],
  },
  experience: [
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
  ],
  projects: [
    {
      name: "MetalOps",
      group: "personal",
      context: "Work-order management",
      description:
        "Web application for managing and executing work orders in a metalworking company — traceability, operational efficiency and workflow organization.",
      stack: [
        "Next.js",
        "TypeScript",
        "Django",
        "Spring Boot",
        "PostgreSQL",
        "Tailwind CSS",
      ],
      video: "/MetalOps/VideoMetalOps.mp4",
    },
    {
      name: "Keynest",
      group: "personal",
      context: "Real estate platform",
      description:
        "Application for searching and listing real estate sales, with a clean browsing experience over a REST API.",
      stack: ["Next.js", "Laravel", "REST API", "Tailwind CSS"],
      // TODO: replace with the real Keynest demo video
      video: "/MetalOps/VideoMetalOps.mp4",
    },
    {
      name: "BingoBTP",
      group: "personal",
      context: "GDG · Breaking The Pattern",
      description:
        "Networking web application for the GDG “Breaking The Pattern” event, deployed on Vercel and Render.",
      stack: ["Next.js", "Express", "Prisma", "PostgreSQL", "Tailwind CSS"],
      // TODO: replace with the real BingoBTP demo video
      video: "/MetalOps/VideoMetalOps.mp4",
    },
    {
      name: "WhatsApp AI Bots",
      group: "client",
      context: "AM Digital · 2026",
      description:
        "Production WhatsApp bots integrated with clients’ ERPs, automating the full appointment scheduling lifecycle and customer service workflows.",
      stack: ["NestJS", "Next.js", "Docker", "VPS"],
    },
    {
      name: "OHS Management System",
      group: "client",
      context: "Ecytel S.A.C. · 2026",
      description:
        "Occupational Health & Safety platform — training, assessments with automatic validation, compliance tracking and safety documentation.",
      stack: ["Node.js", "Express", "Prisma", "PostgreSQL", "Next.js"],
    },
    {
      name: "Monasterio ERP",
      group: "client",
      context: "Tecsup × Santa María Monastery · 2024",
      description:
        "Institutional ERP digitizing internal operations and organizational presence, built collaboratively with Tecsup.",
      stack: ["TypeScript", "React", "Figma"],
    },
    {
      name: "PoketVet",
      group: "client",
      context: "Veterinary clinic · 2023",
      description:
        "Patient management platform with a logistics module for equipment purchasing.",
      stack: ["Vue.js", "Express"],
    },
    {
      name: "Dellior",
      group: "client",
      context: "Bakery e-commerce · 2023",
      description:
        "E-commerce with a complete product catalog, prices and details — built to establish the bakery’s online presence.",
      stack: ["React", "Tailwind CSS"],
    },
  ],
  education: [
    {
      institution: "Tecsup",
      program: "Software Design and Development",
      period: "2023 — 2026",
      location: "Arequipa, Perú",
    },
    {
      institution: "Codeable",
      program:
        "Intensive full-stack web development program · full-time, 8 months",
      period: "2023",
      location: "Lima, Perú",
    },
    {
      institution: "Universidad Católica San Pablo",
      program: "Computer Science · first two years",
      period: "2021 — 2023",
      location: "Arequipa, Perú",
    },
  ],
  certifications,
  languages: [
    { name: "Spanish", level: "Native" },
    { name: "English", level: "Intermediate — Advanced" },
    { name: "French", level: "Beginner · currently learning" },
  ],
};

const es: Dictionary = {
  profile: {
    name: "Gabriel Nuñez Arenas",
    shortName: "Gabriel Nuñez",
    role: "Desarrollador de Software",
    location: "Arequipa, Perú",
    email: "gabriel.nunez.arenas@gmail.com",
    summary:
      "Construyo y despliego sistemas web de punta a punta — desde interfaces limpias y de alto rendimiento hasta despliegues en la nube con Docker y CI/CD.",
    bio: [
      "Desarrollador de Software apasionado por construir y desplegar sistemas web, con experiencia práctica en desarrollo web y despliegues en la nube. Trabajo principalmente en los ecosistemas de JavaScript y Python, desarrollando aplicaciones web y gestionando su entrega mediante Docker, pipelines de CI/CD y plataformas cloud (entornos VPS y PaaS).",
      "Soy un profesional autodidacta con un fuerte sentido de la responsabilidad, capaz de hacerme cargo de todo el ciclo de vida, del desarrollo a producción. Actualmente estoy fortaleciendo mis habilidades en infraestructura cloud y prácticas DevOps mientras sigo entregando soluciones web confiables.",
      "También soy miembro activo y organizador del Google Developer Group (GDG) Arequipa, donde ayudo a organizar eventos y a impulsar el crecimiento de la comunidad tech local.",
    ],
    currently: "Desarrollador AI & Full Stack @ AM Digital",
    community: "Organizador @ GDG Arequipa",
  },
  nav: {
    home: "Inicio",
    work: "Proyectos",
    about: "Sobre mí",
    elsewhere: "En otros lados",
    subs: {
      "/": [
        { id: "what-i-do", label: "Qué hago" },
        { id: "selected-work", label: "Trabajo seleccionado" },
        { id: "experience", label: "Experiencia" },
        { id: "contact", label: "Contacto" },
      ],
      "/work": [
        { id: "personal", label: "Personal" },
        { id: "client-work", label: "Clientes" },
      ],
      "/about": [
        { id: "career", label: "Trayectoria" },
        { id: "education", label: "Educación" },
        { id: "beyond", label: "Más allá del código" },
      ],
    },
  },
  hero: {
    viewWork: "Ver proyectos",
    getInTouch: "Escríbeme",
    currentlyLabel: "Actualmente",
  },
  strip: { kicker: "El stack con el que trabajo" },
  services: {
    kicker: "01 — Qué hago",
    title: "De la interfaz a la infraestructura.",
    items: [
      {
        index: "01",
        title: "Ingeniería Frontend",
        description:
          "UIs orientadas a componentes con tipado estricto, renderizado en el servidor y code splitting — rendimiento (Core Web Vitals), accesibilidad y diseño responsive por defecto. React, Next.js, TypeScript, Tailwind.",
      },
      {
        index: "02",
        title: "Backend y APIs",
        description:
          "Diseño de APIs REST y GraphQL con autenticación (JWT, control de acceso por roles), validación de datos y modelado relacional sobre PostgreSQL. Node.js con Express/NestJS, Spring Boot con Java, Django y Laravel.",
      },
      {
        index: "03",
        title: "Arquitectura de Software",
        description:
          "Arquitecturas por capas — repositorios, servicios, controladores — patrones MVC/MVT y microservicios, diseñadas para escalabilidad, separación de responsabilidades y mantenibilidad a largo plazo.",
      },
      {
        index: "04",
        title: "Cloud y DevOps",
        description:
          "Contenedores Docker, pipelines de CI/CD y administración de servidores Linux — manejo de entornos y secretos, despliegues reproducibles en VPS y PaaS pensados para alta disponibilidad.",
      },
      {
        index: "05",
        title: "IA y Desarrollo Agéntico",
        description:
          "Flujos agénticos con Claude Code — skills, subagentes y pipelines automatizados — RAG, prompt engineering e integraciones LLM con tool calling aplicadas a procesos de negocio reales.",
      },
      {
        index: "06",
        title: "Entrega Ágil",
        description:
          "Desarrollo iterativo bajo Scrum y Kanban — flujo de equipo con Git/GitHub, code reviews y estimación clara, entregando en ciclos cortos y predecibles.",
      },
    ],
  },
  featured: {
    kicker: "02 — Trabajo seleccionado",
    title: "Cosas que he construido recientemente.",
    viewAll: "Ver todos los proyectos",
  },
  experienceSection: {
    kicker: "03 — Experiencia",
    title: "Dónde he trabajado.",
    fullPath: "Trayectoria completa",
  },
  contact: {
    kicker: "04 — Contacto",
    title: "Construyamos algo juntos.",
    blurb:
      "Abierto a nuevos proyectos y colaboraciones — si quieres hablar de trabajo o solo saludar, mi bandeja está abierta.",
  },
  footer: {
    message: "Construyamos algo juntos.",
    version: "Portfolio v2.0.0",
    updated: "Última actualización — Julio 2026",
  },
  workPage: {
    kicker: "Proyectos — Índice",
    title: "Proyectos y trabajo con clientes.",
    intro:
      "Una selección de lo que he construido y en lo que he contribuido — desde productos personales y herramientas para la comunidad hasta sistemas en producción para clientes.",
    personalKicker: "01 — Personal y comunidad",
    clientKicker: "02 — Clientes y equipos",
  },
  aboutPage: {
    kicker: "01 — Sobre mí",
    title: "Sobre mí.",
    factLabels: {
      location: "Ubicación",
      currently: "Actualmente",
      community: "Comunidad",
      languages: "Idiomas",
    },
    careerKicker: "02 — Trayectoria",
    careerTitle: "Experiencia.",
    eduKicker: "03 — Educación",
    eduTitle: "Dónde aprendí.",
    certificationsTitle: "Certificaciones",
    languagesTitle: "Idiomas",
    beyondKicker: "04 — Más allá del código",
    beyondTitle: "Fuera de horario.",
    beyond: [
      {
        index: "01",
        title: "Mascotas",
        description:
          "Comparto mi vida con 7 Schnauzers — gran parte de mi rutina diaria y de mi inspiración.",
      },
      {
        index: "02",
        title: "Música",
        description:
          "Toco piano y guitarra, explorando la creatividad más allá de la pantalla.",
      },
      {
        index: "03",
        title: "Comunidad",
        description:
          "Como organizador del GDG Arequipa ayudo a realizar eventos que hacen crecer la escena tech local.",
      },
    ],
  },
  experience: [
    {
      company: "AM Digital",
      role: "Desarrollador AI & Full Stack",
      period: "May 2026 — Jul 2026",
      location: "Arequipa, Perú",
      summary:
        "Agencia de desarrollo de software y marketing digital que construye aplicaciones a medida para diversos clientes.",
      highlights: [
        "Diseñé y desplegué bots de WhatsApp listos para producción, integrados con los ERPs de los clientes, automatizando el 100% del ciclo de agendamiento de citas.",
        "Apliqué flujos de desarrollo agéntico (Claude Code) para acelerar la entrega de funcionalidades complejas manteniendo la calidad del código.",
        "Construí servicios backend escalables con NestJS e interfaces web de alto rendimiento con Next.js.",
        "Empaqueté aplicaciones en contenedores Docker y gestioné despliegues en entornos VPS en la nube.",
      ],
      stack: ["NestJS", "Next.js", "Docker", "VPS", "Claude Code"],
    },
    {
      company: "Ecytel S.A.C.",
      role: "Desarrollador Full Stack · Contrato",
      period: "Feb 2026 — Mar 2026",
      location: "Arequipa, Perú",
      summary:
        "Plataforma de gestión SST: capacitaciones, evaluaciones, seguimiento de cumplimiento y documentación de seguridad para cuadrillas de telecomunicaciones.",
      highlights: [
        "Construí y desplegué el backend completo — Node.js, Express y Prisma sobre PostgreSQL — con arquitectura en capas y más de 40 endpoints REST.",
        "Implementé autenticación JWT con roles diferenciados, middleware de autorización y manejo de contraseñas con bcrypt.",
        "Integré la API de Google Drive para almacenamiento de documentos y Resend para notificaciones por correo, optimizando costos de infraestructura.",
        "Desarrollé un sistema de exámenes con validación automática, bloqueos temporales y generación aleatoria de preguntas.",
      ],
      stack: ["Node.js", "Express", "Prisma", "PostgreSQL", "Next.js"],
    },
    {
      company: "Monasterio ERP",
      role: "Desarrollador Frontend y Organizador",
      period: "Ago 2024 — Ene 2025",
      location: "Arequipa, Perú",
      summary:
        "Aplicación web construida con Tecsup para el Monasterio Santa María, digitalizando procesos internos y presencia institucional.",
      highlights: [
        "Contribuí al diseño y desarrollo de componentes web, creando vistas de UI en Figma.",
        "Desarrollé componentes frontend escalables y reutilizables en TypeScript, asegurando type safety y consistencia visual.",
        "Ayudé a coordinar los equipos de UI y frontend durante las primeras etapas del desarrollo.",
      ],
      stack: ["TypeScript", "React", "Figma"],
    },
    {
      company: "PoketVet",
      role: "Desarrollador Frontend Junior",
      period: "Oct 2023 — Ene 2024",
      location: "Lima, Perú",
      summary:
        "Aplicación web para una clínica veterinaria con gestión de pacientes y un módulo logístico de compra de equipos.",
      highlights: [
        "Programé componentes reutilizables y modulares con Vue.js para mejorar la eficiencia y escalabilidad del desarrollo.",
        "Me enfoqué en optimización de rendimiento y accesibilidad, mejorando la experiencia del usuario final.",
        "Creé e integré endpoints backend contra servicios API construidos en Express.",
      ],
      stack: ["Vue.js", "Express", "REST API"],
    },
    {
      company: "Dellior",
      role: "Desarrollador Web Freelance",
      period: "Jul 2023 — Sep 2023",
      location: "Arequipa, Perú",
      summary:
        "E-commerce para una panadería, con catálogo completo de productos, precios y detalles.",
      highlights: [
        "Construí una aplicación web intuitiva y accesible con React y Tailwind usando diseño responsive.",
        "Establecí la presencia online de la empresa, aumentando su visibilidad y atrayendo nuevos clientes.",
        "Impulsé las ventas destacando ofertas exclusivas online para clientes digitales.",
      ],
      stack: ["React", "Tailwind CSS"],
    },
  ],
  projects: [
    {
      name: "MetalOps",
      group: "personal",
      context: "Gestión de órdenes de trabajo",
      description:
        "Aplicación web para gestionar y ejecutar órdenes de trabajo en una empresa metalmecánica — trazabilidad, eficiencia operativa y organización del flujo de trabajo.",
      stack: [
        "Next.js",
        "TypeScript",
        "Django",
        "Spring Boot",
        "PostgreSQL",
        "Tailwind CSS",
      ],
      video: "/MetalOps/VideoMetalOps.mp4",
    },
    {
      name: "Keynest",
      group: "personal",
      context: "Plataforma inmobiliaria",
      description:
        "Aplicación para buscar y publicar ventas de inmuebles, con una experiencia de navegación limpia sobre una API REST.",
      stack: ["Next.js", "Laravel", "REST API", "Tailwind CSS"],
      // TODO: reemplazar con el video real de Keynest
      video: "/MetalOps/VideoMetalOps.mp4",
    },
    {
      name: "BingoBTP",
      group: "personal",
      context: "GDG · Breaking The Pattern",
      description:
        "Aplicación web de networking para el evento “Breaking The Pattern” del GDG, desplegada en Vercel y Render.",
      stack: ["Next.js", "Express", "Prisma", "PostgreSQL", "Tailwind CSS"],
      // TODO: reemplazar con el video real de BingoBTP
      video: "/MetalOps/VideoMetalOps.mp4",
    },
    {
      name: "WhatsApp AI Bots",
      group: "client",
      context: "AM Digital · 2026",
      description:
        "Bots de WhatsApp en producción integrados con los ERPs de los clientes, automatizando todo el ciclo de agendamiento de citas y los flujos de atención al cliente.",
      stack: ["NestJS", "Next.js", "Docker", "VPS"],
    },
    {
      name: "Sistema de Gestión SST",
      group: "client",
      context: "Ecytel S.A.C. · 2026",
      description:
        "Plataforma de Seguridad y Salud en el Trabajo — capacitaciones, evaluaciones con validación automática, seguimiento de cumplimiento y documentación de seguridad.",
      stack: ["Node.js", "Express", "Prisma", "PostgreSQL", "Next.js"],
    },
    {
      name: "Monasterio ERP",
      group: "client",
      context: "Tecsup × Monasterio Santa María · 2024",
      description:
        "ERP institucional que digitaliza operaciones internas y presencia organizacional, construido en colaboración con Tecsup.",
      stack: ["TypeScript", "React", "Figma"],
    },
    {
      name: "PoketVet",
      group: "client",
      context: "Clínica veterinaria · 2023",
      description:
        "Plataforma de gestión de pacientes con un módulo logístico para compra de equipos.",
      stack: ["Vue.js", "Express"],
    },
    {
      name: "Dellior",
      group: "client",
      context: "E-commerce de panadería · 2023",
      description:
        "E-commerce con catálogo completo de productos, precios y detalles — creado para establecer la presencia online de la panadería.",
      stack: ["React", "Tailwind CSS"],
    },
  ],
  education: [
    {
      institution: "Tecsup",
      program: "Diseño y Desarrollo de Software",
      period: "2023 — 2026",
      location: "Arequipa, Perú",
    },
    {
      institution: "Codeable",
      program:
        "Programa intensivo de desarrollo web full-stack · tiempo completo, 8 meses",
      period: "2023",
      location: "Lima, Perú",
    },
    {
      institution: "Universidad Católica San Pablo",
      program: "Ciencias de la Computación · primeros dos años",
      period: "2021 — 2023",
      location: "Arequipa, Perú",
    },
  ],
  certifications,
  languages: [
    { name: "Español", level: "Nativo" },
    { name: "Inglés", level: "Intermedio — Avanzado" },
    { name: "Francés", level: "Principiante · en aprendizaje" },
  ],
};

export const content: Record<Lang, Dictionary> = { en, es };
