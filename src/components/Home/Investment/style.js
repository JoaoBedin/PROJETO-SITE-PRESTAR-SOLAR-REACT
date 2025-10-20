    import styled from "styled-components";


    export const InvestmentSection = styled.section `
    

  display: flex;
align-items: center;
flex-direction: column;
justify-content: center;



 strong {
color: #000000; 

font-weight: 700;

}


h1 {
 margin-top: 3rem;
   font-size: 2.5rem;
   @media (max-width: 1024px) {
    font-size: 2rem ;
   }
 
}
h2 {
  font-weight: 600;
  color: #000000; 
    @media (max-width: 1024px) {
    font-size: 20px ;
   }
}


article {

  display: flex;
align-items: center;
justify-content: center;
gap: 30px;
margin-top: 5rem;
@media (max-width: 1024px) {
  flex-direction: column;
    display: flex;
}

}


div {  
  
      display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
  border-radius: 15px;

  max-width: 450px;
width: 100%;
   padding:60px 20px;
   background-color: #ffffff;
 box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  
   row-gap: 30px;
@media (max-width: 1024px) {
   width: 70% !important;
}
   }



div svg {
  transition: transform 0.3s ease;
  
}







p {
  font-weight: 400;
 max-width: 300px;
  width: 100%;
  @media (max-width: 1024px) {
     font-size: 14px;
  }
}
`