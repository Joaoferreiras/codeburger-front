import styled from "styled-components";

export const Container = styled.div`
background-color: #ffffff;
width:max-content;
box-shadow:0px 10px 40px rgba(0,0,0,0.03);
border-radius:20px;
padding:10px;
margin: 140px 0;
max-height: 90vh;
overflow: scroll;
@media(max-width:470px){
    display: flex; 
    flex-direction: row;
    max-width: 85vw;
    gap: 60px;
    margin: 50px 0;
    }`

export const Header = styled.div`
display:grid;
grid-template-columns: repeat(5, 1fr);
padding:10px;
@media(max-width:470px){
  
  grid-template-columns: repeat(1, 5fr);
}
p{
    font-size: 16px;
    margin-top: 20px;

    
    
}`

export const Body = styled.div`
display:grid;
grid-template-columns: repeat(5, 1fr);
width:max-content;
padding: 10px;
grid-gap: 10px 15px;

@media(max-width:470px){
  
    grid-template-columns: repeat(1, 5fr);
    white-space: nowrap;
   // overflow: scroll;
  //  text-overflow: ellipsis;

    

}

img{
    width: 140px;
    height: 100px;
    border-radius: 10px;
    @media(max-width:470px){
   width: 40px;
   height: 30px;

    

}
}

p{
    font-size: 16px;
    max-width: 2px;
    display: flex;
    justify-content: space-between;
    @media(max-width:470px){
  
  
}
}

.quantityContainer{
    display: flex;
    gap: 20px;

    button{
        height: 30px;
        background: transparent;
        border: none;
        font-size: 24px;
        cursor: pointer;
    }

    p{
        margin-top: 5px;
    }
}`

export const EmptyCart = styled.p`
text-align:center;
padding:20px;
font-weight: bold;`
