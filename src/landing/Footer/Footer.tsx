import ArrowRight from "@/assets/SvgComponents/ArrowRight";
import Responsive from "../Responsive/Responsive";
import styles from "./Footer.module.css";
const socialLinks = [
  { name: "GitHub", href: "https://github.com/EECvision" },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/emmanuel-ezeka-027728163/",
  },
  { name: "Twitter/X", href: "https://x.com/EECvision" },
  { name: "Contact Email", href: "mailto:ezekaemmanuel1710@gmail.com" },
];

const Footer = () => {
  return (
    <Responsive className={styles.container}>
      <div className={styles.socialRow}>
        {socialLinks.map((social) => (
          <a 
            key={social.name} 
            href={social.href} 
            className={styles.socialItem}
            target="_blank"
            rel="noreferrer"
          >
            <span className={styles.socialName}>{social.name}</span>
            <ArrowRight className={styles.socialIcon} />
          </a>
        ))}
      </div>

      <div className={styles.bottom}>
        <span className={styles.copyright}>
          ©2026 EECvision. All rights reserved.
        </span>
      </div>
    </Responsive>
  );
};

export default Footer;
