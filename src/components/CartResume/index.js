import React, { useEffect, useState } from "react";
import { Button } from "../../components"
import { Container } from "./styles"
import { useCart } from "../../hooks/CartContext";
import {toast} from "react-toastify"
import api from "../../services/api"
import formatCurrency from "../../utils/formatCurrency";

export const CartResume = () => {
    const { cartProducts } = useCart()
    const [finalPrice, setFinalPrice] = useState(0)
    const [deliveryTax] = useState(5)

    useEffect(() => {
        const sumAllItems = cartProducts.reduce((acc, current) => {
            return current.price * current.quantity + acc
        }, 0)

        setFinalPrice(sumAllItems)
    }, [cartProducts])


    const submitOrder = async () => {
        const order = cartProducts.map(product => {
            return { id: product.id, quantity: product.quantity }
        })
        await toast.promise(
            api.post('orders', { products: order }), {
            pending: 'Realizando seu pedido',
            success: 'Pedido realizado',
            error: 'Falha ao realizar pedido, tente novamente'

        })
    }


    return (<div>
        <Container>
            <div className="container-top">
                <h2 className="title">Resumo do pedido</h2>
                <p className="items">Itens</p>
                <p className="items-price">{formatCurrency(finalPrice)}</p>
                <p className="delivery-tax">Taxa de entrega</p>
                <p className="delivery-tax-price">{formatCurrency(deliveryTax)}</p>
            </div>
            <div className="container-bottom">
                <h3>Total</h3>
                <p>{formatCurrency(finalPrice + deliveryTax)}</p>
            </div>
        </Container>
        <Button onClick={submitOrder} style={{ width: '100%', marginTop: '20px' }}>Finalizar pedido</Button>
    </div>)

}