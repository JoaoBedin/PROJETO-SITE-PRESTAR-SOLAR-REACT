import React from "react"; 
import {
  WhiteBar,
  LinkAll,
  BlueLogo,
  NavListDesktop,
  ListNav,
  LinkpDesktop,
  OrcamentoA,
  WhatsappImage,
} from "./style.js";


import BlueLogoImg from '../../assets/LOGO PRESTAR SOLAR.png';
import WhatsappIcon from "../../assets/whatsapp.png";

function Header() {
  return (


    <WhiteBar 
  
    >
      <a href="/">
        <BlueLogo src={BlueLogoImg} alt="logo-azul" />
      </a>

      <LinkAll>
        <LinkpDesktop>
          <NavListDesktop>
            <ListNav>
              <li><a href="/">Início</a></li>
              <li><a href="/SobreNos">Sobre</a></li>
              <li><a href="/Projetos">Projetos</a></li>
              <li>
                <a
                  href="https://wa.me/46999115033?text=Olá, Gostaria de solicitar um orçamento!"target="_blank"rel="noopener noreferrer"> Contato
                </a>
              </li>
            </ListNav>
            <OrcamentoA href="/ "> Orçamento </OrcamentoA>
          </NavListDesktop>
        </LinkpDesktop>

  



        
      </LinkAll>
      <a href="https://wa.me/46999115033?text=Olá, Gostaria de solicitar um orçamento!" target="_blank"><WhatsappImage src={WhatsappIcon} alt="whatsapp-image" /></a>
    </WhiteBar>
  );
}

export default Header;
