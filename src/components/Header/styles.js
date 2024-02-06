import styled from "styled-components";


export const Container = styled.div`
background-color:#ffffff;
height: 70px;
display:flex;
flex-direction:row;
align-items: center;
justify-content: space-around;
@media (max-width: 470px) {
justify-content: space-evenly;
  }
`

export const ContainerLeft = styled.div`
display: flex;
gap: 30px;
`


export const ContainerRigth = styled.div`
img{
    height: 40px;
}
display: flex;
justify-content: space-between;

.separator{
height: 40px;
border: 0.5px solid #F97EF5;
color:#EA08E7;
@media (max-width:470px){
  display: none;
}

}

`

export const PageLink = styled.a`
cursor: pointer;
text-decoration: none;
@media (max-width:470px){
  display: ${props => props.isActive ? 'none' : 'flex'};
  display: ${props => props.isCart ? 'none' : 'flex'};
}

color:${props => props.isActive ? '#000000' : '#EA08E7'};
font-weight: ${props => props.isActive ? 'bold' : 'normal'} ;
&:active{
    color: #000000;
}
`

export const ContainerText = styled.div`
margin-left: 30px;
overflow:hidden`