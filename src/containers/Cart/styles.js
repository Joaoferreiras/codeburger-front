import styled from "styled-components";

export const Container = styled.div`
background-color: #E8E7F4;
//height:calc(100vh - 72px);
min-height: 100%;
height: 100vh;
width: 100vw;
gap: 20px;
display: flex;
justify-content: center;
`

export const Containeritems = styled.div`
display: flex;
gap: 50px;
align-items: center;

@media(max-width:470px){
    flex-direction: column;
    gap: 0;
}
`


