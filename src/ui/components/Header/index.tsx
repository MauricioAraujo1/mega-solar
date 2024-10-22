import { HeaderContainer, Logo, NavMenu, NavItem } from "./styles";
import logo from "../../../assets/images/logo-bold-white.png";

export function Header() {
  return (
    <HeaderContainer>
      <Logo src={logo} alt="Logo da Empresa" />
      <NavMenu>
        <NavItem href="#about">SOBRE</NavItem>
        <NavItem href="#services">SERVIÇOS</NavItem>
        <NavItem href="#simulate">SIMULE SEU SISTEMA</NavItem>
        <NavItem href="#contact">CONTATO</NavItem>
      </NavMenu>
    </HeaderContainer>
  );
}
