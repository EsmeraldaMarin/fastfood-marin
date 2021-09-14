import ItemCount from "../components/ItemCount"
import ItemList from "../components/Items/ItemList";

const ItemListContainer = ({ greeting }) => {

    //modificar funcion 
    const onAddFuncion = (product) => {
        console.log(`Has añadido al carrito el producto: ${product}`);

    }

    return (
        <div className="itemListContainer">
            <h2 className="greetingMsg" >{greeting}</h2>
            <ItemCount stock={5} initial={1} onAdd={onAddFuncion} product="Mochila" />
            <ItemList />
        </div>
    )
}

export default ItemListContainer

