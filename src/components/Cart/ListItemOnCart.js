import React from 'react';
import ItemOnCart from './ItemOnCart'

const ListItemOnCart = ({ cart, removeItem }) => {

    return (

        <ul className="listItemOnCart">
            {
                cart?.map((item) => {

                    return (
                        <ItemOnCart key={item.id} item={item} removeItem={removeItem} />

                    )
                })
            }
        </ul>
    )
}

export default ListItemOnCart
