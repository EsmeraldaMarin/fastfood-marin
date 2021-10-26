import { Link } from "react-router-dom"

const CartWidget = ({ numProducts }) => {
    return (
        <Link to='/cart' className={numProducts === 0 ? 'disabled' : "cartWidget"}>
            <i className="fas fa-shopping-cart"></i>
            <span>{numProducts}</span>
        </Link>
    )
}

export default CartWidget
