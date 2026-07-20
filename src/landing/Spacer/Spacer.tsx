import Responsive from "../Responsive/Responsive";
import styles from "./Spacer.module.css";

interface SpacerProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

const Spacer = ({ children, className, ...props }: SpacerProps) => {
  return (
    <Responsive className={`${styles.container} ${className || ""}`} {...props}>
      {children}
    </Responsive>
  );
};

export default Spacer;
