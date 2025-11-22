// components/AdvancedCustomCursor.tsx
"use client";

import React, { useEffect, useState, useCallback } from "react";

const AdvancedCustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [trail, setTrail] = useState<
    Array<{ x: number; y: number; id: number }>
  >([]);

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Adiciona ponto na trilha
      setTrail((prev) => [
        { x: e.clientX, y: e.clientY, id: Date.now() },
        ...prev.slice(0, 8), // Mantém apenas os últimos 8 pontos
      ]);
    };

    const updateCursorState = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target) {
        const computedStyle = window.getComputedStyle(target);
        const isClickable =
          target.tagName === "A" ||
          target.tagName === "BUTTON" ||
          computedStyle.cursor === "pointer" ||
          target.classList.contains("cursor-pointer") ||
          !!target.closest("a") ||
          !!target.closest("button");

        setIsPointer(isClickable);
      }
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);
    const handleMouseLeave = () => setIsHidden(true);
    const handleMouseEnter = () => setIsHidden(false);

    // Remove pontos antigos da trilha
    const trailCleanup = setInterval(() => {
      setTrail((prev) => prev.filter((point) => Date.now() - point.id < 200));
    }, 100);

    document.addEventListener("mousemove", updateCursorPosition);
    document.addEventListener("mouseover", updateCursorState);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      document.removeEventListener("mousemove", updateCursorPosition);
      document.removeEventListener("mouseover", updateCursorState);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      clearInterval(trailCleanup);
    };
  }, []);

  if (isHidden) return null;

  return (
    <>
      {/* Trilha do cursor */}
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="fixed top-0 left-0 w-2 h-2 bg-blue-400 rounded-full pointer-events-none z-50 transition-all duration-1000 ease-out"
          style={{
            transform: `translate(${point.x - 1}px, ${point.y - 1}px)`,
            opacity: ((trail.length - index) / trail.length) * 0.3,
            scale: 1 - index / trail.length,
          }}
        />
      ))}

      {/* Aura externa */}
      <div
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-50 transition-all duration-300 ease-out ${
          isPointer
            ? "w-16 h-16 border-2 border-yellow-400 bg-yellow-400/20"
            : "w-12 h-12 border border-white/30"
        } ${isClicked ? "scale-75" : "scale-100"}`}
        style={{
          transform: `translate(${position.x - (isPointer ? 32 : 24)}px, ${
            position.y - (isPointer ? 32 : 24)
          }px)`,
        }}
      />

      {/* Cursor principal */}
      <div
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-50 transition-all duration-150 ease-out ${
          isPointer
            ? "w-6 h-6 bg-yellow-400 mix-blend-normal"
            : "w-4 h-4 bg-white mix-blend-difference"
        } ${isClicked ? "scale-50" : "scale-100"}`}
        style={{
          transform: `translate(${position.x - (isPointer ? 12 : 8)}px, ${
            position.y - (isPointer ? 12 : 8)
          }px)`,
        }}
      />

      {/* Efeito de brilho */}
      <div
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-50 animate-pulse"
        style={{
          transform: `translate(${position.x - 1}px, ${position.y - 1}px)`,
          opacity: 0.8,
        }}
      />
    </>
  );
};

export default AdvancedCustomCursor;
