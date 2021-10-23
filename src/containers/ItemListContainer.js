import ItemList from "../components/Items/ItemList";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { getFirestore } from "../firebase";

const ItemListContainer = ({ greeting }) => {

    const [items, setItems] = useState([]);
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState(null);
    const { categoryKey } = useParams();

    useEffect(() => {

        const db = getFirestore();

        //filter. It can return all items or by their category
        let productsCollection = categoryKey ? db.collection('products').where('category', '==', parseInt(categoryKey)) : db.collection('products');

        setLoader(true)
        productsCollection
            .get()
            .then(querySnapshot => {
                if (querySnapshot.empty) {
                    console.log('no hay productos')
                } else {
                    setItems(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
                }
            })
            .catch((error) => setError(error))
            .finally(() => setLoader(false));

    }, [categoryKey]);

    return (
        <div className="itemListContainer">
            <div className="greetingMsg" >
                <p>{greeting ? greeting : 'Resultado'}!</p>
                <p>¿Qué te gustaría comer?</p>
            </div>
            <ItemList
                loader={loader}
                error={error}
                items={items}
            />
        </div>
    )
}

export default ItemListContainer

