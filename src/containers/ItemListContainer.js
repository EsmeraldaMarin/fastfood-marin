import ItemList from "../components/Items/ItemList";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { getFirestore } from "../firebase";
import CategoryFilter from "../components/CategoryFilter/CategoryFilter";
import NotFound from '../pages/NotFound'

const ItemListContainer = ({ greeting }) => {

    const [items, setItems] = useState([]);
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState(null);
    const { categoryKey } = useParams();

    useEffect(() => {

        //reseteo de error 
        if (error) { setError(null) }
        
        const db = getFirestore();

        //filter. It can return all items or by their category
        let productsCollection = categoryKey ? db.collection('products').where('category', '==', parseInt(categoryKey)) : db.collection('products');

        setLoader(true)
        productsCollection
            .get()
            .then(querySnapshot => {
                if (querySnapshot.empty) {
                    throw new Error('Ha ocurrido un error')
                } else {
                    setItems(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
                }
            })
            .catch((error) => setError(error))
            .finally(() => setLoader(false));

    }, [categoryKey]);

    return (
        <div className="itemListContainer">
            {
                error ?
                    <NotFound /> :
                    <ItemList
                        loader={loader}
                        error={error}
                        items={items}
                    />
            }
        </div>
    )
}

export default ItemListContainer

