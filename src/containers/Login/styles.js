import styled from "styled-components";


export const Container = styled.div`
height:100vh;
width: 100vw;
display:flex;
@media (max-width: 825px) {
flex-direction: column;
align-items: center; 
  }
`
export const Background = styled.img`
height: 100vh;
width: 50vw;
@media (max-width: 500px) {
height: 50vh;
width: 100vw;
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
}


`
export const Input = styled.input`
padding-left: 5px;
margin-bottom: 15px;
width: 390px;
height:49px;
@media (max-width: 445px) {
width: 250px;

  }
background: #ffffff;
box-shadow: 3px 3px 10px rgba(191, 198, 199);
border-radius: 5px;
border: ${props => props.error ? '2px solid #cc1717' : 'none'}

`
export const SignUp = styled.p`
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 16px;

a{
    cursor: pointer;
    text-decoration: underline;
}

`
