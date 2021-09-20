import React from 'react'
import ItemCount from "../components/ItemCount"


const Counter = () => {
    return (
        <div>
            <h1>Contador</h1>
            <ItemCount stock={5} initial={1} onAdd={true} product="Mochila" />

        </div>
    )
}

export default Counter
