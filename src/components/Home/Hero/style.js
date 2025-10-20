import styled from "styled-components";



export const ImageBackground = styled.div`
  position: relative;                /* <- ESSENCIAL para o ::before funcionar */
  background-image: url("src/assets/prancheta-1-copia-6.png");
  background-position: center;
  background-size: cover; 
  border-radius: 40px;
  display: flex;
  color: #ffffff;
  align-items: center;
  padding: 2rem;
  min-height: 100vh;
  overflow: hidden;                  /* Garante que o before não vaze */

  > * {
    position: relative;
    z-index: 2;
    background-repeat: no-repeat;
    color: #ffffff;
    max-width: 100vw;
    padding: 20px 20px 20px 30px; /* → espaçamento maior à esquerda */
    text-align: left;
  } 

  &::before {
    content: "";
    position: absolute;
    border-radius: 40px;
    top: 0; 
    left: 0;
    width: 100%; 
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2); /* ← transparência mantida */
    z-index: 1;
  }

@media (max-width: 1024px) {
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
height: 800px;
  padding: 0;
margin: 0;

  
> * {
    padding: 0;
    margin: 0;
    display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
 

}

  }

`



export const ImageMulherPrestar = styled.img`

margin-left: 250px;
border-radius: 60px;
max-height: 550px;
height: 100%;

@media (max-width: 1024px) {

display:none

}
`



export const ImgText = styled.div`

  display: flex;
  align-items: start;
`
export const H1PInit = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1024px) {
font-size: 1rem;
text-align: center;

  }
`

export const TitleInit = styled.h1`

  color: rgb(228, 224, 224);
  font-size: 60px;
  font-weight: 800;
max-width: 700px;
width: 100%;

 `
export const TextInit = styled.div`

 margin-top: 5%;
margin-left: 15%;

@media (max-width: 1024px) {

display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
 margin: 0;

  p{
      font-size: 1rem;
  }

  strong{
     font-size: 1rem;
  }

  h1{
font-size: 1.8rem;
}

}

`



export const Pmain = styled.p`

  margin-top: 3rem;
  font-weight: 400;
font-size: 20px;
color: rgb(255, 255, 255);
max-width: 600px;
width: 100%;

`
export const AOrcamentoInit = styled.a`

text-decoration: none;  
color:#ffff; 
background-color: rgb(22, 69, 126);
border: none;
border-radius: 10px;
font-weight: 500;
font-size: 20px;

  cursor: pointer;
  height: 50px;
width: 300px;
justify-content: center;
align-items: center;
text-align: center;
display: flex;
margin-top: 20px;

@media (max-width: 1024px) {
margin: 0 auto;
  font-size: 1.1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
}
`

export const SeloRaio = styled.img`
  max-width: 80px;
  width: 100%;
height: auto;
gap: 0;

`
export const SeloGarantia = styled.img`

 max-width: 100px;
  width: 100%;
height: auto;
`


export const GarantiaSelos = styled.div`

  display: flex;
  flex-direction: row;

  div{
    
display: flex;
align-items: center;
  }
@media (max-width: 1024px) {
   display: flex;
  flex-direction: column;
  margin-top: 40px;
  padding: 0;
  justify-content: center;
 
}
`

export const PgarantiaStrong = styled.p`

`
export const Pgarantia = styled.p`
font-size: 22px;
strong{font-weight: 600;
  font-size: 22px;
   @media (max-width: 1024px) {
     font-size: 1rem;
    }
}

 
  
`
   
   
   
export const ElementStoryAboutPrestar = styled.div`


    display: flex;
    justify-content: space-around;
    align-items: center;
    background: white;
    border-radius: 25px;
    padding: 20px 40px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    gap: 6rem; 
    position: absolute;
    bottom: -150px; 
    left: 50%;
    transform: translateX(-50%); 
   
    z-index: 5; 

    div{
           text-align: center; 
    }

    strong{
            font-size: 3rem;
    color:#16457e; 
    font-weight: 600;
    }

    p{
        font-weight: 500;
    margin: 0;
   font-size: 1.2rem;
    color: #070707; 
    }

    b{
         font-weight: bold; 
    }


       @media (max-width: 1024px) {
       position: relative;
  gap: 1rem;
  width: 75%;
margin-top: -175px;

 display: flex;


  p{
    font-size: 1rem;
  }

  strong{
    font-size: 1.5rem;
  
   
  }
     
     
     
     }
`






 
