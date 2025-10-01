import React from 'react'
import styled from 'styled-components'
import { GlobalStyles } from '../../styles/GlobalStyles'
import { WhiteBar, LinkAll,BlueLogo, Header,LinkpDesktop, NavListDesktop,ListNav } from '../../components/header/header'


function Home() {
  return (
    <>
    <Header>
    <WhiteBar>
      <BlueLogo src="src/assets/LOGO PRESTAR SOLAR.png" alt="logo-azul"/>
<LinkAll>

<LinkpDesktop>
<NavListDesktop>

<ListNav>
  
    <li><a href="index.html">Início</a></li>
                       <li><a href="./about-us.html">Sobre</a></li> 
                         <li><a href="project.html">Projetos</a></li>
                        <li><a  href="https://wa.me/46999115033?text=Olá, Gostaria de solicitar um orçamento!" target="_blank">Contato</a></li>   
</ListNav>





</NavListDesktop>

</LinkpDesktop>


</LinkAll>
    </WhiteBar>
 
</Header>
    </>
  )
}

export default Home