import Responsive from "../Responsive/Responsive";
import styles from "./Academy.module.css";
import b1 from "@/assets/benefits/b1.svg";
import b2 from "@/assets/benefits/b2.svg";
import b3 from "@/assets/benefits/b3.svg";
import academia from "@/assets/benefits/academia.png";
import Tag from "../Tag/Tag";
import Button from "../Button/Button";
import ArrowRight from "@/assets/SvgComponents/ArrowRight";
import SlideUp from "../SlideUp/SlideUp";
import Image from "next/image";

const benefits = [
  {
    icon: b1,
    title: "Courses",
    description:
      "Learn how blockchain and smart contracts apply to real business and asset management.",
  },
  {
    icon: b2,
    title: "Live Coaching",
    description: "Get hands-on support as you build and grow.",
  },
  {
    icon: b3,
    title: "Streaming for Business",
    description:
      "Learn how to show up, build an audience, and turn attention into revenue.",
  },
];

const Academy = () => {
  return (
    <Responsive className={styles.container}>
      <div className={styles.overview}>
        <div className={styles.imageContainer}>
          <Image src={academia} alt="" />
        </div>
        <div className={styles.details}>
          <Tag text="Academy" />
          <div className={styles.titleContainer}>
            <SlideUp>
              <div className={styles.title}>Bluewater Academy</div>
            </SlideUp>
            <SlideUp>
              <div className={styles.description}>
                Having the system is one thing. Knowing how <br /> to use it is
                what makes it powerful.
              </div>
            </SlideUp>
          </div>
          <Button
            style={{ minHeight: "44px", minWidth: "150px" }}
            rightIcon={<ArrowRight />}
          >
            Join Academy
          </Button>
        </div>
      </div>
      <div className={styles.benefits}>
        {benefits.map(({ icon, title, description }, idx) => (
          <div key={idx} className={styles.card}>
            <SlideUp>
              <div className={styles.iconContainer}>
                <Image src={icon} alt="" />
              </div>

              <div className={styles.title}>{title}</div>

              <div className={styles.description}>{description}</div>
            </SlideUp>
          </div>
        ))}
      </div>
    </Responsive>
  );
};

export default Academy;
