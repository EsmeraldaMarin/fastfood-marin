import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import ListItemOnCart from '../components/Cart/ListItemOnCart';
import { UseCart } from '../context/CartContext';
import { getFirestore } from '../firebase';
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import OrderCtn from './OrderCtn';

const CartContainer = () => {
    const { cart, removeItem, totalAmount, cleanCart } = UseCart();
    const [orderRequest, setOrderRequest] = useState(false)
    let history = useHistory()
    const db = getFirestore();
    const orderCollection = db.collection('orders');

    //crear orden con los productos del carrito y los datos del user
    const createOrder = () => {
        const newOrder = {
            buyer: {
                name: 'esmeralda',
                phone: 3571315193,
                email: 'esme@gmail.com'
            },
            items: cart,
            total: totalAmount(),
            date: firebase.firestore.FieldValue.serverTimestamp()
        }
        return newOrder
    }

    //actualiza stocks luego de realizar la orden
    const updateStocks = () => {

        cart.forEach(item => {

            const productsCollection = db.collection('products')
            const updateCollection = productsCollection.doc(item.id);
            updateCollection
                .update({ stock: item.stock - item.quantity })

        })
    }

    //maneja la peticion de la orden, la envia a la bd y capta los resultados(el id)
    const handleCheckout = () => {

        const newOrder = createOrder()
        orderCollection
            .add(newOrder)
            .then(docRef => {
                setOrderRequest(docRef)
            })
            .catch(err => console.log(err))
            .finally(updateStocks())

    }
    /* const handleUpdate = () => {
        const productRef = orderCollection.doc("poner el id")
        productRef.update({ quantity: 2 })
    } */

    //borra una orden de la coleccion en la bd
    const handleRemove = () => {
        const productRef = orderCollection.doc(orderRequest.id)
        productRef.delete().then(() => { history.push('/') })
    }

    return (
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
                            {/* <button onClick={() => handleUpdate()}>Modificar orden</button>*/}
                            <button onClick={() => handleCheckout()}>Finalizar la compra</button>
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
