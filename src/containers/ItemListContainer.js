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
        const productsCollection = db.collection('products');

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

    }, []);


    //para diferenciar entre la ruta '/' y la ruta '/category/:id' utilizo el condicional
    //modificar y usar el where
    //  const productsCollection = db.collection('products').where('price', '>', 300)
    const categoryFilter = items.filter((item) => categoryKey === undefined ? item : categoryKey === item.category.toString())

    return (
        <div className="itemListContainer">
            <h2 className="greetingMsg" >{greeting}</h2>
            <ItemList
                loader={loader}
                error={error}
                items={categoryFilter}
            />
        </div>
    )
}

export default ItemListContainer

