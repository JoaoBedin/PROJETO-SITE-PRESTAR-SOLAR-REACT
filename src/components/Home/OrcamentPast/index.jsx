import { Form } from "react-router";
import {FormOrcament,FileName, SubTextOrcament } from "./style"
import React ,{ useState } from "react";

function OrcamentPast() {
    
    return   (
<>





<FormOrcament
action="https://usebasin.com/f/f7b3954b4e73" method="POST"  encType="multipart/form-data"  >

  <h1> PEÇA SEU ORÇAMENTO </h1>
<SubTextOrcament >Preencha com seus dados e entraremos em contato com uma proposta personalizada!</SubTextOrcament>
<input  type="text" name="Nome"  placeholder="Seu nome" required/>
<input   name="Telefone"  placeholder="Seu telefone" type="tel" required/>
<textarea name="Duvida" placeholder="Observações"></textarea>


<FileName>*Última fatura de energia*</FileName>
<input className="file-input" name="file"    id="file" type="file" hidden/>
<label   htmlFor="file" className="custom-file-label" >Escolher arquivo</label>

<button type="submit">Enviar</button>



</FormOrcament>








</>

)}

export default OrcamentPast;



