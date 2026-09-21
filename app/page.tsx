/* eslint-disable react/jsx-no-comment-textnodes */
"use client";
import Image from "next/image";

import { useEffect, useState } from "react";
import Typewriter from "./components/Typewriter";
import ProjectCard from "./components/ProjectCard";
import FadeWords from "./components/FadeWords";
import ContactItem from "./components/ContactItem";
import ScrollReveal from "./components/ScrollReveal";
import Modal from "./components/Modal";
import ProjectModalContent from "./components/ProjectModalContent";
import MelphisModalContent from "./components/MelphisModalContent";
import MelphisTvModalContent from "./components/MelphisTvModalContent";
import SantsModalContent from "./components/SantsaModalContent";

const TECH_IMAGES = [
  "react-native.png",
  "reactjs.png",
  "mysql-logo.png",
  "apis.png",
  "javascript.png",
  "typescript.png",
  "css3.png",
  "html-5.png",
  "git-50.png",
  "docker.png",
  "chatgpt.png",
  "claude.png",
  "gemini.png",
];

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isSantsModalOpen, setIsSantsModalOpen] = useState(false);
  const [isMelphisFmModalOpen, setIsMelphisFmSantsModalOpen] = useState(false);
  const [isMelphisTvModalOpen, setIsMelphisTvSantsModalOpen] = useState(false);
  useEffect(() => {
    // Pequeno atraso para disparar a animação logo após o componente carregar
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="flex flex-col flex-1 items-center bg-zinc-50 font-sans dark:bg-black">
      <div className="w-full flex flex-col bg-[#0a001b] relative border-t-[8px] border-t-blue-500">
        <div className="absolute top-[-10%] left-[20%] w-full lg:w-[500px] lg:h-[300px] bg-purple-600/15 rounded-full blur-[120px] pointer-events-none" />
        //INICIO SEÇÃO 1
        <div className="flex flex-1 flex-col-reverse lg:flex-row items-center justify-around pt-25 pb-35">
          <div className=" lg:items-start relative flex flex-col items-center w-full px-8 lg:px-0 max-w-2xl text-white">
            <Typewriter
              text="Bem vindo."
              className="text-[3.5rem] lg:text-[4.5rem] font-extralight lg:ml-[-11px] text-[#2b69fb]"
              speed={60}
            />
            <FadeWords
              text="Sou Full Stack Developer | Web, Mobile e APIs com 3+ anos de experiência profissional. Atuo no desenvolvimento, evolução, manutenção e integração de sistemas, desde as regras de negócio até o produto final, sempre focando em código limpo, escalável e soluções alinhadas às necessidades do negócio."
              className="text-[18px] lg:text-[20px] font-light text-white"
            />
          </div>
          <div
            className={`transition-all duration-[2000ms] ease-out ${
              isLoaded
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-4 scale-95"
            }`}
          >
            <Image
              src="/hero.webp" // Caminho relativo à pasta public
              alt="Foto de perfil" // Descrição obrigatória para acessibilidade
              width={400} // Largura em pixels
              height={400} // Altura em pixels
              className="rounded-full shadow-lg object-cover"
              priority
            />
          </div>
        </div>
        //FIM SEÇÃO 1 //INICIO SEÇÃO 2
        <div className="w-full flex flex-col items-center overflow-hidden">
          <div className="w-[600vw] lg:w-[250vw] lg:h-auto bg-white rounded-t-[100%] rounded-b-[100%] flex flex-col items-center py-28">
            <ScrollReveal className="w-screen h-auto flex flex-col items-center d-none">
              <Modal
                isOpen={isMelphisFmModalOpen}
                onClose={() => setIsMelphisFmSantsModalOpen(false)}
              >
                <MelphisModalContent />
              </Modal>
              <Modal
                isOpen={isMelphisTvModalOpen}
                onClose={() => setIsMelphisTvSantsModalOpen(false)}
              >
                <MelphisTvModalContent />
              </Modal>
              <Modal
                isOpen={isSantsModalOpen}
                onClose={() => setIsSantsModalOpen(false)}
              >
                <SantsModalContent />
              </Modal>
              <span className="text-[3.5rem] lg:text-[3rem] font-medium text-[#2b69fb]">
                Meu trabalho
              </span>
              <span className="text-[1.5rem] lg:text-[1rem] font-sans text-gray-600">
                Projetos nos quais já atuei.
              </span>
              <div className="w-screen lg:w-auto flex flex-col items-center lg:flex-row gap-8 mt-16 mb-20">
                <ProjectCard
                  title="Sants SCD (App Financeiro)"
                  description="Solução mobile para transações financeiras. Focada em operações e funcionalidades Pix, além de pagamentos de boletos e transferências via TED."
                  imageUrl="./santsapp.jpg"
                  onCLick={() => setIsSantsModalOpen(true)}
                  technologies={[
                    "React Native",
                    "TypeScript",
                    "Node.js",
                    "Nest.js",
                    "MySQL",
                  ]}
                />
                <ProjectCard
                  title="Melphis.fm (Rádio e Vídeo)"
                  description="Solução mobile para streaming de rádio e vídeo, disponível para Android e iOS, com funcionalidades de seleção e gerenciamento de estações favoritas, além de participação em promoções e outras interações dentro da plataforma."
                  imageUrl="./melphis.jpg"
                  onCLick={() => setIsMelphisFmSantsModalOpen(true)}
                  technologies={[
                    "React Native",
                    "TypeScript",
                    "Node.js",
                    "Nest.js",
                    "MySQL",
                  ]}
                />
                <ProjectCard
                  title="Melphis TV (Streaming de Vídeo)"
                  description="Solução mobile para streaming de vídeo. Transmite o canal de tv da emissora Melphis, disponível para Android e iOS."
                  imageUrl="./mtv.jpg"
                  onCLick={() => setIsMelphisTvSantsModalOpen(true)}
                  technologies={[
                    "React Native",
                    "TypeScript",
                    "Node.js",
                    "Nest.js",
                    "MySQL",
                  ]}
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
        //FIM SEÇÃO 2 //INICIO SEÇÃO 3
        <div className="flex flex-1 flex-col w-full items-center justify-around lg:p-48 lg:px-0 lg:pt-24">
          <ScrollReveal className="w-full h-auto flex flex-col items-center">
            <div className=" relative flex flex-col items-center w-full px-8 lg:px-32 text-white ">
              <Typewriter
                text="Resumo Profissional"
                className="text-[3.5rem] lg:text-[4.5rem] font-extralight  text-[#2b69fb] "
                speed={60}
              />
              <FadeWords
                text="Em minha experiência profissional, atuei no desenvolvimento de sistemas web e mobile. Na Sants SCD, participei desde a definição das regras de negócio até a construção do produto, com atuação no desenvolvimento da API e integração com sistemas externos, como a Lydians, para realização de transações bancárias. Também desenvolvi interfaces e fluxos do app, incluindo pagamentos via Pix, boleto, TED e onboarding de usuários."
                className="text-[18px] lg:text-[20px] font-light text-white"
              />
            </div>
          </ScrollReveal>
        </div>
        //FIM SEÇÃO 3 //INICIO SEÇÃO 4
        <div className="flex flex-1 flex-col w-full items-center justify-around lg:pb-48">
          <ScrollReveal className="w-full h-auto flex flex-col items-center">
            <div className=" relative flex flex-col items-center w-full px-8 lg:px-32 text-white">
              <Typewriter
                text="Tecnologias e Ferramentas"
                className="text-[3.5rem] lg:text-[4.5rem] font-extralight  text-[#2b69fb] "
                speed={60}
              />
              <div className="flex flex-wrap gap-4 mt-8 justify-center">
                {TECH_IMAGES.map((tech, index) => (
                  <div key={index} className="bg-white px-4 py-2 rounded-md">
                    <Image
                      src={`/${tech}`}
                      alt={`Tecnologia ${index + 1}`}
                      width={40}
                      height={40}
                    />
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
        //FIM SEÇÃO 4 //INICIO SEÇÃO 5
        <ScrollReveal className="w-full h-auto flex flex-col items-center">
          <div className="flex flex-1 flex-col gap-8 lg:gap-32 lg:flex-row items-center justify-around lg:pb-16">
            <div className=" lg:items-start relative flex flex-col items-center w-full px-8 lg:px-0 max-w-2xl text-white">
              <Typewriter
                text="Disponível!"
                className="text-[3.5rem] lg:text-[4.5rem] font-extralight lg:ml-[-11px] text-[#2b69fb]"
                speed={60}
              />
              <FadeWords
                text="Vamos construir algo incrível juntos! Se você está procurando um desenvolvedor Full Stack para transformar suas ideias em realidade, estou pronto para colaborar. Entre em contato e vamos discutir como posso contribuir para o sucesso do seu projeto."
                className="text-[18px] lg:text-[20px] font-light text-white"
              />
            </div>
            <div
              className={`transition-all duration-[2000ms] ease-out ${
                isLoaded
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-4 scale-95"
              } flex flex-col items-start gap-4`}
            >
              <span className="text-[1.5rem] font-extralight text-[#2b69fb]">
                Meus contatos
              </span>
              <ContactItem
                link={
                  <a
                    href={"mailto:evertonpaula03@gmail.com"}
                    className=" text-[18px] lg:text-[20px] cursor-pointer text-white hover:text-blue-500 font-light transition"
                  >
                    evertonpaula03@gmail.com
                  </a>
                }
                icon="email"
              />
              <ContactItem
                link={
                  <a
                    href={"tel:+5535998530798"}
                    className=" text-[18px] lg:text-[20px] cursor-pointer text-white hover:text-blue-500 font-light transition"
                  >
                    +55 (35) 99853-0798
                  </a>
                }
                icon="phone"
              />
              <ContactItem
                link={
                  <a
                    href={"https://linkedin.com/in/evertondpar"}
                    className=" text-[18px] lg:text-[20px] cursor-pointer text-white hover:text-blue-500 font-light transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    linkedin.com/in/evertondpar
                  </a>
                }
                icon="linkedin"
              />
              <ContactItem
                link={
                  <a
                    href={"https://github.com/evertondpar"}
                    className=" text-[18px] lg:text-[20px] cursor-pointer text-white hover:text-blue-500 font-light transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github.com/evertondpar
                  </a>
                }
                icon="github"
              />
            </div>
          </div>
          <div className="flex w-full h-24 justify-end items-center pr-16">
            <Typewriter
              text="©2026 Everton Portfólio"
              className="text-[1rem] font-extralight  text-[#2b69fb]"
              speed={60}
            />
          </div>
        </ScrollReveal>
        //FIM SEÇÃO 5
      </div>
    </div>
  );
}
