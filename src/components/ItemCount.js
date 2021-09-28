import React, { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd, product }) => {

    const [count, setCount] = useState(initial);

    const substrCount = () => {
        if (initial !== count) { setCount((prevCount) => prevCount - 1) }
    }
    const increaseCount = () => {
        if (count < stock) { setCount((prevCount) => prevCount + 1) }
    }

    const productOnAddDetails = () => { onAdd({count, product }) }


    return (
        <div className="itemCountCtn">
            <span>{product.title}</span>
            <div className="counter">
                <button onClick={substrCount}>-</button>
                <p>{count}</p>
                <button onClick={increaseCount}>+</button>
            </div>
            <button
                className="addProdBtn"
                onClick={productOnAddDetails}
            > Agregar al carrito</button>
        </div>
    )
}

export default ItemCount

