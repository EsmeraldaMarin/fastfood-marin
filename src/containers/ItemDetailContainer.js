import React, { useEffect, useState } from 'react'
import ItemDetail from '../components/Items/ItemDetail';
import { useParams } from 'react-router';


const ItemDetailContainer = () => {

    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true)
        fetch(`http://localhost:3001/products/${id}`)
            .then(res => res.json())
            .then(data => setItem(data))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))

    }, [id])


    if (loading) {
        return <p>Cargando...</p>
    } else {
        return (
            <div className="itemDetailCtn">
                <h2>Detalle del producto</h2>
                < ItemDetail
                    item = {item}
                    id={item?.id}
                    title={item?.title}
                    price={item?.price}
                    pictureUrl={item?.pictureUrl}
                    description={item?.description}
                />

            </div>
        )
    }
}

export default ItemDetailContainer
