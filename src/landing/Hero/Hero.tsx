import Button from "../Button/Button";
import Responsive from "../Responsive/Responsive";
import Tag from "../Tag/Tag";
import styles from "./Hero.module.css";
import GridBackground from "../GridBackground/GridBackground";
import SlideUp from "../SlideUp/SlideUp";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <GridBackground>
      <Responsive className={styles.container}>
        <Tag text="5+ years of production experience" />

        <div className={`${styles.tag} ${styles.tag1}`}>[ Next.js ]</div>
        <div className={`${styles.tag} ${styles.tag2}`}>[ React ]</div>
        <div className={`${styles.tag} ${styles.tag3}`}>[ TypeScript ]</div>
        <div className={`${styles.tag} ${styles.tag4}`}>[ UI/UX ]</div>

        <div>
          <SlideUp>
            <div className={styles.header}>
              Building interfaces that <br /> connect <span>design</span> vision
              with <br /> user <span>reality</span>
            </div>
          </SlideUp>

          <SlideUp>
            <div className={styles.subHeader}>
              Senior front-end engineer specializing in Next.js, TypeScript, and
              performance <br />
              optimization with 5 years of production experience.
            </div>
          </SlideUp>
        </div>

        <a
          href="mailto:ezekaemmanuel1710@gmail.com"
          style={{ textDecoration: "none" }}
        >
          <Button style={{ height: 44 }} rightIcon={<ArrowRight size={16} />}>
            Contact Me
          </Button>
        </a>
      </Responsive>
    </GridBackground>
  );
};

export default Hero;
