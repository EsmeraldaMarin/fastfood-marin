import React from 'react'
import { Link } from 'react-router-dom'
import OrderDetailTable from '../components/Order/OrderDetailTable'

const OrderList = ({ cart, orderId }) => {
    return (
        <div className='orderDetail'>
            <div className='successMsg'>
                <h3>Orden realizada exitosamente</h3>
                <i className="far fa-check-circle"></i>
                <p>El ID de tu orden es: <b>{orderId}</b></p>
                <Link to='/'>Volver a inicio</Link>
            </div>
            <OrderDetailTable cart={cart} />
        </div>
    )
}

export default OrderList
