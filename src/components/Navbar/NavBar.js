import CartWidget from "../CartWidget";

function NavBar() {
    return (
        <nav className="navbar">
            <ul>
                <li>Home</li>
                <li>Food</li>
                <li>Drinks</li>
                <li>Vegan</li>
            </ul>
            <span>FastFood</span>
            <CartWidget />
            <button className='loginBtn'>LogIn</button>
        </nav>
    )
}
export default NavBar;