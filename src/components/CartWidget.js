import { Link } from "react-router-dom"

const CartWidget = ({ numProducts }) => {
    return (
        <Link to='/cart' className="cartWidget">
            <i className="fas fa-shopping-cart"></i>
            <span>{numProducts}</span>
        </Link>
    )
}

export default CartWidget
