import React from "react";
import { Container, Header, Body, EmptyCart } from "./styles";
import { useCart } from "../../hooks/CartContext"
import formatCurrency from "../../utils/formatCurrency"


export const CartItems = () => {

    const { cartProducts, increaseProducts, decreaseProducts } = useCart()
   

    return (
        <Container>
            <Header>
                <p></p>
                <p>Itens</p>
                <p>Preço</p>
                <p style={{ paddingRight: 40 }}>Quantidade</p>
                <p>Total</p>
            </Header>

            {cartProducts && cartProducts.length > 0 ? (
                cartProducts.map(product => (
                    <Body key={product.id}>
                        <img src={product.url} />
                        <p>{product.name}</p>
                        <p>{formatCurrency(product.price)}</p>
                        <div className="quantityContainer">
                            <button onClick={() => decreaseProducts(product.id)}>-</button>
                            <p>{product.quantity}</p>
                            <button onClick={() => increaseProducts(product.id)}>+</button>
                        </div>
                        <p>{formatCurrency(product.price * product.quantity)}</p>

                    </Body>
                ))
            ) : (
                <EmptyCart>Carrinho vazio</EmptyCart>
            )}

        </Container>)
}
