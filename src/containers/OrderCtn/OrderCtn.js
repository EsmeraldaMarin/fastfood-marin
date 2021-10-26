import React from 'react'
import { Link } from 'react-router-dom'
import OrderDetailTable from '../../components/Order/OrderDetailTable'

const OrderList = ({ cart, orderId, removeOrder, cleanCart }) => {
    return (
        <div className='orderDetail'>
            <OrderDetailTable cart={cart} removeOrder={removeOrder} />
            <div className='successMsg'>
                <h3>Orden realizada exitosamente</h3>
                <i className="far fa-check-circle"></i>
                <p>El ID de tu orden es: <b>{orderId}</b></p>
                <Link to='/' style={{color: '#fff' }} onClick={cleanCart}>Listo <i className="fas fa-check"></i></Link>
            </div>
        </div>
    )
}

export default OrderList
