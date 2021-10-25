import React from 'react'
import OrderDetailItem from './OrderDetailItem';
import { UseCart } from '../../context/CartContext';

const OrderDetailTable = ({ cart, removeOrder }) => {

    const { totalAmount } = UseCart()

    return (
        <div className='detail'>
            <h3>Detalle</h3>
            <div className="tableRef">
                <div>Cant.</div>
                <div>Producto</div>
                <div>Precio</div>
            </div>
            <ul className='detailList'>
                {cart?.map(item => {
                    return <OrderDetailItem key={item.id} item={item} />
                })}
            </ul>
            <div className='totalAmount'>
                <h4>TOTAL</h4>
                <p>${totalAmount()}</p>
            </div>
            <div className='btnSection'>
                <button className="fas fa-trash" onClick={() => removeOrder()} />
                <button disabled>Editar Orden</button>
            </div>
        </div>
    )
}

export default OrderDetailTable
