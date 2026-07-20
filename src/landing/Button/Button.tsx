import React, { useEffect, useState } from "react";
import styles from "./Button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  variant?: "primary" | "secondary";
}

const Button = ({
  children,
  className = "",
  rightIcon,
  leftIcon,
  variant = "primary",
  ...props
}: ButtonProps) => {
  const [sweepKey, setSweepKey] = useState(0);

  const runSweep = () => {
    setSweepKey((prev) => prev + 1);
  };

  useEffect(() => {
    runSweep();
  }, []);

  return (
    <button
      className={`${styles.container} ${styles[`${variant}Container`]} ${className}`}
      onMouseEnter={runSweep}
      {...props}
    >
      <div
        key={sweepKey}
        className={`${styles.spotlightBorder} ${sweepKey > 0 ? styles.animating : ""}`}
      />
      <span className={`${styles.contentWrapper} ${styles[variant]}`}>
        {leftIcon}
        <div>{children}</div>
        {rightIcon}
      </span>
    </button>
  );
};

export default Button;
