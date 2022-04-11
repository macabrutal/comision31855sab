import { useContext } from "react"
import './Cart.css'
import CartContext from '../../context/CartContext'

const Cart = () => {

    const { cart, clearCart} = useContext(CartContext)

    return(
        <div className="cart">
            <h1>Tu carrito de compras:</h1>
            <hr></hr>
            <ul>
                {cart.map(prod => 
                <li key={prod.id}>{prod.nombre}</li>
                )}
            </ul>
            <footer>
            <button onClick={clearCart} className="bot-vaciar">Vaciar carrito</button>
            </footer>
        </div>
    )
}

export default Cart