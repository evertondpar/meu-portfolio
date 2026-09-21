"use client";

import { useEffect, useState } from "react";

interface FadeWordsProps {
  text: string;
  className?: string;
}

export default function FadeWords({ text, className = "" }: FadeWordsProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      const timer = setTimeout(() => setIsLoaded(true), 50);
      return () => clearTimeout(timer);
    }, 1000);
  }, []);

  const words = text.trim().replace(/\s+/g, " ").split(" ");

  return (
    <div className={`flex flex-wrap gap-x-1.5 ${className}`}>
      {words.map((word, index) => (
        <span
          key={index}
          className={`inline-block transition-all duration-700 ease-out ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
          style={{
            transitionDelay: `${index * 75}ms`,
          }}
        >
          {word}
        </span>
      ))}
    </div>
  );
}
