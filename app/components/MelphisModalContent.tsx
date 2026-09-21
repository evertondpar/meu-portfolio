import ProjectModalContent from "./ProjectModalContent";

export default function MelphisModalContent() {
  return (
    <>
      <ProjectModalContent
        title="Streaming de rádio e vídeo na palma da mão."
        firstSection={{
          title:
            "Experiência de streaming pensada para ser rápida, intuitiva e sem fricção.",
          text: "O Melphis.fm reúne emissoras de diferentes cidades em um único player, com sintonização rápida e favoritos — feito para quem quer encontrar uma rádio e apertar play.",
        }}
        secondSection={{
          title: "Minha atuação",
          text: "Atuei no desenvolvimento do aplicativo mobile, desde o alinhamento dos requisitos iniciais até a entrega final. Fui responsável pelo desenvolvimento das interfaces e fluxos de usuário a partir dos protótipos definidos, além da integração com a API de streaming e implementação das funcionalidades da plataforma.",
        }}
        thirdSection={{
          title: "Resultado",
          text: (
            <>
              Hoje, o Melphis.fm alcança{" "}
              <span className="font-bold text-[#2b69fb]">
                24 milhões de acessos por mês
              </span>{" "}
              , levando a experiência de rádio digital a uma audiência de grande
              escala.
            </>
          ),
        }}
        imageUrl="/melphisinteira.svg"
      />
    </>
  );
}
