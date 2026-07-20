import Responsive from "../Responsive/Responsive";
import Tag from "../Tag/Tag";
import styles from "./PersonalProjects.module.css";
import ovBg from "@/assets/overview/image-bg.png";
import SlideUp from "../SlideUp/SlideUp";
import Image from "next/image";
import ProjectCarousel from "@/components/ProjectCarousel/ProjectCarousel";
import reex1 from "@/assets/projects/reex/reex4.1.png";
import reex2 from "@/assets/projects/reex/reex2.1.png";
import reex3 from "@/assets/projects/reex/reex1.1.png";
import reex4 from "@/assets/projects/reex/reex3.1.png";
import wetra1 from "@/assets/projects/wetra/ui1.png";
import wetra2 from "@/assets/projects/wetra/ui2.png";
import wetra3 from "@/assets/projects/wetra/ui3.png";
import wetra4 from "@/assets/projects/wetra/ui4.1.png";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: "01",
    tag: "API Builder",
    title: "Reex API Builder",
    description:
      "A comprehensive API Client and Builder designed to eliminate manual API integration. It seamlessly generates REST APIs, TanStack Query hooks, and strict TypeScript types directly into your project's codebase, alongside a suite of built-in authentication hooks for a seamless development experience.",
    link: "https://reex-api-builder.toolshq.app/",
    images: [reex1, reex2, reex3, reex4],
  },
  {
    id: "02",
    tag: "Women Cycle App",
    title: "Wetra",
    description:
      "An AI-powered, WhatsApp-based menstrual cycle tracking application. It allows users to converse naturally with an AI assistant to log their periods, receive personalized health insights, manage subscriptions, and access detailed reports directly within their messaging app.",
    link: "https://wetra.app/",
    images: [wetra1, wetra2, wetra3, wetra4],
  },
];

const PersonalProjects = () => {
  return (
    <Responsive id="projects" className={styles.container}>
      <Tag text="Personal Projects" />

      <div className={styles.header}>
        <SlideUp>
          <div className={styles.title}>
            Live in <span>Production</span>
          </div>
        </SlideUp>

        <SlideUp>
          <div className={styles.description}>
            A curated selection of personal projects I've developed that are{" "}
            <br />
            currently live and actively being used by customers.
          </div>
        </SlideUp>
      </div>

      {projects.map(({ id, tag, title, description, link, images }, idx) => (
        <div key={idx} className={styles.flatCard}>
          <SlideUp>
            <div className={styles.colLeft}>
              <Tag text={tag} />
              <div className={styles.name}>{title}</div>
              <div className={styles.cardDesc}>{description}</div>
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className={styles.link}
                style={{ textDecoration: "none" }}
              >
                View Project <ArrowUpRight size={16} />
              </a>
            </div>
          </SlideUp>

          <div className={styles.imageContainer}>
            <SlideUp
              className={styles.imageWrapper}
              wrapperStyle={{ width: "100%", height: "100%" }}
            >
              <ProjectCarousel images={images} title={title} />
            </SlideUp>
            <Image className={styles.ovBg} src={ovBg} alt="" />
          </div>
        </div>
      ))}
    </Responsive>
  );
};

export default PersonalProjects;
