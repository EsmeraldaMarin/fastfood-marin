import { createContext, useContext, useState } from "react";

const CartContext = createContext([]);

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    //Agrega un nuevo item al cart con la cantidad correspondiente
    const addItem = (item, quantity) => {

        if (isInCart(item.id)) {
            updateQuantity(item.id, quantity)
        } else {

            item.quantity = quantity
            const newItem = item
            setCart(prevCart => [...prevCart, newItem])
        }
    }

    //actualiza en el cart la cantidad de items que el usuario esta pidiendo
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

    //elimina todas las unidades de un item del cart
    const removeItem = (id) => {
        const cartWithProdRemoved = cart.filter(item => item.id !== id)
        setCart(cartWithProdRemoved);
    }

    //vacia todo el cart
    const cleanCart = () => setCart([])

    //booleano que determina la existencia de un prod en el cart
    const isInCart = (id) => {
        let duplicatedProduct = cart.some(product => product.id === id)
        if (duplicatedProduct) { return true }
        return false
    }

    //actualiza la cantidad de productos que se agregan al cart si el producto ya se encontraba ahi
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

    //devuelve el total de prod en el cart
    const totalQuantity = () => {
        let total = 0;
        cart.forEach(item => total += item.quantity)
        return total
    }

    //devuelve el precio total de todos los prod del cart
    const totalAmount = () => {
        let total = 0;
        cart.forEach(item => total += item.quantity * item.price)
        return total
    }

    return <CartContext.Provider value={{ cart, addItem, removeItem, cleanCart, isInCart, totalQuantity, totalAmount, updateItemOnCart }}> {children} </CartContext.Provider>
}

export const UseCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('El hook useCart debe ser usado dentro de un CartProvider. No seas pavo')
    }
    return context
}

export default CartContext;
