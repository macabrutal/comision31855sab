import React from "react";
import "./Navbar.css";
import CartWidget from "../CartWidget/CartWidget"

const Navbar = () =>{
    return(
//         <nav>
//             <img src={logo_dark} alt ="logo"></img>
// <ul>
//     <li>Nosotros</li>
//     <li>Proyectos</li>
//     <li>Contacto</li>
// </ul>
// <CartWidget/>
//         </nav>

<nav className="navbar navbar-expand-lg navbar-dark nav">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Maca y su arte</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarColor01">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <a className="nav-link active" href="#">Home
            <span className="visually-hidden">(current)</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Medidas</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Precios</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Conversemos</a>
        </li>
      
        <CartWidget/>
      </ul>
     
      <form className="d-flex">
        {/* <input className="form-control me-sm-2" type="text" placeholder="Search"> */}
        {/* <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button> */}
      </form>
    </div>
  </div>
</nav>
        
    )
}

export default Navbar