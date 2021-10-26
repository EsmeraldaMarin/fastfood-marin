import { Link } from 'react-router-dom';
import { UseCart } from '../../context/CartContext';
import ItemCountSimple from '../Counters/ItemCountSimple';

const itemOnCart = ({ item, removeItem }) => {

    const price = item.price * item.quantity;

    const { updateItemOnCart } = UseCart();

    const updateItemOnCartFunction = (id, quantity) => updateItemOnCart(id, quantity);

    return (
        <li className='itemOnCartDetail'>
            <img src={item.pictureUrl} alt={item.title} />
            <div>
                <Link to={`/item/${item.id}`} >
                    <h3>{item.title}</h3>
                    <span>x {item.quantity} unidades</span>
                </Link>
            </div>
            <ItemCountSimple stock={item.stock} initial={item.quantity} onAdd={updateItemOnCartFunction} item={item} />
            <span>${price}</span>
            <button onClick={() => removeItem(item.id)} className="fas fa-trash" />
        </li>
    )
}

export default itemOnCart
