import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: #fff;
  color: #000;
  position: relative;

  @media (max-width: 768px) {
    justify-content: center; /* Centraliza a logo */
  }
`;

export const Logo = styled.img`
  width: 150px;
`;

export const NavMenu = styled.nav`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none; /* Esconde a navegação padrão no mobile */
  }
`;

export const NavItem = styled.a`
  color: #000;
  font-weight: bold;
  text-decoration: none;
  font-size: 1.2rem;

  &:hover {
    color: #ffbf01;
  }
`;

export const MenuButton = styled.button`
  background: none;
  border: none;
  color: #000;
  font-size: 24px;
  cursor: pointer;
  display: none; /* Esconde no desktop */

  @media (max-width: 768px) {
    display: block; /* Exibe o botão no mobile */
    position: absolute;
    left: 20px; /* Alinha o botão à esquerda */
  }
`;

export const MobileNavMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 100%; /* Define o menu logo abaixo do HeaderContainer */
  left: 0;
  right: 0;
  background: #fff;
  padding: 1rem 0;
  z-index: 1000;

  ${NavItem} {
    padding: 1rem;
    width: 100%;
    text-align: center;
    border-bottom: 1px solid #333;

    &:last-child {
      border-bottom: none;
    }
  }
`;

