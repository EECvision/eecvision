import React from "react";
import styles from "./Footer.module.css";
import { Github, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <span>EECvision</span>
          </div>
          <div className={styles.links}>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} EECvision. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
