import styles from "./Hero.module.css";
import GridBackground from "../GridBackground/GridBackground";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <GridBackground />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={styles.container}
      >
        <h1 className={styles.title}>
          Building interfaces that connect design vision with user reality
        </h1>
        <p className={styles.subtitle}>
          Senior front-end engineer specializing in Next.js, TypeScript, and
          performance optimization with 5 years of production experience.
        </p>

        <div className={styles.ctaContainer}>
          <a
            href="mailto:ezekaemmanuel1710@gmail.com"
            className={`${styles.button} ${styles.primaryButton}`}
          >
            Contact me <ArrowRight size={16} style={{ marginLeft: "8px" }} />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
