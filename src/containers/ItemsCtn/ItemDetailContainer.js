import React, { useEffect, useState } from 'react'
import ItemDetail from '../../components/Items/ItemDetail';
import { useParams } from 'react-router';
import { getProductById } from '../../components/FirebaseRequest/GetProducts';


const ItemDetailContainer = () => {

    const [item, setItem] = useState({});
    const [loader, setLoader] = useState(false);
    const { id } = useParams();

    useEffect(() => getProductById(id, setLoader, setItem), [id])

    if (loader) {
        return <div className="loader"><div id="loader-1"></div></div>
    } else {
        return (
            <div className="itemDetailCtn">
                <h2>Detalle del producto</h2>
                < ItemDetail item={item} />

            </div>
        )
    }
}

export default ItemDetailContainer
