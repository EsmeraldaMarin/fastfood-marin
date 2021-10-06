import React from 'react'
import { Link } from 'react-router-dom';
import ListItemOnCart from '../components/Cart/ListItemOnCart';
import { useCart } from '../context/CartContext';
import { getFirestore } from '../firebase';
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";



const CartContainer = () => {
    const { cart, removeItem, totalAmount } = useCart();
    const db = getFirestore();
    const orderCollection = db.collection('orders');

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
    const handleCheckout = () => {

        const newOrder = createOrder()
        orderCollection
            .add(newOrder)
            .then(docRef => console.log('se creo el documento exitosamente', docRef.id))
            .catch(err => console.log(err))
            .finally(load => console.log('operacion finalizada'))

    }
    const handleUpdate = () => {

        const productRef = orderCollection.doc("poner el id")
        productRef.update({ quantity: 2 })
    }
    const handleRemove = () => {

        const productRef = orderCollection.doc("poner el id")
        productRef.delete()
    }

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
                    <button onClick={() => handleCheckout()}>Finalizar la compra</button>
                    <button onClick={() => handleUpdate()}>Modificar orden</button>
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
