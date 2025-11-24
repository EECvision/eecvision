import React from "react";
import styles from "./Projects.module.css";
import GlassCard from "../GlassCard/GlassCard";
import { ArrowUpRight } from "lucide-react";

const projects = [
    {
        title: "Fracxn",
        description: "B2B Fintech & Lending Infrastructure Platform serving invoice factoring, receivables financing, and embedded finance solutions.",
        techStack: ["Next.js", "TypeScript", "TanStack Query"],
        link: "#",
    },
    {
        title: "Genadrop",
        description: "Digital Asset Creation & Marketplace Platform with automated rarity calculation and generative art systems.",
        techStack: ["React.js", "GraphQL", "Firebase"],
        link: "#",
    },
    {
        title: "Shukria",
        description: "Enterprise Payroll Automation & Payment Platform with risk mitigation and real-time processing.",
        techStack: ["React", "TypeScript", "Node.js"],
        link: "#",
    },
    {
        title: "Orki",
        description: "Multi-currency payment infrastructure for seamless money transfer and currency conversion.",
        techStack: ["React", "TypeScript", "Fintech"],
        link: "#",
    },
    {
        title: "Fracxn-Carbon",
        description: "Carbon Footprint Management & Offset Marketplace enabling users to measure emissions and purchase offsets.",
        techStack: ["Next.js", "TypeScript", "Green Tech"],
        link: "#",
    },
];

const Projects = () => {
    return (
        <section id="projects" className={styles.section}>
            <h2 className={styles.title}>Selected Work</h2>
            <div className={styles.grid}>
                {projects.map((project, index) => (
                    <GlassCard key={index} className={styles.projectCard} hoverEffect={true}>
                        <div>
                            <h3 className={styles.projectTitle}>{project.title}</h3>
                            <p className={styles.projectDescription}>{project.description}</p>
                            <div className={styles.techStack}>
                                {project.techStack.map((tech, i) => (
                                    <span key={i} className={styles.techTag}>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <a href={project.link} className={styles.projectLink}>
                            View Project <ArrowUpRight size={14} />
                        </a>
                    </GlassCard>
                ))}
            </div>
        </section>
    );
};

export default Projects;
