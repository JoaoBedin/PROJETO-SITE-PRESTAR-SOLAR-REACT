

import {ImageBackground, ImageMulherPrestar, ImgText, H1PInit, TitleInit, TextInit, Pmain, AOrcamentoInit,
    SeloRaio, SeloGarantia, Pgarantia, GarantiaSelos, 
 } from './style.js';

function Hero() {

return (

<>

<ImageBackground>

    
<TextInit>

    <div className="container-init">
        

               
<br/>
<ImgText>
  <H1PInit>
  <TitleInit>Reduza sua conta de energia em até 95% com energia solar!</TitleInit>  
<Pmain>Economia e Sustentabilidade; com a energia solar você economiza mais e contribui com o meio ambiente.</Pmain>
 < AOrcamentoInit href="./#orcamento" >Solite seu Orçamento! </ AOrcamentoInit>
</H1PInit>
 <div >




</div>

<ImageMulherPrestar src="src/assets/BANNER1Prancheta-1.png" class="img-mulher-prestar"/>   
</ ImgText>




<GarantiaSelos>
<div>
<SeloGarantia src="src/assets/verificad-log.png" alt="selo-de-garantia"/>
<Pgarantia> <strong>Garantia</strong> de Qualidade</Pgarantia>
</div>
<div>
<SeloRaio src="src/assets/Raio-png.png" alt="raio-de-garantia"/>
<Pgarantia> <strong>25 anos</strong> de Garantia com Eficiência</Pgarantia>
</div>
</GarantiaSelos>
</div>


</TextInit>

</ImageBackground>




</>

)

}

export default Hero;