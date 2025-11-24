import React from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <div className={styles.logoIcon} />
                EECvision
            </div>
            <div className={styles.navLinks}>
                <Link href="#projects" className={styles.link}>
                    Projects
                </Link>
                <Link href="#about" className={styles.link}>
                    About
                </Link>
                <Link href="#contact" className={styles.link}>
                    Contact
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
