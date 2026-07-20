import ArrowRight from "@/assets/SvgComponents/ArrowRight";
import Button from "../Button/Button";
import Responsive from "../Responsive/Responsive";
import styles from "./Technologies.module.css";

import nextJSIcon from "@/assets/systems/next.svg";
import reactIcon from "@/assets/systems/react.svg";
import clickupIcon from "@/assets/systems/clickup.svg";
import figmaIcon from "@/assets/systems/figma.svg";
import githubIcon from "@/assets/systems/github.svg";
import claudeIcon from "@/assets/systems/claudecode.svg";
import typescriptIcon from "@/assets/systems/typescript.svg";
import loomIcon from "@/assets/systems/loom.svg";
import antigravityIcon from "@/assets/systems/antigravity.svg";
import supabaseIcon from "@/assets/systems/supabase.svg";
import vscodeIcon from "@/assets/systems/vscode.svg";
import notebooklmIcon from "@/assets/systems/notebooklm.svg";
import SlideUp from "../SlideUp/SlideUp";
import Image from "next/image";

const systems = [
  { name: "NextJS", icon: nextJSIcon },
  { name: "React", icon: reactIcon },
  { name: "Figma", icon: figmaIcon },
  { name: "ClickUp", icon: clickupIcon },
  { name: "GitHub", icon: githubIcon },
  { name: "claudeCode", icon: claudeIcon },
  { name: "Typescript", icon: typescriptIcon },
  { name: "Loom", icon: loomIcon },
  { name: "Supabase", icon: supabaseIcon },
  { name: "Antigravity", icon: antigravityIcon },
  { name: "VS Code", icon: vscodeIcon },
  { name: "NotebookLM", icon: notebooklmIcon },
];

const Technologies = () => {
  return (
    <Responsive className={styles.container}>
      <div className={styles.details}>
        <SlideUp>
          <div className={styles.title}>Tools &amp; Technologies</div>
        </SlideUp>
        <SlideUp>
          <div className={styles.description}>
            The platforms, environments, and utilities I rely on daily to
            design, develop, and deploy scalable digital products.
          </div>
        </SlideUp>
        <Button className={styles.btn} rightIcon={<ArrowRight color="#fff" />}>
          Let&apos;s build together
        </Button>
      </div>
      <div className={styles.grid}>
        {systems.map((system) => (
          <div key={system.name} className={styles.cell}>
            <Image width={24} height={24} src={system.icon} alt={system.name} />
          </div>
        ))}
      </div>
    </Responsive>
  );
};

export default Technologies;
