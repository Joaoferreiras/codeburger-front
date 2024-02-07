import styled from "styled-components";


export const Container = styled.div`
height:100vh;
width: 100vw;
display:flex;
@media(max-width: 840px){
      justify-content: center;
    }
`
export const Background = styled.img`
height: 100vh;
width: 50vw;
@media(max-width:840px ){
    display: none;
}

`
export const ContainerItens = styled.div`
height: 100vh;
width: 50vw;
background-color: #ffffff;
padding: 25px 75px;
display:flex;
flex-direction: column;
justify-content:center;
align-items: center;



form{
    display: flex;
    flex-direction:column;
    align-items: center;
}

h1{
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    margin-bottom: 20px;
    color: #000000;
    @media(max-width: 840px){
   white-space: nowrap;
    }
}
`
export const Input = styled.input`
padding-left: 5px;
margin-bottom: 15px;
width: 390px;
height:49px;
background: #ffffff;
box-shadow: 3px 3px 10px rgba(191, 198, 199);
border-radius: 5px;
border: ${props => props.error ? '2px solid #cc1717' : 'none'};
@media(max-width: 840px){
    width: 290px;
       background-color: #000000;
       color: #ffffff;
    }

`
export const SignIn = styled.p`
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 16px;
margin-top: 8px;
white-space: nowrap;

a{
    cursor: pointer;
    text-decoration: underline;
}

`