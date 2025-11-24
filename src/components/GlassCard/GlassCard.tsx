import React from "react";
import styles from "./GlassCard.module.css";
import { motion } from "framer-motion";

interface GlassCardProps {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

const GlassCard: React.FC<GlassCardProps> = ({
    children,
    className = "",
    hoverEffect = false,
}) => {
    return (
        <motion.div
            className={`${styles.card} ${hoverEffect ? styles.hoverEffect : ""} ${className}`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
        >
            {children}
        </motion.div>
    );
};

export default GlassCard;
