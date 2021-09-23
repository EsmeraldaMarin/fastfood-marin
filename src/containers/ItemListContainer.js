import ItemList from "../components/Items/ItemList";
import { useParams } from "react-router";
import { useState, useEffect } from "react";

const ItemListContainer = ({ greeting }) => {


    const [items, setItems] = useState([]);
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState(null);
    const { categoryId } = useParams();

    useEffect(() => {

        setLoader(true);
        fetch('http://localhost:3001/products')

            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw response;
                }
            })
            .then((result) => {
                setItems(result);
            })
            .catch((error) => setError(error))
            .finally(() => setLoader(false));
    }, [categoryId]);

    //para diferenciar entre la ruta '/' y la ruta '/category/:id' utilizo el condicional
    const categoryFilter = items.filter((item) =>  categoryId === undefined ? item : categoryId === item.category.toString() )

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

