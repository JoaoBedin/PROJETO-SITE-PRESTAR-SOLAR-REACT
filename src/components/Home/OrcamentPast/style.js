import styled from "styled-components";

export const FormOrcament = styled.form`



   display: flex;
  align-items: center;
  justify-content: center;
flex-direction: column;
row-gap: 2rem;
background: linear-gradient(to right, #008000, #008080);
border-radius: 40px;
 padding: 20px 40px;
 max-width: 500px;
max-height: 1000px;

 margin: 0 auto;
 margin-top: 5rem;
 box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);


  


 h1 {
 color: #ffffff; ;
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
}


input{
   box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  height: 40px;
  border-radius: 5px;
border: none;
 padding-left: 10px;
  outline: #008080;
    width: 100%;
  max-width: 400px;
  font-size: 1.1rem;
  color: #363636;
   font-weight: 500;
}



textarea {
  height: 40px;
  border-radius: 5px;
  border: 1px solid gray;
  padding-left: 10px;
outline: #008080;
  width: 100%;
  max-width: 400px;
  font-size: 1.1rem;
  color: #131111;
  height: 8vh;
   box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
   font-weight: 500;
}



button {

box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
color: #000000;
  height: 50px;
     width: 100%;
  max-width: 300px;
   border-radius: 15px;
   border: none;
   font-size: 1.4rem;
font-weight: 600;
cursor: pointer;
transition: all 0.3s ease;
}

button:hover {
 transform: translateY(-2px) scale(1.02);
  opacity: 0.95;
}
button:active{
   transform: scale(0.98);
}

label{
        background-color: #ffffff;
  padding: 10px 20px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 500;
  color: #050505;
  transition: all 0.3s ease;
  margin-top: -1rem;
}
label:hover {
   color: #000000;
  opacity: 0.7; }



@media (max-width: 1024px) {
    width: 70%;
  height: 500px;
  text-align: center;

  h1{
    font-size: 2rem;
  }

  p{
    font-size: 0.95rem;
  }

  input,textarea::placeholder{
    font-size: 0.95rem;
  }

  input{
    font-size: 1rem;
    height: 2rem;
  }
textarea{
   font-size: 1rem;
}

button{
  font-size: 1.4rem;
color: #000000;
background-color:#ffff;
height: 6%;
}
}
`

export const FileName = styled.p `
  color: #ffffff;
  font-size: 1.2rem;
  @media (max-width: 1024px) {
     font-size: 1rem;
    height: 1%
    
   
  }
`
export const SubTextOrcament = styled.p`

text-align: center;
color: #ffffff;
margin-top: -1rem;
font-size: 17px;
width: 100%;
max-width: 400px;
 @media (max-width: 1024px) {
     font-size: 1rem;
    height:40px;
   border-radius: none;
  }

`


