import React from 'react'
import { Link } from 'react-router-dom'

const CategoryBtn = ({ categoryInfo }) => {
    return (
        <Link to={`/category/${categoryInfo.key}`} className='categoryBtn'>
            <img alt={categoryInfo.name} src={categoryInfo.img} />
            <p>{categoryInfo.name}</p>
        </Link>
    )
}

export default CategoryBtn
