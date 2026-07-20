import React, { useState, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import styles from "./ProjectCarousel.module.css";

const ProjectCarousel = ({
  images,
  title,
}: {
  images: StaticImageData[];
  title: string;
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    if (!carouselRef.current || isDown.current) return;
    const currentScrollLeft = e.currentTarget.scrollLeft;
    const clientWidth = e.currentTarget.clientWidth;
    const newIndex = Math.round(currentScrollLeft / clientWidth);
    if (newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  };

  const scrollTo = (index: number) => {
    if (!carouselRef.current) return;
    setActiveIndex(index);
    carouselRef.current.scrollTo({
      left: index * carouselRef.current.clientWidth,
      behavior: "smooth",
    });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    isDown.current = true;
    if (!carouselRef.current) return;
    startX.current = e.pageX - carouselRef.current.offsetLeft;
    scrollLeft.current = carouselRef.current.scrollLeft;

    // Disable native snap and smooth behaviors while manually dragging
    carouselRef.current.style.cursor = "grabbing";
    carouselRef.current.style.scrollSnapType = "none";
    carouselRef.current.style.scrollBehavior = "auto";
  };

  const handleMouseUpOrLeave = () => {
    if (!isDown.current) return;
    isDown.current = false;
    if (carouselRef.current) {
      carouselRef.current.style.cursor = "grab";
      carouselRef.current.style.scrollSnapType = "x mandatory";
      carouselRef.current.style.scrollBehavior = "smooth";

      const currentScrollLeft = carouselRef.current.scrollLeft;
      const clientWidth = carouselRef.current.clientWidth;
      const closestIndex = Math.round(currentScrollLeft / clientWidth);

      // Update state and explicitly snap to the resolved index
      scrollTo(closestIndex);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown.current || !carouselRef.current) return;
    e.preventDefault(); // Prevents text selection / drag highlighting
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX.current) * 1; // 1:1 pixel mapping for predictable drag
    carouselRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <div className={styles.carouselContainer}>
      <div
        className={styles.carousel}
        ref={carouselRef}
        onScroll={handleScroll}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseUpOrLeave}
        onMouseUp={handleMouseUpOrLeave}
        onMouseMove={handleMouseMove}
        style={{ cursor: "grab" }}
      >
        {images.map((img, i) => (
          <div key={i} className={styles.carouselItem}>
            <Image
              src={img}
              alt={`${title} preview ${i + 1}`}
              draggable={false}
            />
          </div>
        ))}
      </div>

      {images.length > 1 && (
        <div className={styles.dotsContainer}>
          {images.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === activeIndex ? styles.activeDot : ""}`}
              onClick={() => scrollTo(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectCarousel;
