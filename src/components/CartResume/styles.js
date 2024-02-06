import styled from "styled-components";

export const Container = styled.div`
background-color: #ffffff;
width:max-content;
box-shadow:0px 10px 40px rgba(0,0,0,0.03);
border-radius:20px;

.container-top{
    display: grid;
    grid-gap: 15px 50px;
    padding: 10px;
    grid-template-areas:     
    'title title'
    'items items-price'
    'delivery-tax delivery-tax-price';
}

.title{
    grid-area: title;
}
.items{
    grid-area: items;
}
.items-price{
    grid-area: items-price;
}
.delivery-tax{
    grid-area: delivery-tax;
}
.delivery-tax-price{
    grid-area: delivery-tax-price;
}



.container-bottom{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 5px;
}
`