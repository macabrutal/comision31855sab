// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {useState, createContext} from 'react'
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {CartContextProvider} from './context/CartContext';
import Cart from './components/Cart/Cart';
// import ItemCount from './components/ItemCount/ItemCount';



// export const CartContext = createContext()

function App() {
// const [cart, setCart] = useState([])


  return (
    <div className="App">
      {/* <CartContext.Provider value={0}>   */}
        <CartContextProvider>
            <BrowserRouter>
                <Navbar/>
                <div className='contenedor'>
                      <Routes>
                        <Route path='/' element={<ItemListContainer/>}/>
                        <Route path='/category/:categoryId' element={<ItemListContainer greeting={'¡Bienvenidos!'}/>} />
                        <Route path='/detail/:productId' element={<ItemDetailContainer />} /> {/* funcion que agrega al carrito: addToCart */}
                        <Route path='/cart' element={<Cart/>} />
                      </Routes>
                  {/* <ItemCount initial={1} stock={20} onAdd={onAdd}/> */}
                </div>
            </BrowserRouter>
        </CartContextProvider>
        {/* </CartContext.Provider> */}
    </div>
  );
}

export default App;
