import styled from "styled-components";

import ReactSelect from "react-select";

export const Container = styled.div`
background: #efefef;
min-height:100vh;
`

export const ProductsImg = styled.img`
width: 60px;
height: 60px;
border-radius: 5px;
`
export const ReactSelectStyle = styled(ReactSelect)`
width: 250px;
.css-13cymwt-control{
    cursor: pointer;

}

`

export const Menu = styled.div`
display:flex;
justify-content:center;
margin: 20px 0;
gap:50px;`

export const LinkMenu = styled.a`
cursor: pointer;
font-weight: ${props => props.isActiveStatus ? 'bold' : 'normal'};
border-bottom: ${props => props.isActiveStatus ? '2px solid' : 'none'}`
