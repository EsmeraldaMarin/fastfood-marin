import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundModal = () => {
    return (
        <div className='notFound'>
            <img src='https://i.ibb.co/N95y9Rh/4.png' alt='Page not found'/>
            <p>Ups! Algo salió mal</p>
            <Link to='/'> Volver al Inicio</Link>
        </div>
    )
}

export default NotFoundModal
