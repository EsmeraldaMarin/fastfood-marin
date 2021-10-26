import { Link } from 'react-router-dom';
import Item from './Item';

const ItemList = ({ items, loader }) => {
    return (
        <ul className='itemList'>
            {loader && <div className="loader"><div id="loader-1"></div></div>}
            {
                items?.map((item) => {
                    return (
                        <Link to={`/item/${item.id}`} key={item.id}>
                            <Item
                                title={item.title}
                                pictureUrl={item.pictureUrl}
                                price={item.price}
                                description={item.description}
                                stock= {item.stock}
                            />
                        </Link>
                    )
                })
            }
        </ul>
    )
}

export default ItemList
