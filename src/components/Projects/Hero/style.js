
import styled from "styled-components";









export const AllProject = styled.div`



    display: flex;
    flex-direction: column;
justify-content: center;
align-items: center;

h2{
      font-size: 50px;
    font-weight: 600;
    line-height: 50px;
    @media (max-width: 1024px) {
          font-size: 2rem;
  text-align: center;
    }
}




`

export const DivButtons = styled.div`


@media (max-width: 1024px) {  display: flex;
  flex-direction:column;
 row-gap: 1rem;
 text-align: center;
 justify-content: center;
 margin-top: 1rem;
 
 }





button {

  background-color: rgb(22, 69, 126);
  color: white;
padding: 10px 20px;
  border-radius: 8px;
  border: none;
 
  font-size: 20px;
  cursor: pointer;
  font-weight: 600;
  
margin-top: 50px;
margin-right: 20px;

@media (max-width: 1024px) {

 margin-top: 0.5rem;


}

}

button:hover {
  transition:0.51s ease;
    opacity: 1;
    background-color: #ffff;
    color: #000000;
}

button:active {
  transform: scale(1.05);
    opacity: 0.8;
   
  font-weight: 700;
}
 `

export const ImgProject = styled.div`

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 2rem;
`
export const ProjectImg = styled.img`

  max-width: 300px;
  width: 100%;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);


`



/*




.element-project-button button{
  margin-top: 0.5rem;
}


.img-project{
  
 margin: 0 auto;
 

  padding: 0;

}

.img-project img{
  height: 50%;
}
*/ 
