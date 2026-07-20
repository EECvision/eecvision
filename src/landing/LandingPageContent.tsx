import Navbar from "./Navbar/Navbar";
import styles from "./LandingPageContent.module.css";
import Hero from "./Hero/Hero";
import Divider from "./Divider/Divider";
import Spacer from "./Spacer/Spacer";
import StartBuilding from "./StartBuilding/StartBuilding";
import Footer from "./Footer/Footer";
import PersonalProjects from "./PersonalProjects/PersonalProjects";
import CorporateProjects from "./CorporateProjects/CorporateProjects";
import Technologies from "./Technologies/Technologies";

export function LandingPageContent() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Hero />
      <div className={styles.lineSection}>
        <PersonalProjects />
        <Spacer className={styles.spacer74} />
        <CorporateProjects />
        <Spacer className={styles.spacer74} />
        <Divider />
        <Spacer className={styles.spacer74} />
        <Technologies />
        <Spacer className={styles.spacer174} />
        <StartBuilding />
        <Spacer className={styles.spacer74} />
        <Divider style={{ borderBottom: "1px solid transparent" }} />
        <Footer />
      </div>
    </div>
  );
}
