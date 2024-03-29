import styled from "styled-components";

export const Container = styled.div`
background-color: #E8E7F4;
width: 100%;
height: 100%;
min-height: 100vh;

`
export const ProductsImage = styled.img`
width: 100%;
max-height:60vh;`

export const CategoryMenu = styled.div`
display: flex;
gap: 50px;
margin-top: 20px;
overflow: scroll;
margin-left:5px ;
@media(min-width: 1000px) {
 
   justify-content: center;

}
@media(max-width: 690px) {
    overflow: scroll;

}

`

export const CategoryButton = styled.button`
cursor: pointer;
background: none;
border: none;
border-bottom: ${props => props.isActiveCategory && '2px solid #EA08E7'};
padding-bottom: 3px;
font-size: 17px;
line-height: 20px;
color: ${props => props.isActiveCategory ? '#EA08E7' : '#313236'};


`

export const ProductsContainer = styled.div`
display: grid;

@media(min-width: 1000px) {
    grid-template-columns: repeat(3,1fr);    
}
gap: 10px;
padding: 50px;
justify-items: center;
margin-top: 20px`