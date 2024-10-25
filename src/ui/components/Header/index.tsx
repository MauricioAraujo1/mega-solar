import { useState } from 'react';
import { HeaderContainer, Logo, NavMenu, NavItem, MenuButton, MobileNavMenu } from "./styles";
import logo from "../../../assets/images/logo-bold-white.png";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderContainer>
      <Logo src={logo} alt="Logo da Empresa" />
      <MenuButton onClick={toggleMenu}>☰</MenuButton>
      <NavMenu>
        <NavItem href="#about">SOBRE</NavItem>
        <NavItem href="#services">SERVIÇOS</NavItem>
        <NavItem href="#simulate">SIMULE SEU SISTEMA</NavItem>
        <NavItem href="#contact">CONTATO</NavItem>
      </NavMenu>
      {isMenuOpen && (
        <MobileNavMenu>
          <NavItem href="#about" onClick={toggleMenu}>SOBRE</NavItem>
          <NavItem href="#services" onClick={toggleMenu}>SERVIÇOS</NavItem>
          <NavItem href="#simulate" onClick={toggleMenu}>SIMULE SEU SISTEMA</NavItem>
          <NavItem href="#contact" onClick={toggleMenu}>CONTATO</NavItem>
        </MobileNavMenu>
      )}
    </HeaderContainer>
  );
}
