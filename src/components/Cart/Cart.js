import { useContext } from "react"
import './Cart.css'
import CartContext from '../../context/CartContext'

const Cart = () => {

    const { cart, clearCart} = useContext(CartContext)

    return(
        <div>
            <h1>Tu carrito de compras:</h1>
            <ul>
                {cart.map(prod => 
                <li key={prod.id}>{prod.nombre}</li>
                )}
            </ul>
            <button onClick={clearCart} className="bot-vaciar">Vaciar carrito</button>
        </div>
    )
}

export default Cart