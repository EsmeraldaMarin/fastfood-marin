import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
        <>
            {
                stock === 0 ?
                    <div className="itemCountCtn" style={{ textTransform: 'none', backgroundColor: 'transparent', padding: 0 }}>
                        <p>Sin stock</p>
                        <Link to='/' style={{ color: '#ffb830', textDecoration: 'underline' }}>Volver al inicio</Link>
                    </div>
                    :
                    <div className="itemCountCtn">
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
            }
        </>
    )
}

export default ItemCount

