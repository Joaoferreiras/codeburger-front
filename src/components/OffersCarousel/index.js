import React, { useEffect, useState } from "react";
import Carousel from "react-elastic-carousel"
import api from "../../services/api"
import { Container, Menu, ContainerItens, CarouselImage, Button } from "./styles"
import formatCurrency from "../../utils/formatCurrency";
import { useCart } from "../../hooks/CartContext";
import { useNavigate } from "react-router-dom";


export const OffersCarousel = () => {
    const [offers, setOffers] = useState([])
    const {putProductInCart} = useCart()

    const navigate = useNavigate()

    useEffect(() => {
        const loadOffers = async () => {
            const { data } = await api.get('products')
            
            const onlyOffers = data.filter(product => product.offer).map(product => {
                return {...product, formatedPrice: formatCurrency(product.price) }
            } )
            
            setOffers(onlyOffers)
            
        }
        loadOffers()

    }, [])

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 400, itemsToShow: 2 },
        { width: 600, itemsToShow: 3 },
        { width: 900, itemsToShow: 4 },
        { width: 1300, itemsToShow: 5 }
    ]

    return (
        <Container>
            <Menu>Ofertas</Menu>
            <Carousel itemsToShow={5} style={{ width: '100%' }} pagination={false} breakPoints={breakPoints}>
                {
                    offers && offers.map(product => (
                        <ContainerItens key={product.id}>
                            <CarouselImage src={product.url} />
                            <p>{product.name}</p>
                            <p>{product.formatedPrice}</p>
                            <Button  onClick={()=> {putProductInCart(product)
                            navigate('/carrinho')}}>Peça agora!</Button>
                        </ContainerItens>)
                    )
                }
            </Carousel>

        </Container>
    )
}
