import CartWidget from "../CartWidget";

function NavBar() {
    return (
        <nav className="navbar">
            <span>FastFood</span>
            <ul>
                <li>Home</li>
                <li>Food</li>
                <li>Drinks</li>
                <li>Vegan</li>
            </ul>
            <button className='loginBtn'>LogIn</button>
            <CartWidget />
        </nav>
    )
}
export default NavBar;