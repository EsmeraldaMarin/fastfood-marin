import React from 'react'
import { Link } from 'react-router-dom';
import ListItemOnCart from '../components/Cart/ListItemOnCart';
import { useCart } from '../context/CartContext';


const CartContainer = () => {
    const { cart, removeItem, totalAmount } = useCart();

    return (
        <div className='cartContainer'>
            <h2>Tu carrito</h2>
            {cart.length !== 0 ?
                <div>
                    <ListItemOnCart cart={cart} removeItem={removeItem} />
                    <div className='totalCtn'>
                        <span>TOTAL</span>
                        <span>${totalAmount()}</span>
                    </div>
                </div>
                :
                <div className='emptyCart'>
                    <p>No hay productos en tu carrito</p>
                    <Link to='/'>Ir a Inicio</Link>
                </div>}
        </div>
    )
}

export default CartContainer
