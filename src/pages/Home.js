import React from 'react'
import ItemListContainer from '../containers/ItemListContainer'
import ItemDetailContainer from '../containers/ItemDetailContainer'

const Home = () => {
    return (
        <div>
            <ItemListContainer greeting="Welcome, UserX" />
          
           {/* CUIDADO AL RENDERIZAR ESTO*/}
            <ItemDetailContainer />
        </div>
    )
}

export default Home
