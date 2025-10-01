import React from "react"; 
import {
  WhiteBar,
  LinkAll,
  BlueLogo,
  NavListDesktop,
  ListNav,
  LinkpDesktop,
  OrcamentoA,
} from "./style.js";

function Header() {
  return (
    <WhiteBar>
      <a href="/">
        <BlueLogo src="src/assets/LOGO PRESTAR SOLAR.png" alt="logo-azul" />
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
            <OrcamentoA href="#orcamento">Orçamento</OrcamentoA>
          </NavListDesktop>
        </LinkpDesktop>





        
      </LinkAll>
    </WhiteBar>
  );
}

export default Header;
