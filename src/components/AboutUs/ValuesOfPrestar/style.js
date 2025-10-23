import styled from "styled-components";

export const ExamplesPilaresFigure = styled.figure`

 display: flex;
align-items: stretch;
justify-content: center;
 
gap: 50px;
margin-top: 5rem;



@media (max-width: 1024px) {
     display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0;



  svg{
     height: 60px;
  }

  
}





div{
    display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex: 1;
  padding: 60px 40px;
height: 350px;
  max-width: 350px;
  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
row-gap: 30px; 
 transition: transform 0.5s ease, box-shadow 0.5s ease;

 @media (max-width: 1024px) {
      width: 55%;
     
    
     h1{
    font-size: 1.6rem;
  }

  

  p{
     font-size: 1.1rem;
  
  }
    
    }
}

div:hover{
   transition: transform 0.3s ease;
  transform: translateY(-10px) scale(1.05);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);

}

div svg{ 
    transition: transform 0.3s ease;
}

 div:hover svg {
  
  animation: float 1.5s ease-in-out infinite;
}


h1{
      font-size: 30px;
    font-weight: 600;
}
 p {
    font-size: 1.1rem;
    color: #1d1d1d;
  
   }

`




