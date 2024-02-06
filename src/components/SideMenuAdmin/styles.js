import { Link } from "react-router-dom";
import styled from "styled-components";



export const Container = styled.div`
background: #3c3c3c;
width:300px;

hr{
    margin: 50px 15px;

}
`

export const ItemsContainer = styled.div`
display: flex;
height: 60px;
align-items: center;
background:${props => props.isActive ? '#565656': 'none'  };
border-radius: 2px;
margin: 8px;
padding-left: 20px;

.icon{
    color: #ffffff;
}
`
export const LinkList = styled(Link)`
font-weight: normal;
font-style: normal;
font-size: 16px;
line-height: 19px;
color: #ffffff;
text-decoration: none;
margin-left: 8px;
`