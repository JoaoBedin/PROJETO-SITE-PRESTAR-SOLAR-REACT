import styled from "styled-components";

export const MobileMenu = styled.div`

  position: fixed;
  top: 0;
  right: 0;
  width: 60%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.88);
  flex-direction: column;
  align-items: center;
  font-size: 1.8rem;
  z-index: 5;
   display: ${({ open }) => (open ? "flex" : "none")};   // <- Aqui!
  @media (min-width: 1025px) {
    display: none;  // Esconde no desktop
}
`
export const NavLinksMobile = styled.ul` display: flex;
  flex-direction: column;
  text-align: center;
  gap: 1rem;
  width: 80%;
  list-style: none;
  padding: 0;

  li{  border-bottom: 1px solid #787272;
  padding-bottom: 1rem;
  
  }

  a{  font-weight: 600;
  cursor: pointer;
  color: #fdfdfd;
  transition: color 0.3s ease, opacity 0.3s ease;
   text-decoration: none;  /* PARA REMOVER A LINHA DO LINK ("a")*/ }

`

export const HamburgerButton = styled.button`
 font-size: 24px;
  background: none;
  border: none;
  color: #000000;
  cursor: pointer;
  
   display: none;
  @media (max-width: 1024px) {
    display: ${({ open }) => (open ? "none" : "flex")};
  
}
  `

  export const CloseButton = styled.button`
   font-size: 24px;
  background: none;
  border: none;
  color: #000000;
  cursor: pointer;
  display: none;
    margin-top: 20px;
  margin-right: 20px;
  
  align-self: end;
  color: #ffffff;`





