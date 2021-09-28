import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import ItemCount from '../ItemCount';


const ItemDetail = ({ item}) => {

    const [productOnAdd, setProductOnAdd] = useState({})

    const onAddFuncion = ({product, count}) => {
        
        setProductOnAdd({product, count})
        console.log(`Has añadido al carrito ${count} productos ${product.title}`);
        console.log(productOnAdd)
    }

    return (
        <div className="itemDetail">
            <img src={item.pictureUrl} alt={item.title} />
            <div>
                <p className="t">{item.title}</p>
                <p className="d">{item.description}</p>
                <p className="p">${item.price}</p>
                {!productOnAdd.product ? <ItemCount initial={1} stock={5} onAdd={onAddFuncion} product={item} /> : <Link className='finalizeBtn' to='/cart'>Finalizar compra</Link>}
            </div>
        </div>
    )
}

export default ItemDetail
