import styled from "styled-components";


export const Container = styled.div`
background-color:#ffffff;
height: 70px;
display:flex;
flex-direction:row;
align-items: center;
justify-content: space-around;`

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

}

`

export const PageLink = styled.a`
cursor: pointer;
text-decoration: none;
color:${props => props.isActive ? '#000000' : '#EA08E7'};
font-weight: ${props => props.isActive ? 'bold' : 'normal'} ;
`

export const ContainerText = styled.div`
margin-left: 30px;`