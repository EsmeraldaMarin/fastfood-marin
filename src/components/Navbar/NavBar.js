import CartWidget from "../CartWidget";
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext'

function NavBar() {

    const { cart } = useCart();

    return (
        <nav className="navbar">
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/category/1'>Comida Rápida</Link></li>
                <li><Link to='/category/2'>Pasta</Link></li>
                <li><Link to='/category/3'>Bebidas</Link></li>
            </ul>
            <Link to="/">FastFood</Link>
            <CartWidget numProducts={cart.length} />
        </nav>
    )
}
export default NavBar;