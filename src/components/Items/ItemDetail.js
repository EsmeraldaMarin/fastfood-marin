import React from 'react'
import ItemCount from '../ItemCount';


const ItemDetail = ({ id, title, description, pictureUrl, price }) => {

    return (
        <div className="itemDetail">
            <img src={pictureUrl} alt={title} />
            <div>
                <p className="t">{title}</p>
                <p className="d">{description}</p>
                <p className="p">${price}</p>
                <ItemCount initial={1} stock={5} onAdd={true} product={title} />

            </div>
        </div>
    )
}

export default ItemDetail
