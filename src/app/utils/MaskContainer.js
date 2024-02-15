import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const MaskContainer = ({
  children,
  revealText,
  size = 10,
  revealSize = 700,
  className,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });
  const containerRef = useRef(null);

  const updateMousePosition = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  useEffect(() => {
    const container = containerRef.current;

    container.addEventListener("mousemove", updateMousePosition);

    return () => {
      container.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  let maskSize = isHovered ? revealSize : size;

  return (
    <motion.div
      ref={containerRef}
      className={`h-screen relative w-screen border-none  ${className}`}
      animate={{
        backgroundColor: isHovered ? "transparent" : "rgba(0, 0, 0, 1)",
      }}
    >
      <motion.div
        className="w-full h-full flex items-center justify-center text-6xl absolute bg-transparent text-white [mask-image:url(/mask.svg)] [mask-size:40px] [mask-repeat:no-repeat]"
        animate={{
          WebkitMaskPosition: `${mousePosition.x - maskSize / 2}px ${
            mousePosition.y - maskSize / 2
          }px`,
          WebkitMaskSize: `${maskSize}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
      >
        <div className="absolute inset-0 bg-black h-full w-full z-0 opacity-50 invert-0   " />
        <div
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
          className="max-w-4xl mx-auto text-center text-white  text-4xl font-bold relative z-20"
        >
          {children}
        </div>
      </motion.div>
      {isHovered ? (
        ""
      ) : (
        <div className="w-full h-full flex items-center justify-center text-white">
          {revealText}
        </div>
      )}
    </motion.div>
  );
};

export default MaskContainer;
