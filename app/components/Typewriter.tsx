"use client";
import { useState, useEffect } from "react";

interface TypewriterProps {
  text: string;
  speed?: number; // Velocidade em milissegundos por letra
  className?: string;
}

export default function Typewriter({
  text,
  speed = 100,
  className = "",
}: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex(index + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  return (
    <span className={className}>
      {displayedText}
      {/* Opcional: um cursor a piscar no final */}
      {/* <span className="animate-pulse">|</span> */}
    </span>
  );
}
