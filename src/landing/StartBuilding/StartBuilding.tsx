import Button from "../Button/Button";
import styles from "./StartBuilding.module.css";
import Responsive from "../Responsive/Responsive";
import SlideUp from "../SlideUp/SlideUp";

const AbstractGlobeGraphic = () => (
  <svg
    width="450"
    height="450"
    viewBox="0 0 450 450"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ maxWidth: "100%", height: "auto", display: "block" }}
  >
    {/* Glow and background */}
    <circle cx="225" cy="225" r="170" fill="url(#globeGradient)" opacity="0.6" />
    
    {/* Grid lines (Longitudes) */}
    <ellipse cx="225" cy="225" rx="170" ry="170" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.25" />
    <ellipse cx="225" cy="225" rx="100" ry="170" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.25" />
    <ellipse cx="225" cy="225" rx="35"  ry="170" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.25" />
    
    {/* Grid lines (Latitudes) */}
    <ellipse cx="225" cy="225" rx="170" ry="35"  stroke="#ffffff" strokeWidth="1" strokeOpacity="0.25" />
    <ellipse cx="225" cy="225" rx="170" ry="100" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.25" />
    
    {/* Nodes */}
    <circle cx="110" cy="170" r="5" fill="#ffffff" fillOpacity="0.6" filter="url(#glow)" />
    <circle cx="200" cy="70" r="7" fill="#ffffff" fillOpacity="0.6" filter="url(#glow)" />
    <circle cx="330" cy="150" r="4" fill="#ffffff" fillOpacity="0.6" filter="url(#glow)" />
    <circle cx="260" cy="340" r="6" fill="#ffffff" fillOpacity="0.6" filter="url(#glow)" />
    <circle cx="140" cy="300" r="5" fill="#ffffff" fillOpacity="0.6" filter="url(#glow)" />
    <circle cx="225" cy="225" r="8" fill="#ffffff" fillOpacity="0.8" filter="url(#glow)" />
    
    {/* Connecting lines */}
    <path d="M 110 170 L 200 70 L 330 150 L 260 340 L 140 300 Z" stroke="#ffffff" strokeWidth="1.5" strokeOpacity="0.2" strokeDasharray="4 4" />
    <path d="M 200 70 L 225 225 M 110 170 L 225 225 M 140 300 L 225 225 M 330 150 L 225 225 M 260 340 L 225 225" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.15" />
    
    {/* High tech rings around the globe */}
    <ellipse cx="225" cy="225" rx="230" ry="75" stroke="url(#ringGradient)" strokeWidth="2.5" transform="rotate(-15 225 225)" strokeOpacity="0.3" />
    <ellipse cx="225" cy="225" rx="250" ry="55" stroke="url(#ringGradient)" strokeWidth="1.5" transform="rotate(25 225 225)" strokeOpacity="0.15" strokeDasharray="8 8" />

    <defs>
      <radialGradient id="globeGradient" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(180 180) rotate(45) scale(200)">
        <stop stopColor="#ffffff" stopOpacity="0.3" />
        <stop offset="0.6" stopColor="#86b0fe" stopOpacity="0.1" />
        <stop offset="1" stopColor="#5c95ff" stopOpacity="0.0" />
      </radialGradient>
      
      <linearGradient id="ringGradient" x1="0" y1="0" x2="450" y2="450" gradientUnits="userSpaceOnUse">
        <stop stopColor="#ffffff" />
        <stop offset="0.4" stopColor="#86b0fe" />
        <stop offset="1" stopColor="transparent" />
      </linearGradient>
      
      <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="4" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>
  </svg>
);

const StartBuilding = () => {
  return (
    <Responsive className={styles.container}>
      <div className={styles.titleWrapper}>
        <div className={styles.title}>Let&apos;s work together</div>
        <div className={styles.description}>
          I&apos;m currently open for new opportunities. Have a project in mind
          or just want to say hi? I&apos;d love to hear from you.
        </div>
        <a
          href="mailto:ezekaemmanuel1710@gmail.com"
          style={{ textDecoration: "none" }}
        >
          <Button variant="secondary" className={styles.btn}>
            Say Hello
          </Button>
        </a>
      </div>

      <div 
        className={styles.smartBlock} 
        style={{ 
          right: "-112px", 
          bottom: "-112px", 
          position: "absolute"
        }}
      >
        <SlideUp>
          <AbstractGlobeGraphic />
        </SlideUp>
      </div>
    </Responsive>
  );
};

export default StartBuilding;
