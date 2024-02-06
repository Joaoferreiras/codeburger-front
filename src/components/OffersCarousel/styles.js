import styled from "styled-components";


export const Container = styled.div`
background-color: #E8E7F4;
max-width: 100vw;
.rec.rec-arrow {
    border-radius: 25px;
    margin: 0 30px;
    background-color:  #F97EF5;
    color: #ffffff;
   
}

.rec.rec-arrow:hover {
    background-color: #ffffff;
    color: #F97EF5;
    border: 2px solid #F97EF5;
}

.rec.rec-arrow:active {
   opacity: 0.1;
}

.rec.rec-arrow:disabled {
   opacity: 0.5;
}


`

export const Menu = styled.h1`
width: 100%;
display: flex;
justify-content: center;
margin: 16px 0;
color:  #EA08E7  ;
`
export const ContainerItens = styled.div`
display: flex;
flex-direction:column;

p{
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 30px;

}
`

export const CarouselImage = styled.img`
width: 150px;
height: 180px;
margin-bottom: 10px;
box-shadow: 10px 6px 6px #CCCED6;`

export const Button = styled.button`
margin:16px 0;
width: 150px;
height: 45px;
background-color: #F97EF5;
border: none;
border-radius: 15px;
color: #ffffff;
font-size: 16px;
line-height: 20px;
box-shadow: 5px 3px 3px #EA08E7;
cursor: pointer;
&:hover{
    opacity: 0.8;
};
&:active{
    opacity: 0.6;
}`