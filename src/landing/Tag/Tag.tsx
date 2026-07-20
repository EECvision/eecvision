import BlueCube from "../BlueCube/BlueCube";
import styles from "./Tag.module.css";

const Tag = ({ text, noIcon = false }: { text: string; noIcon?: boolean }) => {
  return (
    <div className={styles.container}>
      {!noIcon && <BlueCube />} {text}
    </div>
  );
};

export default Tag;
