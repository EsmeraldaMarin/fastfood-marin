import { Link } from 'react-router-dom';
import Item from './Item';

const ItemList = ({items, loading, error}) => {

    return (
        <ul>
            {loading && <p>Cargando...</p>}
            {error && (<p>Ha habido un error: {error.status} {error.statusText}</p>)}
            {
                items?.map((item) => {
                    return (
                        <Link to={`/item/${item.id}`} key={item.id}>
                            <Item
                                title={item.title}
                                pictureUrl={item.pictureUrl}
                                price={item.price}
                                description={item.description}
                            />
                        </Link>
                    )
                })
            }
        </ul>
    )
}

export default ItemList
