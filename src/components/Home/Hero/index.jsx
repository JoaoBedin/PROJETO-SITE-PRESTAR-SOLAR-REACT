

import {ImageBackground, ImageMulherPrestar, ImgText, H1PInit, TitleInit, TextInit, Pmain, AOrcamentoInit,
    SeloRaio, SeloGarantia, Pgarantia, GarantiaSelos, 
 } from './style.js';

 import {motion} from 'framer-motion' 
import MulherPrestar from "../../../assets/BANNER1Prancheta-1.png";
import ImgSeloRaio from "../../../assets/Raio-png.png";
import ImgSeloCertificado from "../../../assets/verificad-log.png";

function Hero() {

return (

<>
<motion.div
initial={{opacity: 0, translateX: "-100%"}}
whileInView={{opacity: 1, translateX: 0}}
transition={{duration: 1}}  
>
<ImageBackground>

    
<TextInit>

    <div className="container-init">
        

               
<br/>
<ImgText>
  <H1PInit>
  <TitleInit>Reduza sua conta de energia em até 95% com energia solar!</TitleInit>  
<Pmain>Economia e Sustentabilidade; com a energia solar você economiza mais e contribui com o meio ambiente.</Pmain>
 < AOrcamentoInit href="./#orcamento" >Solicite seu Orçamento! </ AOrcamentoInit>
</H1PInit>
 <div >




</div>

<ImageMulherPrestar src={MulherPrestar} className='img-mulher-prestar'/>   
</ ImgText>




<GarantiaSelos>
<div>
<SeloGarantia src={ImgSeloCertificado} alt="selo-de-garantia"/>
<Pgarantia> <strong>Garantia</strong> de Qualidade</Pgarantia>
</div>
<div>
<SeloRaio src={ImgSeloRaio} alt="raio-de-garantia"/>
<Pgarantia> <strong>25 anos</strong> de Garantia com Eficiência</Pgarantia>
</div>
</GarantiaSelos>
</div>


</TextInit>

</ImageBackground>
</motion.div>



</>

)

}

export default Hero;