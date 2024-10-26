import { useRef } from "react";
import { Header } from "../../components/Header";
import { Form } from "../../components/Form";
import { HeroSection, HeroText, VideoSection, AboutSection, AboutText, AboutImage, MissionVisionValues, ServicesSection, ContactSection, FooterSection, StyledButton, WhatsAppButton } from "./styles";

import Logo from '../../../assets/images/logo_black.png'
import { FaInstagram, FaWhatsapp, FaCheckCircle, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa'

export function Home() {
  const formRef =  useRef<HTMLDivElement | null>(null); 

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

    return (
      <>
        <Header />
        <HeroSection>
          <HeroText>
            <h1>Transformando Manaus com energia solar</h1>
            <p>Simule seu gerador de Energia Solar agora mesmo!</p>
            <StyledButton onClick={scrollToForm}>Faça uma simulação</StyledButton> 
          </HeroText>
        </HeroSection>
              {/* Seção "Sobre nós" */}
      <AboutSection id="about">
        <AboutText>
          <h2>Sobre nós</h2>
          <br />
          <br />
          <p>
            A Estação Mega Solar é especialista em projetos de micro e minigeração de energia fotovoltaica, convertendo luz solar em energia elétrica. Atuamos nos segmentos residencial, comercial, industrial e agrícola, oferecendo soluções integradas com os melhores fabricantes do mercado.
          </p>
                {/* Ícones de redes sociais */}
          <div style={{ display: 'flex', marginTop: '1rem' }}>
            <a href="https://www.instagram.com/estacaomega.energiasolar/?igsh=MWI1NmZjY2s2eDZhZw%3D%3D" target="_blank" rel="noopener noreferrer" style={{ margin: '0 1rem' }}>
              <FaInstagram size={30} color="#C13584" />
            </a>
            <a href="https://wa.me/5592981488012" target="_blank" rel="noopener noreferrer" style={{ margin: '0 1rem' }}>
              <FaWhatsapp size={30} color="#25D366" />
            </a>
          </div>
        </AboutText>
        <AboutImage src="/background-hero-2.jpeg" alt="Imagem representativa da empresa" />
      </AboutSection>

            {/* Seção de Missão, Visão e Valores */}
      <MissionVisionValues>
        <div className="values-container">
          <div className="value-box">
            <h3>Nossa Missão</h3>
            <p>
              Popularizar o acesso à energia renovável e sustentável, oferecendo soluções personalizadas e eficientes de microgeração solar fotovoltaica que beneficiem empresas, residências e propriedades rurais.
            </p>
          </div>
          <div className="value-box">
            <h3>Nossa Visão</h3>
            <p>
              Ser a principal referência nacional em geração distribuída com energia solar, destacando-se por integrar soluções inovadoras, design eficiente e projetos diferenciados. Nosso foco é entregar resultados com segurança, qualidade e gestão estratégica, sempre alinhados às necessidades específicas dos nossos clientes.
            </p>
          </div>
          <div className="value-box">
            <h3>Nossos Valores</h3>
            <p>
              Ética e Transparência: Compromisso em todas as nossas relações.<br />
              Qualidade e Segurança: Entregamos projetos que garantem alto desempenho e segurança.<br />
              Sustentabilidade: Promovemos o desenvolvimento sustentável através do uso de energias renováveis.<br />
              Inovação Tecnológica: Buscamos continuamente integrar soluções avançadas em nossos projetos.
            </p>
          </div>
        </div>
      </MissionVisionValues>
      <VideoSection>
          <video 
            src="/mega-solar-video.mp4" 
            autoPlay 
            loop 
            muted  
            style={{ width: '100%', height: 'auto' }} 
          >
            Seu navegador não suporta a tag de vídeo.
          </video>
        </VideoSection>
            {/* Nova Seção: Nossos Serviços */}
      <ServicesSection id="services">
        <h2>Nossos Serviços</h2>
        <div className="services-container">
          <div className="service-box">
            <FaCheckCircle className="icon" />
            <h3>Projetos para Empresas</h3>
            <p>
              Desenvolvemos sistemas personalizados para otimizar o retorno sobre o investimento (payback),
              garantindo máxima eficiência e economia energética para o seu negócio.
            </p>
          </div>
          <div className="service-box">
            <FaCheckCircle className="icon" />
            <h3>Projetos para Propriedades Rurais</h3>
            <p>
              Transformamos propriedades rurais em usinas solares fotovoltaicas, ajudando o agronegócio
              a reduzir custos operacionais e contribuir para um futuro mais sustentável.
            </p>
          </div>
          <div className="service-box">
            <FaCheckCircle className="icon" />
            <h3>Projetos para Residências</h3>
            <p>
              Cuidamos de todas as etapas, desde o dimensionamento do sistema até a homologação e instalação completa,
              para que você aproveite os benefícios da energia solar sem complicações.
            </p>
          </div>
        </div>
      </ServicesSection>

      {/* Seção Entre em Contato */}
      <ContactSection id="contact">
        <h2>Entre em contato</h2>
        <div className="contact-container">
          <div className="contact-item">
            <FaMapMarkerAlt className="icon" />
            <div>
              <h3>Localização</h3>
              <p>R. Macatuba, 352 - Cidade de Deus<br />
              Manaus - AM, 69099-266</p>
            </div>
          </div>
          <div className="contact-item">
            <FaEnvelope className="icon" />
            <div>
              <h3>Email</h3>
              <p>estacaomegasolar@gmail.com</p>
            </div>
          </div>
          <div className="contact-item">
            <FaPhoneAlt className="icon" />
            <div>
              <h3>Telefone</h3>
              <p>(92) 98148-8012 / 99493-2311</p>
            </div>
          </div>
        </div>
      </ContactSection>

      <div id="simulate" ref={formRef}> 
        <Form />
        <FooterSection>
          <img src={Logo} alt="Inova Energia Solar Logo" />
          <p>Copyright © Energia Mega Solar 2024 | Todos os direitos reservados.</p>
        </FooterSection>
      </div>
            {/* Botão flutuante do WhatsApp */}
            <WhatsAppButton href="https://wa.me/5592981488012" target="_blank" aria-label="Contato WhatsApp">
        <FaWhatsapp />
      </WhatsAppButton>
      </>
    );
  };
  