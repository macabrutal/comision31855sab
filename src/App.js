// import logo from './logo.svg';
// import './App.css';

import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
//import FunctionCounter  from './components/ItemCount/ItemCount'
//import {useState} from 'react'



function App() {
//const [show, setShow] = useState(true)

  return (
    <div className="App">
     <Navbar/>
     <h2>Las ofertas de la semana</h2>
     {/* <ItemListContainer geeting = "Hola Coders!"/> */}
     {/* <ItemCount initial = {1} stock={20} onAdd={onAdd}/> */}
    </div>
  );
}

export default App;
