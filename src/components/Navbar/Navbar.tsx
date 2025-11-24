import React, { useState } from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <div className={styles.logoIcon} />
                EECvision
            </div>

            {/* Desktop Navigation */}
            <div className={styles.navLinks}>
                <Link href="#projects" className={styles.link}>
                    Projects
                </Link>
                <Link href="#about" className={styles.link}>
                    About
                </Link>
                <a href="/resume.pdf" download className={styles.link}>
                    Resume
                </a>
            </div>

            {/* Mobile Navigation Toggle */}
            <button
                className={styles.hamburger}
                onClick={toggleMenu}
                aria-label="Toggle menu"
            >
                <div
                    className={styles.hamburgerLine}
                    style={{
                        transform: isOpen ? "rotate(45deg)" : "rotate(0)",
                    }}
                />
                <div
                    className={styles.hamburgerLine}
                    style={{
                        opacity: isOpen ? 0 : 1,
                        transform: isOpen ? "translateX(20px)" : "translateX(0)",
                    }}
                />
                <div
                    className={styles.hamburgerLine}
                    style={{
                        transform: isOpen ? "rotate(-45deg)" : "rotate(0)",
                    }}
                />
            </button>

            {/* Mobile Menu Overlay */}
            <div className={`${styles.mobileMenu} ${isOpen ? styles.mobileMenuOpen : ""}`}>
                <Link href="#projects" className={styles.mobileLink} onClick={toggleMenu}>
                    Projects
                </Link>
                <Link href="#about" className={styles.mobileLink} onClick={toggleMenu}>
                    About
                </Link>
                <a href="/resume.pdf" download className={styles.mobileLink} onClick={toggleMenu}>
                    Resume
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
