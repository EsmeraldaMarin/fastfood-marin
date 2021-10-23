import React, { useEffect } from 'react'
import { useState } from 'react';
import { getFirestore } from '../../firebase';
import CategoryBtn from './CategoryBtn';

const CategoryFilter = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        const db = getFirestore();
        let productsCollection = db.collection('categories')

        productsCollection
            .get()
            .then(querySnapshot => setCategories(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))))
            .catch((error) => console.log(error))

    }, [])

    return (
        <div className='categoryFilter'>
            {categories?.map(categoryInfo => <CategoryBtn categoryInfo={categoryInfo} key= {categoryInfo.id}/>)}
        </div>
    )
}

export default CategoryFilter

