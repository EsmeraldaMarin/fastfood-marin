import React from 'react';
import { Link } from 'react-router-dom';


const itemOnCart = ({ item, removeItem }) => {

    const price = item.price * item.quantity;

    return (
        <li className='itemOnCartDetail'>
            <img src={item.pictureUrl} alt={item.title} />
            <div>
                <Link to={`/item/${item.id}`} >
                    <h3>{item.title}</h3>
                    <span>x {item.quantity} unidades</span>
                </Link>
            </div>
            <span>${price}</span>
            <button onClick={() => removeItem(item.id)}>Eliminar</button>
        </li>
    )
}

export default itemOnCart
