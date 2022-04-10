import { useState} from "react"

import './ItemCount.css';
import { button  } from 'react-bootstrap'


const ItemCount = ({onAdd})=> {
//useState
const [count, setCount] = useState(0)
// const [title, setTitle] = useState('Titulo inicial')

const decrement = () => {
    setCount(count - 1)
}

const increment = () => {
    setCount(count + 1)
}

    return(
<div className="contenedor-count">
    <button onClick={decrement} className="bot-count btn btn-outline-secondary"> - </button>
    <p className="number"> {count} </p>
    <button onClick={increment} className="bot-count btn btn-outline-secondary"> + </button>
    <button className="bot-agregar btn btn-secondary" onClick ={() => onAdd(count)}> AGREGAR</button>
</div>
    )
}

export default ItemCount