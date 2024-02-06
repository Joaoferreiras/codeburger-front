import React, { useState, useEffect } from "react";
import { Container, ProductsImage, CategoryMenu, CategoryButton, ProductsContainer } from "./styles"
import {CardProduct} from "../../components";
import api from "../../services/api";
import productImage from "../../assets/produtosimg.png";
import formatCurrency from "../../utils/formatCurrency"
import { useLocation } from "react-router-dom";




export const Products = () => {
    const { state } = useLocation()
   
let categoryId = 0
if(state?.categoryId){
    categoryId = state.categoryId
}


    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [activeCategorie, setActiveCategorie] = useState(categoryId)

    useEffect(() => {
        const loadCategories = async () => {
            const { data } = await api.get('categories')

            const newCategories = [{ id: 0, name: 'Todos' }, ...data]

            setCategories(newCategories)

        }

        const loadProducts = async () => {
            const { data: allProducts } = await api.get('products')
            const newProducts = allProducts.map(product => {
                return { ...product, formatedPrice: formatCurrency(product.price) }
            })
            setProducts(newProducts)
        }
        loadProducts()
        loadCategories()

    }, [])

    useEffect(() => {

        if (activeCategorie === 0) {
            setFilteredProducts(products)
        } else {
            const newFilteredProducts = products.filter(product => product.category_id === activeCategorie)

            setFilteredProducts(newFilteredProducts)

        }

    }, [activeCategorie, products])


    return (
        <Container>
            <ProductsImage src={productImage} alt="imagem dos produtos" />
            <CategoryMenu>
                {categories && categories.map(category =>
                    <CategoryButton
                        type="button"
                        key={category.id}
                        isActiveCategory={activeCategorie === category.id}
                        onClick={() => {
                            setActiveCategorie(category.id)
                        }}>{category.name}</CategoryButton>)}
            </CategoryMenu>
            <ProductsContainer>
                {
                    filteredProducts && filteredProducts.map(product => (
                        <CardProduct key={product.id} product={product} />

                    ))
                }
            </ProductsContainer>
        </Container>
    )
}
