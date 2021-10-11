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
    const updateItemOnCart = (id, quantity) => {
        let itemOnCart = cart.filter(product => product.id === id)
        itemOnCart[0].quantity = quantity;
        const updatedCart = cart.map(product => {

            if (product.id === id) {
                return itemOnCart[0]
            }
            return product
        })
        setCart(updatedCart);
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
    const totalQuantity = () => {
        let total = 0;
        cart.forEach(item => total += item.quantity)
        return total
    }
    const totalAmount = () => {
        let total = 0;
        cart.forEach(item => total += item.quantity * item.price)
        return total
    }

    return <CartContext.Provider value={{ cart, addItem, removeItem, clear, isInCart, totalQuantity, totalAmount, updateItemOnCart }}> {children} </CartContext.Provider>
}

export const UseCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('El hook useCart debe ser usado dentro de un CartProvider. No seas pavo')
    }
    return context
}

export default CartContext;
