// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar/Navbar';
import ItemCount from './components/ItemCount/ItemCount';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import {useState} from 'react'



function App() {
//const [show, setShow] = useState(true)

// //función que va contando
// const onAdd = (quantity) => {
//   console.log(quantity)
// }

  return (
    <div className="App">
      <Navbar/>
      <div className='contenedor'>
        <ItemListContainer greeting = "¡Bienvenidos!"/>
        {/* <ItemCount initial={1} stock={20} onAdd={onAdd}/> */}
      </div>
    </div>
  );
}

export default App;
