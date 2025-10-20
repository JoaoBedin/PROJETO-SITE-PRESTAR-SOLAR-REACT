import styled from "styled-components";

export const ConvenceSection = styled.section `
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
margin-top: 12rem;
row-gap: 1rem;


h2{
   color: rgb(22, 69, 126); 
font-size: 1.8rem;
font-weight: 500; 
}

h1{font-size: 2.3rem;
font-weight: 500;}

strong{font-weight: 800;}
a{font-weight: 500;
padding: 16px 36px;font-size: 1.2rem;
border-radius: 20px;
 background: linear-gradient(to right, #008000, #008080);
margin-top: 1rem;
border-radius: 10px;
 color: #ffff;
  cursor: pointer;
   text-decoration: none;
   box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
   transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease, color 0.3s ease;}
a:hover { transform: translateY(-2px) scale(1.05);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.6);
opacity: 0.7;}

@media (max-width: 1024px) {

 text-align: center;

 h2{
   font-size: 1.2rem;
 }
  h1{
  font-size: 1.6rem;
}

a {
  font-size: 1rem;
}
}
`
