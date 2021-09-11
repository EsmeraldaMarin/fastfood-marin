import React, { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd, product = "Product" }) => {

    const [count, setCount] = useState(initial);

    const substrCount = () => {
        if (initial !== count) { setCount((prevCount) => prevCount - 1) }
    }
    const increaseCount = () => {
        if (count < stock) { setCount((prevCount) => prevCount + 1) }
    }

    const addProductFunction = () => { onAdd(count) }


    return (
        <div className="itemCountCtn">
            <span>{product}</span>
            <div className="counter">
                <button onClick={substrCount}>-</button>
                <p>{count}</p>
                <button onClick={increaseCount}>+</button>
            </div>
            <button
                className="addProdBtn"
                onClick={addProductFunction}
            > Agregar al carrito</button>
        </div>
    )
}

export default ItemCount

