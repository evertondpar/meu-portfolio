import ProjectModalContent from "./ProjectModalContent";

export default function SantsModalContent() {
  return (
    <>
      <ProjectModalContent
        title="Soluções financeiras e transações na palma da mão"
        firstSection={{
          title: "Visão Geral",
          text: "Ecossistema mobile para operações financeiras, focado em alta segurança, velocidade e ausência de atritos nas funcionalidades de Pix, pagamentos de boleto e transferências TED. ",
        }}
        secondSection={{
          title: "Minha atuação",
          text: "Atuei de ponta a ponta no desenvolvimento da solução, desde a concepção arquitetural e alinhamento das regras de negócio até a entrega final. Fui responsável por construir a API de backend, integrar sistemas externos cruciais, além de desenvolver os fluxos de interface do usuário, incluindo o módulo de pagamentos Pix, boletos e o fluxo seguro de onboarding.",
        }}
        thirdSection={{
          title: "Resultado",
          text: "Uma arquitetura altamente escalável e integrada a core bancários legados, garantindo confiabilidade, conformidade regulatória e uma experiência de usuário fluida em alta escala.",
        }}
        imageUrl="/melphisinteira.svg"
      />
    </>
  );
}
