const CartWidget = ({numProducts}) => {
    return (
        <div className="cartWidget">
            <i className="fas fa-shopping-cart"></i>
            <span>{numProducts}</span>
        </div>
    )
}

export default CartWidget
