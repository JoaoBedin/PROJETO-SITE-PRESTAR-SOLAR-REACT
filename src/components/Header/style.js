import styled from "styled-components"; 

export const Header= styled.header`

`
export const LinkAll = styled.div`
display: flex;
  align-items: center; 
  justify-content: flex-end;
width: 100%;
`

export const WhiteBar = styled.div`
      height:115px; 
        background-color: rgb(255, 255, 255); 

      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 10px 20px;
position: fixed;
width: 100%;
top: 0;
        z-index: 1000;
display: flex;
align-items: center;
text-align: end;
@media (max-width: 1024px) {
  height: 100px;
}
`

export const BlueLogo = styled.img`
height: 100%;
height: 120px;

 margin-left: 120px;
 cursor: pointer;
 
 
  
  @media (max-width: 1024px) {
      height: 60%;
  width: 75%;
  display: flex;
  align-content: flex-start;
  margin-left: -10px;
  
  }
`

export const WhatsappImage = styled.img`
 height: 80px;   
  position: fixed;   
  bottom: 0; 
  right: 0;
  margin-right: 25px;
  margin-bottom: 25px;
  z-index: 1000;
  cursor: pointer;


&:hover{
  opacity: 0.5;
    transform: scale(1.1);

}
@media (max-width: 1024px) {
   height: 60px;
position: fixed;
right: 0;
bottom: 0;
margin: 10px;
opacity: 0.7;
}


`



export const ListNav = styled.ul`
  display: flex;
   gap: 70px;
list-style-type: none;
a {
     display: flex;
  font-weight: 600;
  cursor: pointer;
  color: #646464;
transition: color 0.3s ease, opacity 0.3s ease;
   text-decoration: none;  /* PARA REMOVER A LINHA DO LINK ("a")*/
 &:hover{
      color: rgb(22, 69, 126);
   }

}
`

export const NavListDesktop = styled.nav`
  display: flex;
  align-items: baseline;
gap: 70px;
@media (max-width: 1024px) {
  display: none;
}
`
export const LinkpDesktop = styled.div`
font-size: 1.4rem;
`
export const OrcamentoA = styled.a`
text-decoration: none;  
background-color: rgb(22, 69, 126);
border: none;
border-radius: 10px;
font-weight: 600;
font-size: 25px;
 color: #ffffff;
  cursor: pointer;
margin-right: 9.7rem;
height: 50px;
width: 200px;
display: flex;
align-items: center;
justify-content: center;
&:hover{
  opacity: 0.8;
}
&:active{
    transform: scale(1.05);
    opacity: 0.8;
}

`





