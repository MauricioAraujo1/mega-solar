import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 1rem 2rem;
  color: white;
`;

export const Logo = styled.img`
  width: 100px; 
  height: auto;
  margin-left: 55rem;
  padding :-50px ;
`;


export const NavMenu = styled.nav`
  display: flex;
  justify-content: flex-start;  
  align-items: center;
  gap: 2rem;  
`;


export const NavItem = styled.a`
  color: black;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  font-size: 1.2rem;

  &:hover {
    color: #ffbf01;  
  }
`;

/*
Paleta de Cores

Azul: #1365b5
Laranja: #ffbf01
Branco: #ffffff
*/

