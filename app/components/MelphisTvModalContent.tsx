import ProjectModalContent from "./ProjectModalContent";

export default function MelphisTvModalContent() {
  return (
    <>
      <ProjectModalContent
        title="Streaming de TV na palma da mão."
        firstSection={{
          title:
            "Experiência de streaming pensada para ser fuida, clara e sem distrações.",
          text: "O Melphis Tv reúne canais e conteúdos em um único player, com navegação simples e foco total na experiência de assistir.",
        }}
        secondSection={{
          title: "Minha atuação",
          text: "Atuei no desenvolvimento do aplicativo mobile, desde o alinhamento dos requisitos iniciais até a entrega final. Fui responsável pelo desenvolvimento da interface de usuário a partir dos protótipos definidos, além da integração com a API de streaming.",
        }}
        thirdSection={{
          title: "Resultado",
          text: (
            <>
              Hoje, o Melphis.fm alcança{" "}
              <span className="font-bold text-[#2b69fb]">
                5 milhões de acessos mensais
              </span>{" "}
              , levando a experiência de streaming da Melphis a novos públicos e
              telas.
            </>
          ),
        }}
        images={["/melphistvinteira.svg"]}
      />
    </>
  );
}
