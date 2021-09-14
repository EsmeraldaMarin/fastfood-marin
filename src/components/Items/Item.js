import React from 'react'


const Item = ({ title, price, pictureUrl, description }) => {
    return (
        <li className="itemProduct">
            <img src={pictureUrl} alt={title} />
            <p>{title}</p>
            <p className="productPrice">${price}</p>
        </li>
    )
}

export default Item


