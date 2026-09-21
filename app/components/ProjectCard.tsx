/* eslint-disable @next/next/no-img-element */
export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  technologies: string[];
}

export default function ProjectCard({
  title,
  description,
  imageUrl,
  link,
  technologies,
}: Project) {
  return (
    <div className="relative w-full max-w-[528px] h-[732px] rounded-[2rem] flex items-center justify-center ">
      <div className="absolute top-0 left-0 z-1 w-full h-full rounded-[2rem] bg-[#2b69fb1A] blur-lg"></div>
      <div className="w-full max-w-[500px] h-[700px] z-10 rounded-[2rem] border-[1px] bg-white border-[#2b69fb0f] p-4 flex flex-col">
        <div className="w-full h-[250px] rounded-[1rem] overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            onClick={() => window.open(link, "_blank")}
            className="w-full h-[250px] object-cover hover:scale-125 cursor-pointer transition-transform duration-500 "
          />
        </div>
        <div className="flex flex-col justify-between flex-1 p-4">
          <div className="flex flex-col gap-2">
            <h1 className="text-[1.5rem] font-medium">{title}</h1>
            <span className="text-[1.3rem] font-light">{description}</span>
          </div>
          <div>
            {technologies && technologies.length > 0 && (
              <>
                <h1 className="text-[1.5rem] font-medium">
                  Tecnologias utilizadas:
                </h1>
                <div className="flex flex-wrap gap-2 pt-2">
                  {technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="text-sm px-2.5 py-1 rounded-md text-black bg-[#2b69fb1A] hover:bg-[#2b69fb33] transition-colors duration-300 cursor-pointer"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
