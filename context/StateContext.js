import React, { createContext, useContext, useState, useEffect } from 'react'
import { toast } from 'react-hot-toast'

const Context = createContext()

export const StateContext = ({ children }) => {
    const [showCart, setShowCart] = useState(false) // to show products in the cart
    const [cartItems, setCartItems] = useState([]) // to store what items inside a cart
    const [totalPrice, setTotalPrice] = useState()
    const [totalQty, setTotalQty] = useState()
    const [qty, setQty] = useState(1)

    const incrementQty = () => {
        setQty((prevQty) => prevQty + 1)
    }

    const decrementQty = () => {
        setQty((prevQty) => {
            if (prevQty <= 1) return 1
            return prevQty - 1
        })
    }

    const onAdd = (product, qty) => { // function adding items in cart menerima produk dan jumlah produk sbg parameter
        const checkProductInCart = cartItems.find((item) => item._id == product._id)
        setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price)
        setTotalQty((prevTotalQty) => prevTotalQty + qty)

        if (checkProductInCart) { // if the item already in the cart then just updated the qty

            const updatedCartItems = cartItems.map((cartItem) => {
                if (cartItem._id == product._id) {
                    return {
                        ...cartItem,
                        quantity: cartItem.qty
                    }
                }
            })

            setCartItems(updatedCartItems)
        } else {
            product.qty = qty
            setCartItems([...cartItems, { ...product }])
        }
        toast.success(`${qty} ${product.name} added to the cart.`)
    }

    return (
        <Context.Provider value={{
            showCart,
            cartItems,
            totalPrice,
            totalQty,
            qty,
            incrementQty,
            decrementQty,
            onAdd
        }}>
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context)