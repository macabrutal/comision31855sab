  import './CartWidget.css'
  import { useContext } from 'react';
  import { Link } from 'react-router-dom'
  import CartContext  from '../../context/CartContext'

  const CartWidget = () => {
  
      const { getQuantity } = useContext(CartContext)

  return(
    <Link to={'/'} className="CartWidget">
       <a id="botonCarrito" data-bs-toggle="modal" data-bs-target="#idModal" class="btn btn-carro ">  
          <i class="fas fa-shopping-cart fa-1x"></i></a>
        { getQuantity() }
    </Link>
);
}

    // return(
    //     <div>
      
    //   <ul className="navbar-nav me-auto">
    //     <li className="nav-item ">
    //       <Link to={'/'}>
    //       <a id="botonCarrito" data-bs-toggle="modal" data-bs-target="#idModal" class="btn btn-carro ">  
    //         <i class="fas fa-shopping-cart fa-1x"></i></a>
    //         </Link>
    //     </li>
    //     <li>10</li>
    //   </ul>
    //     </div>
    // )



export default CartWidget