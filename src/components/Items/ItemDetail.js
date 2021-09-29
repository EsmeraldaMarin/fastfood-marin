import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import ItemCount from '../ItemCount';
import { useCart } from '../../context/CartContext'

const ItemDetail = ({ item }) => {

    const { addItem } = useCart();
    const [finalizeBtn, setFinalizeBtn] = useState(false)

    const addItemToCart = (item, quantity) => {

        addItem(item, quantity);
        setFinalizeBtn(true)
    }

    return (
        <div className="itemDetail">
            <img src={item.pictureUrl} alt={item.title} />
            <div>
                <p className="t">{item.title}</p>
                <p className="d">{item.description}</p>
                <p className="p">${item.price}</p>
                {
                    !finalizeBtn ?
                        <ItemCount initial={1} stock={5} onAdd={addItemToCart} item={item} /> :
                        <Link className='finalizeBtn' to='/cart'>Finalizar compra</Link>
                }
            </div>
        </div>
    )
}

export default ItemDetail
