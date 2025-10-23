import {ElementFooter,ImgPelementsFooter,ImgSocialMedia, BlueLogoFooter,  ContactElementFooter, LinkElementFooter,  FooterCopy, LineFooter} from "./style.js"

import FacebookIcon from '../../assets/icons8-facebook-48.png';
import InstagramIcon from '../../assets/icons8-instagram-48.png';
import BlueLogo from '../../assets/LOGO PRESTAR SOLAR.png';


function Footer() {
    return(
        <>
      
        

<br />
<br />
<br />
<LineFooter />

<ElementFooter>

<ImgPelementsFooter>
<a href="#inicio">  <BlueLogoFooter src={BlueLogo} alt="logo-azul" /></a>
<p>Atendemos os estados do sul do Brasil, oferecendo soluções em energia solar com qualidade e um atendimento personalizado, focado nas necessidades específicas de cada cliente e unidade consumidora.</p>

<ImgSocialMedia>
<a href="https://www.facebook.com/solarprestar" target="_blank"><img src={FacebookIcon} alt="facebook-logo" /></a>
<a href="https://www.instagram.com/solarprestar/" target="_blank"><img src={InstagramIcon} alt="instagram-logo" /></a>
</ImgSocialMedia>

</ImgPelementsFooter>


<LinkElementFooter>
<h1>Links Úteis</h1>
<a href="/">Início</a>
<a href="/SobreNos">Sobre nós</a>
<a href="/Projetos">Projetos</a>
<a  href="https://wa.me/46999115033?text=Olá, Gostaria de solicitar um orçamento!" target="_blank">Contato</a>
<a href="./SobreNos#local">Localização</a>
</LinkElementFooter>

<ContactElementFooter>
 <h1>Contatos</h1>
 <p>G-mail para contato:</p>
 <a href="mailto:prestarsolar@gmail.com">prestarsolar@gmail.com</a>
 <p>Telefone para contato:</p>
 <a href="tel:4699115033">46 99115033</a>
 </ContactElementFooter>





</ElementFooter>
<FooterCopy>
  © 2025 Prestar Solar. Todos os direitos reservados.
</FooterCopy>

        </>
    )}
export default Footer;