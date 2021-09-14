import React, {useState, useEffect} from 'react'
import Item from './Item';

const products = [
    {
        id: "1",
        title: "burger",
        price: 300,
        pictureUrl: "https://d1uz88p17r663j.cloudfront.net/original/8689e8d974203563ddcc9bbff91323c2_MG_CHORIZOBURGER_Main-880x660.png",
        description:"Hamburguesa simple con cebolla, tomate, lechuga"
    },
    {
        id: "2",
        title: "chips",
        price: 150,
        pictureUrl: "https://images-gmi-pmc.edge-generalmills.com/476c10e1-c851-4539-8e3b-4b49323927c5.jpg",
        description:""
    },
    {
        id: "3",
        title: "nuggets",
        price: 200,
        pictureUrl: "https://bakeitwithlove.com/wp-content/uploads/2021/05/Air-Fryer-Chicken-Nuggets-sq.jpg",
        description:"Nuggets de pollo con adhereso"
    },
    {
        id: "3",
        title: "nuggets",
        price: 200,
        pictureUrl: "https://bakeitwithlove.com/wp-content/uploads/2021/05/Air-Fryer-Chicken-Nuggets-sq.jpg",
        description:"Nuggets de pollo con adhereso"
    },
    {
        id: "3",
        title: "nuggets",
        price: 200,
        pictureUrl: "https://bakeitwithlove.com/wp-content/uploads/2021/05/Air-Fryer-Chicken-Nuggets-sq.jpg",
        description:"Nuggets de pollo con adhereso"
    },
]
const ItemList = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        getProducts()
            .then((result) => setItems(result))
    }, []);

    const getProducts = () => {
        return new Promise((resolve) => {
            setTimeout(() => resolve(products), 3000);
        });
    };

    return (
        <ul>
            {
                items?.map((product) => {
                    return (
                        <Item
                            key={product.id}
                            title={product.title}
                            pictureUrl={product.pictureUrl}
                            price={product.price}
                            description={product.description}
                        />
                    )
                })
            }
        </ul>
    )
}

export default ItemList
