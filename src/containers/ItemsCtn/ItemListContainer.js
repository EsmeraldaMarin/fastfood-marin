import ItemList from "../../components/Items/ItemList";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import NotFound from '../../pages/NotFound'
import getProduct, { getCategoryByKey } from "../../components/FirebaseRequest/GetProducts";

const ItemListContainer = () => {

    const [items, setItems] = useState([]);
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState(null);
    const [bannerText, setBannerText] = useState(false)
    const { categoryKey } = useParams();

    useEffect(() => {
        getProduct(categoryKey, setLoader, setItems, setError)
        getCategoryByKey(categoryKey, setBannerText)

    }, [categoryKey]);
    return (
        <div className="itemListContainer">
            {bannerText && <div className='titleBanner'>{bannerText}</div>}
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

