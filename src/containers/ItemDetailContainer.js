import React, { useEffect, useState } from 'react'
import ItemDetail from '../components/Items/ItemDetail';
import { useParams } from 'react-router';
import { getFirestore } from '../firebase';


const ItemDetailContainer = () => {

    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const productsCollection = db.collection('products');
        const product = productsCollection.doc(id);

        product
            .get()
            .then(doc => {
                if (!doc.exists) {
                    console.log('el producto no existe')
                } else {
                    setItem({ id: doc.id, ...doc.data() })
                }
            })
            .catch((error) => console.log(error))
            .finally(() => setLoading(false));

    }, [id])


    if (loading) {
        return <p>Cargando...</p>
    } else {
        return (
            <div className="itemDetailCtn">
                <h2>Detalle del producto</h2>
                < ItemDetail
                    item={item}
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
