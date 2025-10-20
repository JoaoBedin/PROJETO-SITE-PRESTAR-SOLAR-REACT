import styled from "styled-components";



export const ServicesPrestSection = styled.section `

h2{
 text-align: center;
  font-size: 1.8rem;
  font-weight: 500;
  margin-top: 5rem;

  @media (max-width: 1024px) {
    font-size: 1.3rem;
    margin-bottom: 3rem;
    padding: 10px;
  }
}





div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
   padding: 60px 20px; 
   width: 100%;
   max-width: 450px;
   height: 100%;
   max-height: 500px;
   row-gap: 20px;
   color: #ffffff;
   background: linear-gradient(to right, #008000, #008080);
   transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease, color 0.3s ease;
 box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);

@media (max-width: 1024px) {
    width: 80% !important;
 border-radius: 15px;
 
}

}
div:hover {
   transform: translateY(-10px) scale(1.05);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
    
  background: linear-gradient(to right, #ffffff, #ffffff);
  color: #000000;
 @media (max-width: 1024px) {

    transform: translateY(-3px) scale(1.02);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
 }

}

article{
display: flex;
align-items: center;
justify-content: center;
column-gap: 5rem;
margin-top: 6rem;

@media (max-width: 1024px) {
    display: flex;
  flex-direction: column;
row-gap: 1.2rem;
width: 80%;

text-align: center;
margin: 0 auto;


}

div svg {
 transition: transform 0.3s ease;
@media (max-width: 1024px) {
  height: 80px;
}
}
div:hover svg {
  
  animation: float 1.5s ease-in-out infinite;
}



 h1 {
  margin-top:5%;
   font-size: 1.6rem;
   font-weight: 500;
 
}


p{
  text-align: flex-start;
font-weight: 400;
font-size: 1.1rem;
max-width: 400px;
width: 100%;


}

@media (max-width: 1024px) {

  h1{
    text-align: center;
    font-size: 1.2rem;
  }

  p{
      text-align: center;
 font-size: 0.95rem;
 
  }
}



}
`