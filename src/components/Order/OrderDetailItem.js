import React from 'react'

const OrderDetailItem = ({ item }) => {
    return (
        <li className='itemDetailOnOrder'>
            <div>{item.quantity}</div>
            <div>{item.title}</div>
            <div>${item.price}</div>
        </li>
    )
}

export default OrderDetailItem
