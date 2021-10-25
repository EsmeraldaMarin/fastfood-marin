import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import ListItemOnCart from '../components/Cart/ListItemOnCart';
import { UseCart } from '../context/CartContext';
import { getFirestore } from '../firebase';
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import OrderCtn from './OrderCtn';
import FormCart from '../components/FormCart/FormCart';

const CartContainer = () => {
    const { cart, removeItem, totalAmount, cleanCart } = UseCart();
    const [orderRequest, setOrderRequest] = useState(false);
    const [cartConfirmed, setCartConfirmed] = useState(false);
    let history = useHistory();
    const db = getFirestore();
    const orderCollection = db.collection('orders');

    //crear orden con los productos del carrito (context), y los datos del user (formdata)
    const infoUserObjectGenerator = (formData) => {
        let buyer = {};
        for (let key of formData.keys()) {
            buyer[key] = formData.get(key);
        }
        const infoUser = {
            buyer,
            items: cart,
            total: totalAmount(),
            date: firebase.firestore.FieldValue.serverTimestamp()
        }
        return infoUser
    }

    //maneja la peticion de la orden, la envia a la bd y capta los resultados(el id)
    const createOrder = (infoUser) => {
        //const infoUser = infoUserObjectGenerator()
        orderCollection
            .add(infoUser)
            .then(docRef => {
                setOrderRequest(docRef)
            })
            .catch(err => console.log(err))
            .finally(updateStocks())
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

    //habilita el componente con el formulario 
    const handleCheckout = () => {
        setCartConfirmed(true)
        setTimeout(() => window.scroll({
            top: 300,
            behavior: 'smooth'
        }), 100)
    }

    //borra una orden de la coleccion en la bd
    const handleRemove = () => {
        const productRef = orderCollection.doc(orderRequest.id)
        productRef.delete().then(() => { history.push('/') })
    }

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
                            {cartConfirmed && <FormCart createOrder={createOrder} infoUser={infoUserObjectGenerator} />}
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
