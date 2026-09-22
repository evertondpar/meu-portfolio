/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { AnimatePresence, motion } from "framer-motion";

export interface ProjectModalContentSection {
  title: string;
  text: string | React.ReactNode;
}
export interface ProjectModalContentProps {
  title: string;
  firstSection: ProjectModalContentSection;
  secondSection: ProjectModalContentSection;
  thirdSection: ProjectModalContentSection;
  images: string[];
}
export default function ProjectModalContent({
  title,
  firstSection,
  secondSection,
  thirdSection,
  images,
}: ProjectModalContentProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [images.length]);

  useEffect(() => {
    console.log("current ", currentIndex);
  }, [currentIndex]);
  return (
    <div className="flex flex-1 flex-col w-full items-center justify-around">
      <ScrollReveal className="w-full h-auto flex flex-col items-center">
        <div className=" relative flex w-full gap-4 lg:px-8 lg:gap-16 flex flex-col-reverse lg:flex-row">
          <div className=" relative flex flex-col items-start w-full max-w-[600px] text-white ">
            <span className="text-[1rem] lg:text-[0.8rem] font-bold  text-[#2b69fb]">
              SOBRE O PROJETO
            </span>
            <span className="text-[1.5rem] lg:text-[2rem] font-semibold  text-black leading-none mt-4 lg:mt-8">
              {title}
            </span>
            <span className="text-[1.2rem] lg:text-[1rem] font-medium  text-zinc-900 mt-4 lg:mt-8">
              {firstSection.title}
            </span>
            <span className="text-[1rem] lg:text-[0.9rem] font-light  text-zinc-900 lg:mt-4">
              {firstSection.text}
            </span>
            <span className="text-[1.2rem] lg:text-[1rem]  font-medium  text-zinc-900 mt-4 lg:mt-8">
              {secondSection.title}
            </span>
            <span className="text-[1rem] lg:text-[0.9rem] font-light  text-zinc-900 lg:mt-4">
              {secondSection.text}
            </span>
            <span className="text-[1.2rem] lg:text-[1rem] font-medium  text-zinc-900 mt-4 lg:mt-8">
              {thirdSection.title}
            </span>
            <span className="text-[1rem] lg:text-[0.9rem] font-light  text-zinc-900 lg:mt-4">
              {thirdSection.text}
            </span>
          </div>
          <div className="w-full max-w-[400px] h-[200px] lg:h-[600px] rounded-[1rem] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }} // Duração de 1 segundo para o fade
                className="w-full  h-full"
              >
                <img
                  src={images[currentIndex]}
                  alt={"title"}
                  className={`w-full  h-full lg:w-[400px] lg:h-[600px] ${currentIndex === 0 ? " object-cover" : ""}`}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
