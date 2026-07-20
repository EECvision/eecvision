import Responsive from "../Responsive/Responsive";
import Tag from "../Tag/Tag";
import styles from "./CorporateProjects.module.css";
import SlideUp from "../SlideUp/SlideUp";
import ProjectCarousel from "@/components/ProjectCarousel/ProjectCarousel";
import { ArrowUpRight } from "lucide-react";
import craftx1 from "@/assets/projects/craftx/img1.png";
import craftx2 from "@/assets/projects/craftx/img2.png";
import craftx3 from "@/assets/projects/craftx/img3.png";
import craftx4 from "@/assets/projects/craftx/img4.png";
import orki1 from "@/assets/projects/orki/img1.png";
import orki2 from "@/assets/projects/orki/img2.png";
import orki3 from "@/assets/projects/orki/img3.png";
import orkiMoney1 from "@/assets/projects/orki-money/img1.png";
import orkiMoney2 from "@/assets/projects/orki-money/img2.png";
import liquidRamp1 from "@/assets/projects/liquidramp/img1.png";
import liquidRamp2 from "@/assets/projects/liquidramp/img2.png";

const projects = [
  {
    title: "CraftX",
    description:
      "An operational AI infrastructure for fit-out and construction intelligence. It transforms fragmented project inputs into a unified model, enabling teams to govern data, automate workflows, and control execution across the entire lifecycle.",
    link: "https://www.craftxai.ai/",
    images: [craftx1, craftx2, craftx3, craftx4],
  },
  {
    title: "LiquidRamp",
    description:
      "A non-custodial infrastructure powering global money movement. It enables seamless conversion between stablecoins and local currencies while offering programmable, liquidity-driven earnings.",
    link: "https://www.liquidramp.io/",
    images: [liquidRamp1, liquidRamp2],
  },
  {
    title: "Orki",
    description:
      "A stablecoin neobank for global payments. Accept payments, manage your wallet, and spend globally using stablecoins on a single platform that replaces your payment gateway, bank, and cards.",
    link: "https://orki.io/",
    images: [orki1, orki2, orki3],
  },
  {
    title: "Orki Money",
    description:
      "An optimized fiat-to-crypto onramp solution. It maximizes conversion and revenue for Web3 platforms, providing up to 20x more global coverage compared to single-provider alternatives.",
    link: "https://money.orki.io/",
    images: [orkiMoney2, orkiMoney1],
  },
];

const CorporateProjects = () => {
  return (
    <Responsive className={styles.container}>
      <Tag text="Corporate Experience" />

      <div className={styles.header}>
        <SlideUp>
          <div className={styles.title}>
            Professional <span>Projects</span>
          </div>
        </SlideUp>

        <SlideUp>
          <div className={styles.description}>
            Production applications built for clients across fintech and
            enterprise, spanning payment systems, internal platforms, and
            customer-facing products.
          </div>
        </SlideUp>
      </div>

      <div className={styles.cardRow}>
        {projects.map(({ link, title, description, images }, idx) => (
          <div key={idx} className={styles.card}>
            <div className={styles.imageContainer}>
              <SlideUp
                className={styles.imageWrapper}
                wrapperStyle={{ width: "100%", height: "100%" }}
              >
                <ProjectCarousel images={images} title={title} />
              </SlideUp>
            </div>
            <div className={styles.details}>
              <SlideUp>
                <div>
                  <div className={styles.name}>{title}</div>
                  <div className={styles.cardDesc}>{description}</div>
                </div>
              </SlideUp>
              <div className={styles.linkRow}>
                <a
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.link}
                  style={{ textDecoration: "none" }}
                >
                  <ArrowUpRight size={16} style={{ marginBottom: "-2px" }} />{" "}
                  View Project
                </a>
                <div className={styles.count}>
                  [ {String(idx + 1).padStart(2, "0")} ]
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Responsive>
  );
};

export default CorporateProjects;
