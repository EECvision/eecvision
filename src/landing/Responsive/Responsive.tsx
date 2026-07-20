import styles from "./Responsive.module.css";

interface ResponsiveProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Responsive = ({ children, className, ...props }: ResponsiveProps) => {
  return (
    <div className={`${styles.container} ${className || ""}`} {...props}>
      {children}
    </div>
  );
};

export default Responsive;
