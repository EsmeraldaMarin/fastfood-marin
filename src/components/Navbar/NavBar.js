import CartWidget from "../CartWidget";
import { Link } from 'react-router-dom';
import { UseCart } from '../../context/CartContext'
import BurgerMenu from "./BurgerMenu";
import { useState } from "react";

function NavBar() {

    const { totalQuantity } = UseCart();
    const [burgerMenu, setBurgerMenu] = useState(false);

    const toggleBurgerMenu = () => burgerMenu ? setBurgerMenu(false) : setBurgerMenu(true)

    return (
        <header className={burgerMenu ? 'bMenuActive' : ''}>
            <BurgerMenu toggleBurgerMenu={toggleBurgerMenu} />
            <nav className='navbar'>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/category/1'>Comida Rápida</Link></li>
                    <li><Link to='/category/2'>Pasta</Link></li>
                    <li><Link to='/category/3'>Bebidas</Link></li>
                </ul>
            </nav>
            <Link to="/" className='logo'>FastFood</Link>
            <CartWidget numProducts={totalQuantity()} />

        </header>
    )
}
export default NavBar;