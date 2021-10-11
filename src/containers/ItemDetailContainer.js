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
        setLoading(true)
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
