import React, { useEffect } from "react";
import styles from "./Hero.module.css";
import GridBackground from "../GridBackground/GridBackground";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  // Initialize at -270 so it does one full forward sweep (360 degrees) to reach 90
  const angle = useMotionValue(-270);
  const rotate = useSpring(angle, { stiffness: 80, damping: 20, mass: 0.5 });

  useEffect(() => {
    // Setting the target allows the spring to smoothly animate it forward natively
    // without any sudden resets or fighting a separate animate() call.
    angle.set(90);
  }, [angle]);

  function handleMouseMove({ clientX, clientY, currentTarget }: React.MouseEvent) {
    const rect = currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const x = clientX - centerX;
    const y = clientY - centerY;
    
    // atan2 gives angle from X axis. Shift by -90 to align the bottom of the gradient with the cursor.
    const newAngle = Math.atan2(y, x) * (180 / Math.PI) - 90;
    
    const currentAngle = angle.get();
    let diff = newAngle - (currentAngle % 360);
    if (diff > 180) diff -= 360;
    if (diff < -180) diff += 360;
    
    angle.set(currentAngle + diff);
  }

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
          {"Building interfaces that connect design vision with user reality"
            .split(" ")
            .map((word, wordIndex, wordsArray) => (
              <span
                key={wordIndex}
                style={{ display: "inline-block", whiteSpace: "nowrap" }}
              >
                <motion.span
                  className={styles.char}
                  animate={{ backgroundPosition: ["200% center", "0% center"] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatDelay: 4,
                    ease: "linear",
                    delay: wordIndex * 0.2,
                  }}
                >
                  {word}
                </motion.span>
                {wordIndex !== wordsArray.length - 1 && "\u00A0"}
              </span>
            ))}
        </h1>
        <p className={styles.subtitle}>
          Senior front-end engineer specializing in Next.js, TypeScript, and
          performance optimization with 5 years of production experience.
        </p>

        <div className={styles.ctaContainer}>
          <a
            href="mailto:ezekaemmanuel1710@gmail.com"
            className={styles.spotlightButton}
            onMouseMove={handleMouseMove}
          >
            <motion.div 
              className={styles.spotlightBorder} 
              style={{
                rotate: rotate,
                x: "-50%",
                y: "-50%"
              }}
            />
            <span className={styles.spotlightContent}>
              Contact me <ArrowRight size={16} style={{ marginLeft: "8px" }} />
            </span>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
