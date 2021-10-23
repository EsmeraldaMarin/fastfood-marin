import CartWidget from "../CartWidget";
import { Link, NavLink } from 'react-router-dom';
import { UseCart } from '../../context/CartContext'
import BurgerMenu from "./BurgerMenu";
import { useState } from "react";

function NavBar() {

    const { totalQuantity } = UseCart();
    const [burgerMenu, setBurgerMenu] = useState(false);

    const toggleBurgerMenu = () => burgerMenu ? setBurgerMenu(false) : setBurgerMenu(true)
    
    //cierra el menu si el user clickea fuera de el
    document.addEventListener('click', function (event) {
        if(event.target.id){
            if (event.target.parentElement.id !== 'header' && event.target.id !== 'navBar') {
                setBurgerMenu(false)
            }
        }
    });

    return (
        <header id='header' className={burgerMenu ? 'bMenuActive' : ''}>
            <BurgerMenu toggleBurgerMenu={toggleBurgerMenu} />
            <nav className='navbar' id='navBar'>
                <ul>
                    <li><NavLink exact to='/' activeClassName='selected'>Home</NavLink></li>
                    <li><NavLink to='/category/1' activeClassName='selected'>Comida Rápida</NavLink></li>
                    <li><NavLink to='/category/2' activeClassName='selected'>Pasta</NavLink></li>
                    <li><NavLink to='/category/3' activeClassName='selected'>Bebidas</NavLink></li>
                    <li><NavLink to='/category/4' activeClassName='selected'>Postres</NavLink></li>
                </ul>
            </nav>
            <Link to="/" className='logo'>FastFood</Link>
            <CartWidget numProducts={totalQuantity()} />

        </header>
    )
}
export default NavBar;