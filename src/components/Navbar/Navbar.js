import React from "react";
import "./Navbar.css";
import CartWidget from "../CartWidget/CartWidget"
import { Link } from 'react-router-dom'
import { useContext } from "react"
import CartContext from '../../context/CartContext'

const Navbar = () =>{

  //No mostrar carrito si no tengo producto (+ ver línea 39)
  // const {getQuantity} = useContext(CartContext)

    return(
<nav className="navbar navbar-expand-lg navbar-dark nav">
  <div className="container-fluid">
    <Link to='/'>
            <h5 className="logo" >Maca y su arte</h5>
        </Link>
        
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarColor01">
      <ul className="navbar-nav me-auto">
            <li className="nav-item">
            <Link to='/category/Personas' className="nav-link">Personas</Link>
            </li>

            <li className="nav-item">
            <Link to='/category/Animales' className="nav-link">Animales</Link>  
            </li>

            <li className="nav-item">
            <Link to='/category/Objetos' className="nav-link">Objetos</Link>  
            </li>
      </ul>
      {<CartWidget/>}
      {/* {getQuantity() > 0 && <CartWidget/>} */}
     
      <form className="d-flex">
       
      </form>
    </div>
  </div>
</nav>
        
    )
}

export default Navbar