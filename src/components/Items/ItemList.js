import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Item from './Item';

const products = [
    {
        id: "1",
        title: "hamburguesa",
        price: 500,
        pictureUrl: "https://d1uz88p17r663j.cloudfront.net/original/8689e8d974203563ddcc9bbff91323c2_MG_CHORIZOBURGER_Main-880x660.png",
        description: "Hamburguesa simple con cebolla, tomate, lechuga"
    },
    {
        id: "2",
        title: "papas fritas",
        price: 250,
        pictureUrl: "https://images-gmi-pmc.edge-generalmills.com/476c10e1-c851-4539-8e3b-4b49323927c5.jpg",
        description: ""
    },
    {
        id: "3",
        title: "nuggets",
        price: 300,
        pictureUrl: "https://bakeitwithlove.com/wp-content/uploads/2021/05/Air-Fryer-Chicken-Nuggets-sq.jpg",
        description: "Nuggets de pollo con adhereso"
    },
    {
        id: "4",
        title: "pizza",
        price: 400,
        pictureUrl: "https://w6h5a5r4.rocketcdn.me/wp-content/uploads/2019/06/pizza-con-chorizo-jamon-y-queso-1080x671.jpg",
        description: "Nuggets de pollo con adhereso"
    },
    {
        id: "5",
        title: "pancho",
        price: 150,
        pictureUrl: "https://blog.facilitas.com.ar/wp-content/uploads/2018/08/Blogpost-8-1160x628.jpeg",
        description: "Nuggets de pollo con adhereso"
    },
    {
        id: "6",
        title: "milanesas",
        price: 330,
        pictureUrl: "https://placeralplato.com/files/2016/01/Milanesas-de-pollo-al-horno.jpg",
        description: "Nuggets de pollo con adhereso"
    },
    {
        id: "7",
        title: "papas fritas con cheddar",
        price: 300,
        pictureUrl: "https://ver.rosario.gob.ar/media/cache/d7/17/d7177d59637b7f2681ff684693632210.png",
        description: "Nuggets de pollo con adhereso"
    },
    {
        id: "8",
        title: "empanadas",
        price: 600,
        pictureUrl: "https://cdn.kiwilimon.com/recetaimagen/69/th5-640x640-11549.jpg",
        description: "Nuggets de pollo con adhereso"
    },
]
const ItemList = () => {

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    useEffect(() => {
        setLoading(true);
        getProducts()
            /* .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw response;
                }
            }) */
            .then((result) => setItems(result))
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    }, []);

    const getProducts = () => {
        return new Promise((resolve) => {
            setTimeout(() => resolve(products), 3000);
        });
    };

    return (
        <ul>
            {loading && <p>Cargando...</p>}
            {error && (<p>Ha habido un error: {error.status} {error.statusText}</p>)}
            {
                items?.map((product) => {
                    return (
                        <Link to={`/product/${product.id}`} key={product.id}>
                            <Item
                                title={product.title}
                                pictureUrl={product.pictureUrl}
                                price={product.price}
                                description={product.description}
                            />
                        </Link>
                    )
                })
            }
        </ul>
    )
}

export default ItemList
