/* eslint-disable @next/next/no-img-element */
"use client";
import ScrollReveal from "./ScrollReveal";

export interface ProjectModalContentSection {
  title: string;
  text: string | React.ReactNode;
}
export interface ProjectModalContentProps {
  title: string;
  firstSection: ProjectModalContentSection;
  secondSection: ProjectModalContentSection;
  thirdSection: ProjectModalContentSection;
  imageUrl: string;
}
export default function ProjectModalContent({
  title,
  firstSection,
  secondSection,
  thirdSection,
  imageUrl,
}: ProjectModalContentProps) {
  return (
    <div className="flex flex-1 flex-col w-full items-center justify-around">
      <ScrollReveal className="w-full h-auto flex flex-col items-center">
        <div className=" relative flex w-full gap-4 lg:px-8 lg:gap-16 flex flex-col-reverse lg:flex-row">
          <div className=" relative flex flex-col items-start w-full max-w-[600px] text-white ">
            <span className="text-[1rem] font-bold  text-[#2b69fb]">
              SOBRE O PROJETO
            </span>
            <span className="text-[1.5rem] lg:text-[3rem] font-semibold  text-black leading-none mt-4 lg:mt-8">
              {title}
            </span>
            <span className="text-[1.2rem] font-medium  text-zinc-900 mt-4 lg:mt-8">
              {firstSection.title}
            </span>
            <span className="text-[1rem] lg:text-[1.2rem] font-light  text-zinc-900 lg:mt-4">
              {firstSection.text}
            </span>
            <span className="text-[1.2rem] font-medium  text-zinc-900 mt-4 lg:mt-8">
              {secondSection.title}
            </span>
            <span className="text-[1rem] lg:text-[1.2rem] font-light  text-zinc-900 lg:mt-4">
              {secondSection.text}
            </span>
            <span className="text-[1.2rem] font-medium  text-zinc-900 mt-4 lg:mt-8">
              {thirdSection.title}
            </span>
            <span className="text-[1rem] lg:text-[1.2rem] font-light  text-zinc-900 lg:mt-4">
              {thirdSection.text}
            </span>
          </div>
          <div className="w-full max-w-[600px] h-[200px] lg:h-[800px] rounded-[1rem] overflow-hidden">
            <img
              src={imageUrl}
              alt={"title"}
              className="w-full  h-full object-cover"
            />
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
