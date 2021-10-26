import React, { useEffect } from 'react'
import { useState } from 'react';
import GetCategories from '../FirebaseRequest/GetCategories';
import CategoryBtn from './CategoryBtn';

const CategoryFilter = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => GetCategories(setCategories), [])

    return (
        <div className='categoryFilter'>
            {categories?.map(categoryInfo => <CategoryBtn categoryInfo={categoryInfo} key= {categoryInfo.id}/>)}
        </div>
    )
}

export default CategoryFilter

