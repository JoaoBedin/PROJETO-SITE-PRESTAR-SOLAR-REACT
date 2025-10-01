import React, {useState } from "react";

import { MobileMenu,NavLinksMobile, HamburgerButton, CloseButton } from "./style.js";


function MobileMenuHeader() {
    const [open, setOpen] = useState(false);

return(
<>
  <HamburgerButton open={open}  onClick={() => setOpen(true)}>   
        <i className="fas fa-bars"></i>
</HamburgerButton>
   
     

      <MobileMenu 
      open={open}>
        <CloseButton
          onClick={() => setOpen(false)} >
          <i className="fas fa-times"></i>
        </CloseButton>
        <NavLinksMobile>
          <li>
            <a href="/">INÍCIO</a>
          </li>
          <li>
            <a href="/SobreNos">SOBRE</a>
          </li>
          <li>
            <a href="/Projetos">PROJETOS</a>
          </li>
          <li>
            <a
              href="https://wa.me/46999115033?text=Olá, Gostaria de solicitar um orçamento!"
              target="_blank"
              rel="noopener noreferrer"
            >
              CONTATO
            </a>
          </li>
        </NavLinksMobile>
      </MobileMenu>



</>






)
}

export default MobileMenuHeader
