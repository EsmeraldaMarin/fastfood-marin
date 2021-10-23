import React from 'react'

const BurgerMenu = ({ toggleBurgerMenu }) => {

    return (
        <div className="burguerMenu" onClick={(e) => {
            e.stopPropagation()
            toggleBurgerMenu();
        }} id='burgerMenu'>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

export default BurgerMenu
