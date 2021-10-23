import React from 'react'

const BurgerMenu = ({ toggleBurgerMenu }) => {

    return (
        <div className="burguerMenu" onClick={toggleBurgerMenu}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

export default BurgerMenu
