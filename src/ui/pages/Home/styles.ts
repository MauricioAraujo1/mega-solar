import styled from 'styled-components';

export const WhatsAppButton = styled.a`
  position: fixed;
  right: 20px; 
  bottom: 20px; 
  font-size: 5rem; 
  color: #25d366; 
  z-index: 1000; 

  &:hover {
    color: #128c7e; 
  }

  &:active {
    color: #075e54; 
  }
`;

export const StyledButton = styled.button`
  background-color: transparent; 
  color: white; 
  border: 2px solid #ffbf01; 
  border-radius: 30px; 
  padding: 0.75rem 2rem; 
  margin-top: 20px;
  font-size: 1.2rem; 
  font-weight: bold;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5); 
  cursor: pointer; 
  transition: background-color 0.3s ease, color 0.3s ease; 

  &:hover {
    background-color: #ffbf01; 
    color: #fff; 
  }

  &:focus {
    outline: none; 
    box-shadow: 0 0 10px rgba(255, 191, 1, 0.5); 
  }
`;

export const VideoSection = styled.section`
  display: flex;
  justify-content: center; 
  align-items: center; 
  padding: 0; 
  background-color: #f8f8f8; 
`;

export const HeroSection = styled.section`
  background: url('/background-hero.jpeg') no-repeat center center/cover;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;


  @media (max-width: 1024px) {
    background: url('/background-hero-mobile.jpeg') no-repeat center center/cover; 
  }


  @media (max-width: 768px) {
    background: url('/background-hero-mobile.jpeg') no-repeat center center/cover; 
  }
`;

export const HeroText = styled.div`
  color: white;
  font-weight: bold;
  text-align: center;

  h1 {
    font-size: 3rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7); 
  }

  p {
    font-size: 1.5rem;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7); 
  }
`;

export const AboutSection = styled.section`
  display: flex;
  align-items: center; 
  justify-content: space-between; 
  padding: 2rem; 
  background-color: #f8f8f8; 

  /* Responsividade */
  @media (max-width: 768px) {
    flex-direction: column; 
    text-align: center; 
  }
`;

export const AboutText = styled.div`
  flex: 1; 
  padding: 1rem; 
  text-align: center; 
  display: flex;
  flex-direction: column; 
  justify-content: center; 
  
  h2 {
    margin-bottom: 1rem; 
  }

  p {
    line-height: 1.5; 
  }
`;

export const AboutImage = styled.img`
  flex: 1; 
  max-width: 25%; 
  height: auto; 
`;

export const MissionVisionValues = styled.div`
  background-color: #f0f0f0; 
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h3 {
    margin: 1rem 0;
    text-align: center;
  }

  .values-container {
    display: flex;
    justify-content: space-around;
    width: 100%;
    max-width: 1200px;
    margin-top: 1rem;

    /* Configuração para mobile */
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }
  }

  .value-box {
    background: transparent; 
    border: 2px solid #ccc;
    border-radius: 8px;
    padding: 1.5rem;
    flex: 1;
    margin: 0 1rem;
    text-align: center;
    max-width: 300px;
    position: relative;

    p {
      font-size: 0.9rem; /* Fonte menor para textos mais longos */
      line-height: 1.4; /* Maior espaçamento */
    }

    &:nth-child(1) {
      border-top: 8px solid #ffbf01; 
    }

    &:nth-child(2) {
      border-bottom: 8px solid #ffbf01; 
    }

    &:nth-child(3) {
      border-top: 8px solid #ffbf01; 
    }

    /* Ajustes no mobile */
    @media (max-width: 768px) {
      max-width: 90%; /* Largura máxima */
      margin: 1rem 0;
    }
  }
`;

export const ServicesSection = styled.div`
  background-color: #ffffff; 
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h2 {
    margin-bottom: 2rem;
    text-align: center;
  }

  .services-container {
    display: flex;
    justify-content: space-around;
    width: 100%;
    max-width: 1200px;
    margin-top: 1rem;

    /* Configuração para mobile */
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }
  }

  .service-box {
    background: transparent; 
    border: 2px solid #ccc;
    border-radius: 8px;
    padding: 1.5rem;
    flex: 1;
    margin: 0 1rem;
    text-align: center;
    max-width: 300px;
    position: relative; 
    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
      margin: 1rem 0;
    }

    p {
      font-size: 0.9rem;
      line-height: 1.5;
    }

    .icon {
      color: #ffbf01;
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }

    /* Ajustes no mobile */
    @media (max-width: 768px) {
      max-width: 90%;
      margin: 1rem 0;
    }
  }
`;

export const ContactSection = styled.div`
  background-color: #f0f0f0; 
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h2 {
    margin-bottom: 2rem;
    font-size: 2.5rem;
    color: #333;
  }

  .contact-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 600px; 
    width: 100%;
    margin: 0 auto; 
  }

  .contact-item {
    display: flex;
    align-items: center;
    margin-left: 6rem;
    margin-bottom: 1.5rem;
    width: 100%; 
    text-align: left; 

    .icon {
      color: #ffbf01;
      font-size: 2rem;
      margin-right: 1rem;
    }

    h3 {
      margin: 0;
      font-size: 1.5rem;
    }

    p {
      margin: 0.5rem 0 0;
      font-size: 1rem;
      line-height: 1.5;
    }
  }
`;

export const FooterSection = styled.footer`
  background-color: #ffbf01; 
  padding: 2rem 0; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #333; 
  
  img {
    width: 150px; 
    margin-bottom: 1rem; 
  }

  p {
    font-size: 1rem;
    margin: 0;
  }
`;
