"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

interface Project {
  id: string;
  title: string;
  company?: string;
  image: string;
  contribution: string;
  companyHelp: string;
  stack: string[];
  stackColors?: { [key: string]: string };
  size?: "small" | "medium" | "large";
}

export default function ProjectGrid() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: "1",
      title: "MetalOps",
      company: "Personal Project",
      image: "/tuxy.gif",
      contribution:
        "Desarrollé la arquitectura backend completa con Django y Spring Boot, implementé la API REST, sistema de autenticación, gestión de base datos con PostgreSQL y la integración del frontend en Next.js.",
      companyHelp:
        "Proporcionó un sistema centralizado para la gestión de órdenes de trabajo, mejorando la trazabilidad operativa en un 85% y reduciendo tiempos de procesamiento de datos técnicos.",
      stack: ["Django", "Spring Boot", "Next.js", "PostgreSQL", "React"],
      size: "large",
    },
    {
      id: "2",
      title: "Dashboard Analytics",
      company: "Tech Startup",
      image: "/tuxy.gif",
      contribution:
        "Implementé componentes interactivos del dashboard y optimicé las queries de base datos para mejorar el rendimiento de carga de datos en tiempo real.",
      companyHelp:
        "Aceleró la visualización de métricas en un 60%, permitiendo a los usuarios tomar decisiones más rápidas basadas en datos actualizados.",
      stack: ["React", "TypeScript", "Tailwind", "Node"],
      size: "small",
    },
    {
      id: "3",
      title: "E-Commerce Platform",
      company: "E-Shop",
      image: "/tuxy.gif",
      contribution:
        "Creé el sistema de carrito de compras, pasarela de pagos integrada con Stripe, y sistema de inventario en tiempo real.",
      companyHelp:
        "Aumentó las conversiones de compra en un 40% y redujo el abandono de carrito gracias a la experiencia de usuario optimizada.",
      stack: ["Next.js", "PostgreSQL", "TypeScript", "Tailwind"],
      size: "small",
    },
    {
      id: "4",
      title: "Mobile App",
      company: "Fintech Startup",
      image: "/tuxy.gif",
      contribution:
        "Desarrollé la lógica de negocio principal, APIs REST y sincronización de datos offline de la aplicación móvil.",
      companyHelp:
        "Permitió que la empresa escalara su base de usuarios en un 200% con una aplicación robusta y confiable.",
      stack: ["React Native", "Node", "MongoDB", "Express"],
      size: "medium",
    },
    {
      id: "5",
      title: "Design System",
      company: "Design Agency",
      image: "/tuxy.gif",
      contribution:
        "Construí una librería de componentes reutilizables con documentación completa y stories en Storybook.",
      companyHelp:
        "Redujo el tiempo de desarrollo de nuevos proyectos en un 50% y estandarizó la experiencia visual en todos los productos.",
      stack: ["React", "TypeScript", "Storybook", "Tailwind"],
      size: "small",
    },
    {
      id: "6",
      title: "CMS Platform",
      company: "Content Creator Co.",
      image: "/tuxy.gif",
      contribution:
        "Implementé el sistema de autenticación, roles y permisos, además de la interfaz de edición de contenido en tiempo real.",
      companyHelp:
        "Facilitó que 500+ creadores de contenido publiquen simultáneamente sin conflictos, aumentando la productividad un 75%.",
      stack: ["Next.js", "PostgreSQL", "Figma", "JavaScript"],
      size: "medium",
    },
  ];

  return (
    <>
      <section className="w-full px-6 pb-24">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 auto-rows-max">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                company={project.company}
                image={project.image}
                size={project.size}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <ProjectModal
          isOpen={true}
          onClose={() => setSelectedProject(null)}
          title={selectedProject.title}
          company={selectedProject.company}
          image={selectedProject.image}
          contribution={selectedProject.contribution}
          companyHelp={selectedProject.companyHelp}
          stack={selectedProject.stack}
          stackColors={selectedProject.stackColors}
        />
      )}
    </>
  );
}
