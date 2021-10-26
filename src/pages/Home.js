import React from 'react'
import CategoryFilter from '../components/CategoryFilter/CategoryFilter'
import GreetinMsg from '../components/GreetingMsg/GreetingMsg'
import ItemListContainer from '../containers/ItemsCtn/ItemListContainer'

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
