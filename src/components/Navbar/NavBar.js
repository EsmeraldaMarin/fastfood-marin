import CartWidget from "../Cart/CartWidget";
import { Link, NavLink } from 'react-router-dom';
import { UseCart } from '../../context/CartContext'
import BurgerMenu from "./BurgerMenu";
import { useEffect, useState } from "react";
import GetCategories from "../FirebaseRequest/GetCategories";

function NavBar() {

    const { totalQuantity } = UseCart();
    const [burgerMenu, setBurgerMenu] = useState(false);
    const [categories, setCategories] = useState([])

    const toggleBurgerMenu = () => burgerMenu ? setBurgerMenu(false) : setBurgerMenu(true)

    useEffect(() => GetCategories(setCategories), [])

    return (
        <header id='header' className={burgerMenu ? 'bMenuActive' : ''}>
            <BurgerMenu toggleBurgerMenu={toggleBurgerMenu} />
            <nav className='navbar' id='navBar'>
                <ul>
                    <li><NavLink exact to='/' activeClassName='selected'>Home</NavLink></li>
                    {categories?.map(category => {
                        return <li key={category.key}><NavLink to={`/category/${category.key}`} activeClassName='selected'>{category.name}</NavLink></li>
                    })}
                </ul>
            </nav>
            <Link to="/" className='logo'>FastFood</Link>
            <CartWidget numProducts={totalQuantity()} />

        </header>
    )
}
export default NavBar;