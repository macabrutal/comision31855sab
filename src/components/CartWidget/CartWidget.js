  import './CartWidget.css'
  import { useContext } from 'react';
  import { Link } from 'react-router-dom'
  import CartContext  from '../../context/CartContext'

  const CartWidget = () => {
  
      const { getQuantity } = useContext(CartContext) //función que retorna la cantidad de productos

  return(
    <Link to={'/'} className="CartWidget">
       <a id="botonCarrito" className='btn btn-carro'>  
          <i class="fas fa-shopping-cart fa-1x"></i></a>
        { getQuantity() }
    </Link>
);
}

export default CartWidget