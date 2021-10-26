import React from 'react'

const Item = ({ title, price, pictureUrl, description, stock }) => {
    return (
        <li className="itemProduct">
            <img src={pictureUrl} alt={title} />
            <p>{title}</p>
            <p className='description'>{description}</p>

            {stock === 0 && <div className='sinStock'>Sin stock</div>}
            <p className="productPrice">${price}</p>

        </li>
    )
}

export default Item


