import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import ListItemOnCart from '../../components/Cart/ListItemOnCart';
import { UseCart } from '../../context/CartContext';
import OrderCtn from '../OrderCtn/OrderCtn';
import FormCart from '../../components/FormCart/FormCart';
import CreateOrder, { RemoveOrder } from '../../components/FirebaseRequest/HandleOrders';

const CartContainer = () => {
    const { cart, removeItem, totalAmount, cleanCart } = UseCart();
    const [orderRequest, setOrderRequest] = useState(false);
    const [cartConfirmed, setCartConfirmed] = useState(false);
    let history = useHistory();

    //maneja la peticion de la orden
    const handleOrder = (formdata) => CreateOrder(formdata, cart, totalAmount, setOrderRequest)

    //habilita el componente con el formulario 
    const handleCheckout = () => {
        setCartConfirmed(true)
        setTimeout(() => window.scroll({
            top: 300,
            behavior: 'smooth'
        }), 100)
    }

    //borra una orden de la coleccion en la bd
    const handleRemove = () => RemoveOrder(orderRequest, history)


    return (
        <>
            <div className='columnSide l'></div>
            <div className='cartContainer'>
                <h2>Tu carrito</h2>
                {cart.length !== 0 ?
                    orderRequest ?
                        <OrderCtn cart={cart} orderId={orderRequest.id} removeOrder={handleRemove} cleanCart={cleanCart} /> :
                        <div>
                            <ListItemOnCart cart={cart} removeItem={removeItem} />
                            <div className='totalCtn'>
                                <span>TOTAL</span>
                                <span>${totalAmount()}</span>
                            </div>
                            <div className='btnSection'>
                                <button onClick={cleanCart}>Vaciar carrito</button>
                                <button onClick={() => handleCheckout()}>Finalizar la compra</button>
                            </div>
                            {cartConfirmed && <FormCart handleOrder={handleOrder} />}
                        </div>
                    :
                    <div className='emptyCart'>
                        <p>No hay productos en tu carrito</p>
                        <Link to='/'>Ir a Inicio</Link>
                    </div>}
            </div>
            <div className='columnSide r'></div>
        </>
    )
}

export default CartContainer
