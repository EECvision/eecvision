import MenuIcon from "@/assets/SvgComponents/MenuIcon";
import Button from "../Button/Button";
import Responsive from "../Responsive/Responsive";
import styles from "./Navbar.module.css";
import XIcon from "@/assets/SvgComponents/XIcon";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Download } from "lucide-react";
import logoImage from "@/assets/emmanuel_ezeka.png";

const navList = [
  { label: "About", url: "#about" },
  { label: "Projects", url: "#projects" },
  {
    label: "Resume",
    url: "/Emmanuel_Ezeka_Resume.pdf",
    isDownload: true,
  },
];

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  return (
    <div className={styles.outerContainer}>
      <Responsive className={styles.container}>
        <div className={styles.innerContainer}>
          <Link
            href="/"
            className={`${styles.logo} ${openNav ? styles.open : ""}`}
          >
            <Image
              src={logoImage}
              alt="Emmanuel Ezeka"
              className={styles.logoIcon}
              style={{ objectFit: "cover" }}
            />
            eecvision
          </Link>

          <div className={styles.rightRow}>
            <nav
              className={`${styles.navContainer} ${openNav ? styles.open : ""}`}
            >
              {navList.map((navItem, idx) => {
                const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
                  setOpenNav(false);
                  if (navItem.isDownload) {
                     e.currentTarget.href = `/api/download-resume?t=${Date.now()}`;
                  }
                };

                const content = (
                  <>
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      {navItem.label}
                      {navItem.isDownload && <Download size={16} />}
                    </span>
                    <svg
                      className={styles.navUnderline}
                      viewBox="0 0 100 10"
                      preserveAspectRatio="none"
                    >
                      <line
                        x1="2"
                        y1="5"
                        x2="98"
                        y2="5"
                        className={styles.navUnderlinePath}
                      />
                      <circle
                        cx="2"
                        cy="5"
                        r="2"
                        className={styles.navUnderlineDot}
                      />
                      <circle
                        cx="98"
                        cy="5"
                        r="2"
                        className={styles.navUnderlineDot}
                      />
                    </svg>
                  </>
                );

                return navItem.isDownload ? (
                  <a
                    href="/api/download-resume"
                    className={styles.navItem}
                    key={idx}
                    onClick={handleNavClick}
                  >
                    {content}
                  </a>
                ) : (
                  <Link
                    href={navItem.url}
                    className={styles.navItem}
                    key={idx}
                    onClick={handleNavClick}
                  >
                    {content}
                  </Link>
                );
              })}
            </nav>

            {/* <Button>Get Started</Button> */}
            <div
              onClick={() => setOpenNav((isOpen) => !isOpen)}
              className={styles.menuIcon}
            >
              <MenuIcon
                style={{ visibility: openNav ? "hidden" : "visible" }}
              />
              <XIcon style={{ visibility: openNav ? "visible" : "hidden" }} />
            </div>
          </div>
        </div>
      </Responsive>
    </div>
  );
};

export default Navbar;
