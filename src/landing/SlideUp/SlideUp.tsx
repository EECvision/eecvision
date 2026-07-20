import React, { useEffect, useState } from "react";
import IntersectionObserver from "../IntersectionObserver/IntersectionObserver";
import clases from "./SlideUp.module.css";

const SlideUp = ({
  children,
  threshold,
  width,
  animationDelay,
  className,
  wrapperClassName,
  wrapperStyle,
  onIntersecting,
}: {
  children: React.ReactNode;
  threshold?: number;
  width?: string;
  animationDelay?: string;
  className?: string;
  wrapperClassName?: string;
  wrapperStyle?: React.CSSProperties;
  onIntersecting?: (state: boolean) => void;
}) => {
  const [intersecting, setIntersecting] = useState(false);

  useEffect(() => {
    if (onIntersecting) {
      onIntersecting(intersecting);
    }
  }, [intersecting, onIntersecting]);

  return (
    <React.Fragment>
      <IntersectionObserver
        width={width}
        threshold={threshold}
        className={wrapperClassName}
        style={wrapperStyle}
        onIntersecting={setIntersecting}
      >
        <div
          className={`${onIntersecting ? "" : clases.container} ${
            intersecting && !onIntersecting ? clases.intersecting : ""
          } ${className ? className : ""}`.trim()}
          style={{ transitionDelay: animationDelay }}
        >
          {children}
        </div>
      </IntersectionObserver>
    </React.Fragment>
  );
};

export default SlideUp;
