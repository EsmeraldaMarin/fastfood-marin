import React from 'react'
import CategoryFilter from '../components/CategoryFilter/CategoryFilter'
import GreetinMsg from '../components/GreetinMsg'
import ItemListContainer from '../containers/ItemListContainer'

const Home = () => {

    return (
        <div className='home'>
            <GreetinMsg greeting="Hola, Usuario"  />
            <CategoryFilter/>
            <h3>Populares</h3>
            <ItemListContainer/>
        </div>
    )
}

export default Home
