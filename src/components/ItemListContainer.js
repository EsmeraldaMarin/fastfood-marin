import ItemCount from "./ItemCount"

const ItemListContainer = ({ greeting }) => {

    const onAddFuncion = (lala) => {
        alert( lala)
    }

    return (
        <div>
            <h2>{greeting}</h2>
            <ItemCount stock={5} initial={1} onAdd={onAddFuncion} product="Mochila" />
        </div>
    )
}

export default ItemListContainer

