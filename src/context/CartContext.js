import { createContext, useContext, useState } from "react";

const CartContext = createContext([]);

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const addItem = (item, quantity) => {

        if (isInCart(item.id)) {

            updateQuantity(item.id, quantity)
        } else {

            item.quantity = quantity
            const newItem = item
            setCart(prevCart => [...prevCart, newItem])
        }
    }

    const removeItem = (id) => {
        const cartWithProdRemoved = cart.filter(item => item.id !== id)
        setCart(cartWithProdRemoved);
    }
    const clear = () => {
        setCart([])
    }
    const isInCart = (id) => {
        let duplicatedProduct = cart.some(product => product.id === id)
        if (duplicatedProduct) { return true }
        return false
    }
    const updateQuantity = (id, quantityToAdd) => {
        const updatedCart = cart.map(product => {

            if (product.id === id) {
                const newQuantity = product.quantity + quantityToAdd;
                return { ...product, quantity: newQuantity }
            }
            return product
        })
        setCart(updatedCart);
    }

    return <CartContext.Provider value={{ cart, addItem, removeItem, clear, isInCart }}> {children} </CartContext.Provider>
}

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('El hook useCart debe ser usado dentro de un CartProvider. No seas pavo')
    }
    return context
}

export default CartContext;
