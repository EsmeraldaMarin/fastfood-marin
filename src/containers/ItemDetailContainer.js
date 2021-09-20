import React, { useEffect, useState } from 'react'
import ItemDetail from '../components/Items/ItemDetail';


/*  const [product, setProduct] = useState({})
    const { id } = useParams()
    useEffect(() => {
        fetch(`http://localhost:3001/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
            .catch(err => console.log(err))
    }, [id]) */

const getItem = () => {
    return new Promise((res) => {
        setTimeout(() => {
            res({
                id: "1",
                title: "hamburguesa",
                price: 500,
                pictureUrl: "https://d1uz88p17r663j.cloudfront.net/original/8689e8d974203563ddcc9bbff91323c2_MG_CHORIZOBURGER_Main-880x660.png",
                description: "Hamburguesa simple con cebolla, tomate, lechuga"
            })
        }, 2000);
    });

}

const ItemDetailContainer = () => {

    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getItem()
            .then((data) => setItem(data))
            .finally(()=> setLoading(false))
    }, []);

    if(loading){
        return <p>Cargando...</p>
    }else{
        return (
            <div className="itemDetailCtn">
    
                < ItemDetail
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
