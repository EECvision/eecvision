import Responsive from "../Responsive/Responsive";
import styles from "./Divider.module.css";
import lines from "@/assets/lines.png";
import { CSSProperties } from "react";

const Divider = ({ style }: { style?: CSSProperties }) => {
  return (
    <Responsive style={style} className={styles.container}>
      <div className={styles.innerContainer}>
        <div
          className={styles.bgImage}
          style={{ backgroundImage: `url(${lines})` }}
        ></div>
      </div>
    </Responsive>
  );
};

export default Divider;
