import styled from "styled-components"


export const Line = styled.div`
margin: 0 auto;
  width: 50%;
  margin-top: 2rem;
  margin-bottom: 2rem;
  height: 1px;
background-color: #cfcfcf;
`

export const LastChangeLine = styled.div`

  width: 100%;
  height: 1px;
  background-color: #cfcfcf;
`
export const GreenBarDiv = styled.div`

background: linear-gradient(to right, #008000, #008080);
max-height: 1000px;
height: 200px;
box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
   margin: 80px auto 50px auto; 
 
   display:flex ;
align-items: center;
 justify-content: center;

h1 {
   font-size: 3.7rem;
  font-weight: 700;
  color: #ffffff;
text-align: center;

@media (max-width: 1024px) {
font-size: 2.5rem;

}
}
@media (max-width: 1024px) {
  height:150px;
}

`