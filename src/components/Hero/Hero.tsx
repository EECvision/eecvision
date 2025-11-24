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
          Frontend Developer specializing in TypeScript and React. I transform
          complex requirements into polished, interactive experiences—working at
          the intersection of design excellence and technical precision. 5+
          years building production applications for fintech, marketplaces, and
          enterprise platforms.
        </p>

        <div className={styles.ctaContainer}>
          <button className={`${styles.button} ${styles.primaryButton}`}>
            Contact me <ArrowRight size={16} style={{ marginLeft: "8px" }} />
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
