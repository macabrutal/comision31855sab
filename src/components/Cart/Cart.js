import { useContext } from "react"
import './Cart.css'
import CartContext from '../../context/CartContext'
import { Link } from 'react-router-dom'

const Cart = () => {

    const { cart, clearCart,getTotal, removeItem, getQuantity} = useContext(CartContext)

    if (getQuantity() === 0) {
        return (
            <div className="carrito-vacio">
                <h2>El carrito no tiene productos </h2>  
                <h5>Te invitamos a ver nuestros cuadros</h5>  
                <div className="catalogo">
                    <Link className="bot-productos" to='/'> Ver productos</Link>
                </div>
            </div>
        )
    }
    return(
        <div className="cart">
            <h1>Tu carrito de compras:</h1>
            <hr></hr>
            <ul>
                {cart.map(prod => 
                <li key={prod.id}>{prod.nombre}  |  precio: ${prod.precio}  |  Cant: {prod.quantity}  |  Subtotal: ${prod.precio * prod.quantity} <button className="bot-removeItem" onClick={() => removeItem(prod.id)}>Eliminar</button></li>
                )}
            </ul>
            <h3 className="total"> Precio total: ${getTotal()}</h3>
            <footer>
            <button onClick={clearCart} className="bot-vaciar">Vaciar carrito</button>
            </footer>
        </div>
    )
}

export default Cart