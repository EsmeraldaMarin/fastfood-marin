import ItemList from "../components/Items/ItemList";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import NotFound from '../pages/NotFound'
import getProduct from "../components/FirebaseRequest/GetProducts";

const ItemListContainer = ({ greeting }) => {

    const [items, setItems] = useState([]);
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState(null);
    const { categoryKey } = useParams();

    useEffect(() => {

        getProduct(categoryKey, setLoader, setItems, setError)

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

