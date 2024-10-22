import { Header } from "../../components/Header";
import { AboutSection } from "./styles";

export function About() {
    return (
      <>
        <Header />
        <AboutSection>
          <h1>Quem somos</h1>
          <p>
            Fundada em 1999, a Estação Mega Solar ingressou no seguimento de fotovoltaico em 2020, 
            atuando com instalação e revenda de equipamentos de geração fotovoltaica. Se tornando 
            referência em todo Amazonas pela qualidade no serviço prestado!
          </p>
        </AboutSection>
      </>
    );
  };