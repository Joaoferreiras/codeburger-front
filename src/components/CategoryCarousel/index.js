import React, { useEffect, useState } from "react";
import Carousel from "react-elastic-carousel"
import api from "../../services/api"
import { Container, Menu, ContainerItens, CarouselImage, Button } from "./styles"



export const CategoryCarousel = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const loadCategories = async () => {
            const { data } = await api.get('categories')

            setCategories(data)

        }
        loadCategories()


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
            <Menu>Categorias</Menu>
            <Carousel itemsToShow={5} style={{ width: '100%' }} pagination={false} breakPoints={breakPoints}>
                {
                    categories && categories.map(category => (
                        <ContainerItens key={category.id}>
                            <CarouselImage src={category.url} />
                            <Button to=
                                '/produtos'
                                state={{ categoryId: category.id }}

                            >{category.name}</Button>
                        </ContainerItens>)
                    )
                }
            </Carousel>

        </Container>
    )
}

