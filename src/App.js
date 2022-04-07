// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import ItemCount from './components/ItemCount/ItemCount';

import {useState} from 'react'



function App() {
//const [show, setShow] = useState(true)

// //función que va contando
// const onAdd = (quantity) => {
//   console.log(quantity)
// }

  return (
    <div className="App">
      <BrowserRouter>
          <Navbar/>
          <div className='contenedor'>
            {/* <ItemListContainer greeting = "¡Bienvenidos!"/> */}
                <Routes>
                  <Route path='/' element={<ItemListContainer greeting={'¡Bienvenidos!'}/>}/>
                  <Route path='/category/:categoryId' element={<ItemListContainer greeting={'¡Bienvenidos!'}/>} />
                  <Route path='/detail/:productId' element={<ItemDetailContainer />} />
                </Routes>
            {/* <ItemCount initial={1} stock={20} onAdd={onAdd}/> */}
          </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
