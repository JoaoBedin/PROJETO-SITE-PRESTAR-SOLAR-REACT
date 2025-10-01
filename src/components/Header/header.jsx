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


&hover{
  opacity: 0.5;
    transform: scale(1.1);

}

`


export const LinkpDesktop = styled.a`
font-size: 1.4rem;
`
export const ListNav = styled.ul`
  display: flex;
   gap: 70px;
list-style-type: none;
`

export const NavListDesktop = styled.nav`
  display: flex;
  align-items: baseline;
gap: 70px;
`



export const OrcamentoA = styled.a`
`

