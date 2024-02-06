import styled from "styled-components";

export const Container = styled.div`
background-color: #ffffff;
border-radius:30px;
box-shadow: 0px 30px 60px rgba(57,57,57,0.1);
display: flex;
gap: 10px;
padding:15px;

div{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}`

export const Image = styled.img`
width:130px;
height: 130px;`

export const ProductName = styled.p`
font-style:normal;
font-weight:normal;
font-size:16px;
line-height:19px;
color: #000000;`

export const ProductPrice = styled.p`
font-style:normal;
font-weight:500;
font-size:18px;
line-height:21px;
color: #000000;
margin-top: 30px`
