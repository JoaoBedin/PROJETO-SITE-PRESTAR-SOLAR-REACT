import styled from "styled-components";



export const ElementFooter = styled.footer`
  color: #000000;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-wrap: wrap; 
  gap: 5rem; 
   padding: 2rem 6rem;
  margin: 0 auto;
  max-width: 100%;
  box-sizing: border-box; 
align-items: baseline;



  h1 {
    font-size: 22px;
    font-weight: 600; 
  }

  a {
    font-weight: 500;
    text-decoration: none;
    font-size: 18px;
  }

  p {
    font-size: 20px;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 2rem; /* 👈 menor espaçamento no mobile */

    div {
      margin-top: 2rem;
      margin-bottom: 0;
      width: 100%;
    }

    p {
      font-size: 0.9rem;
    }
  }
`


 export const ImgPelementsFooter = styled.div`

 display: flex;
align-items: left;
justify-content: center;
flex-direction: column;
gap: 15px;

p{
      width: 100%;
  max-width: 300px;
  font-size: 15px;
}

@media (max-width: 1024px) {
display: flex;
justify-content: center;
align-items: center;
width: 70%;


}
`



export const ImgSocialMedia = styled.div`

 display: flex;
   cursor: pointer;

img:hover {
  opacity: 0.7;
   transform: scale(1.05);

}
@media (max-width: 1024px) {
display: flex;
  
  justify-content: center;
}


`


 export const ContactElementFooter = styled.div`

height: 120px;
 cursor: pointer;
  display: flex;
 flex-direction: column;
 justify-content: first baseline;
  gap: 1rem;
  

  @media (max-width: 1024px) {

  text-align: center;
   display: flex;
  align-items: center;
justify-content: center;
width: 100%;
 margin-top: -2rem;
h1{
     font-size: 1.2rem;
}

a{ font-size: 1rem;}


  }
`

export const LinkElementFooter = styled.div`

 display: flex;
 flex-direction: column;
 justify-content: first baseline;
  gap: 1rem;

@media (max-width: 1024px) {

  text-align: center;
   display: flex;
  align-items: center;
justify-content: center;
width: 100%;

h1{
     font-size: 1.2rem;
}

a{
      font-size: 1rem;
}



}


`

  

export const FooterCopy = styled.div`


  font-size: 16px;
border-top: 1px solid #cfcfcf;
text-align: center;
height: 1px;


`

export const LineFooter = styled.div`



  width: 100%;
   background-color: #cfcfcf;
   height: 1px;
    
`

export const BlueLogoFooter = styled.img`
width: 300px;

@media (max-width: 1024px) {
 height: 65%;
  width: 90%;}
`