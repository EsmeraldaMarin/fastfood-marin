import React, { useState, useEffect } from 'react';

const ItemCount = ({ stock, initial, onAdd, item }) => {

    const [count, setCount] = useState(initial);

    useEffect(() => {
        onAdd(item.id, count)
    }, [count])

    const substrCount = () => {
        if (count > 1) { setCount((prevCount) => prevCount - 1) }
    }
    const increaseCount = () => {
        if (count < stock) { setCount((prevCount) => prevCount + 1) }
    }
    return (
        <div className="itemCountCtnSimple">
            <button onClick={substrCount}>-</button>
            <p>{count}</p>
            <button onClick={increaseCount}>+</button>

        </div>
    )
}

export default ItemCount

