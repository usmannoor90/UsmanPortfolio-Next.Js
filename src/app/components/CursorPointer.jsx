"use client";
import React, { useState, useEffect } from "react";

function CursorPointer() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const [isPointer, setIsPointer] = useState(false);

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });

    const target = e.target;

    setIsPointer(
      window.getComputedStyle(target).getPropertyValue("cursor") === "pointer"
    );
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []); // The empty dependency array ensures that this effect runs only once on mount.

  const flareSize = isPointer ? 0 : 1000;

  const cursorStyle = isPointer ? { left: "-100px", top: "-100px" } : {};

  return (
    <div
      className={`fixed rounded-[50%] mix-blend-screen pointer-events-none -translate-x-1/2 -translate-y-1/2 backdrop-filter backdrop-blur-[1px]  [transition:all_0.2s_linear]   ${
        isPointer ? "!opacity-0 [transition:all_0.2s_linear]" : ""
      }`}
      style={{
        ...cursorStyle,
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${flareSize}px`,
        height: `${flareSize}px`,

        background:
          "radial-gradient(600px circle at 500px 500px,rgba(29, 78, 216, 0.2),transparent 70%)",
      }}
    ></div>
  );
}

export default CursorPointer;
