import React, { createContext, useContext, useEffect, useState } from "react"
import PropTypes from 'prop-types'


const CartContext = createContext({})

export const CartProvider = ({ children }) => {
    const [cartProducts, setCartProducts] = useState([])

    const setLocalStorage = async (product) => {
        await localStorage.setItem('codeburger:cartInfo', JSON.stringify(product))

    }

    const putProductInCart = async product => {
        const cartIndex = cartProducts.findIndex(prd => prd.id === product.id)

        let newCartProducts = []
        if (cartIndex >= 0) {
            newCartProducts = cartProducts

            newCartProducts[cartIndex].quantity = newCartProducts[cartIndex].quantity + 1

            setCartProducts(newCartProducts)
        } else {
            product.quantity = 1
            newCartProducts = [...cartProducts, product]
            setCartProducts(newCartProducts)
        }

      await setLocalStorage(newCartProducts)
    }

    const increaseProducts = async productId => {
        const newCart = cartProducts.map(product => {
            return product.id === productId ? { ...product, quantity: product.quantity + 1 } : product
        })

        setCartProducts(newCart)

        await setLocalStorage(newCart)

    }

    const decreaseProducts = async productId => {
        const cartIndex = cartProducts.findIndex(pd => pd.id === productId)

        if (cartProducts[cartIndex].quantity > 1) {
            const newCart = cartProducts.map(product => {
                return product.id === productId ? { ...product, quantity: product.quantity - 1 } : product
            })

            setCartProducts(newCart)

            await setLocalStorage(newCart)


        } else if (cartProducts[cartIndex].quantity <= 1) {
            const newCartFilter = cartProducts.filter(product => {
                return product.id !== productId
            })

            setCartProducts(newCartFilter)
            await setLocalStorage(newCartFilter)

        }



    }


    useEffect(() => {
        const loadUserData = async () => {
            const clientCartData = await localStorage.getItem('codeburger:cartInfo')

            if (clientCartData) {
                setCartProducts(JSON.parse(clientCartData))
            }


        }
        loadUserData()
    }, [])


    return (
        <CartContext.Provider value={{ putProductInCart, cartProducts, increaseProducts, decreaseProducts }}>{children}</CartContext.Provider>
    )
}

export const useCart = () => {
    const context = useContext(CartContext)

    if (!context) {
        throw new Error('useCart most be used with UserContext')
    }

    return context
}

CartProvider.propTypes = {
    children: PropTypes.node
}