import React, { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd, item }) => {

    const [count, setCount] = useState(initial);

    const substrCount = () => {
        if (initial !== count) { setCount((prevCount) => prevCount - 1) }
    }
    const increaseCount = () => {
        if (count < stock) { setCount((prevCount) => prevCount + 1) }
    }

    const itemOnAddDetails = () => { onAdd(item, count) }


    return (
        <div className="itemCountCtn">
            <span>{item.title}</span>
            <div className="counter">
                <button onClick={substrCount}>-</button>
                <p>{count}</p>
                <button onClick={increaseCount}>+</button>
            </div>
            <button
                className="addProdBtn"
                onClick={itemOnAddDetails}
            > Agregar al carrito</button>
        </div>
    )
}

export default ItemCount

