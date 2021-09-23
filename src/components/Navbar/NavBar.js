import CartWidget from "../CartWidget";
import {Link} from 'react-router-dom';

function NavBar() {
    return (
        <nav className="navbar">
            <ul>
                <Link to='/'><li>Home</li></Link>
                <Link to='/category/1'><li>Comida Rápida</li></Link>
                <Link to='/category/2'><li>Pasta</li></Link>
                <Link to='/category/3'><li>Bebidas</li></Link>
            </ul>
            <Link to="/">FastFood</Link>
            <CartWidget />
        </nav>
    )
}
export default NavBar;