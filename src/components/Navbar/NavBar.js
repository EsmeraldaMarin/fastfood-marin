import CartWidget from "../CartWidget";
import {Link} from 'react-router-dom';

function NavBar() {
    return (
        <nav className="navbar">
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/counter'>Counter</Link></li>
                <li>Drinks</li>
                <li>Vegan</li>
            </ul>
            <Link to="/">FastFood</Link>
            <CartWidget />
            <button className='loginBtn'>LogIn</button>
        </nav>
    )
}
export default NavBar;