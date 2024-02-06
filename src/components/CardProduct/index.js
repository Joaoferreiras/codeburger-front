import React from "react";
import { Container, Image, ProductName, ProductPrice } from "./styles"
import {Button} from "../Button"
import PropTypes from "prop-types"
import { useCart } from "../../hooks/CartContext";
import { useNavigate } from "react-router-dom";


export const CardProduct = ({ product }) => {
    const {putProductInCart} = useCart()
    const navigate = useNavigate()

    return <Container>
        <Image src={product.url} alt="imagem do produto" />
        <div>
            <ProductName>{product.name}</ProductName>
            <ProductPrice>{product.formatedPrice}</ProductPrice>
            <Button onClick={()=> {putProductInCart(product)
            navigate('/carrinho')}} style={{ backgroundColor: '#EA08E7' }}>Adicionar</Button>
        </div>
    </Container>
}




CardProduct.propTypes = {
    product: PropTypes.object
}