function NavBar() {
    return (
        <nav className="navbar">
            <span>FastFood</span>
            <ul>
                <li>Home</li>
                <li>Food</li>
                <li>Drinks</li>
                <li>Vegan</li>
                <li>About Us</li>
            </ul>
            <button className='loginBtn'>LogIn</button>
        </nav>
    )
}
export default NavBar;