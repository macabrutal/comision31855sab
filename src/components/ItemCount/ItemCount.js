import { useState} from "react"

import './ItemCount.css';


const ItemCount = ({ initial = 0, stock, onAdd})=> {
//useState
const [count, setCount] = useState(initial)
// const [title, setTitle] = useState('Titulo inicial')

const decrement = () => {
    setCount(count - 1)
}

const increment = () => {
    if(count < stock){
        setCount(count + 1)
    }
}

//useEffect (escucha los cambio de estados)
// useEffect(()=>{

//     return (()=> {
//         console.log('se va a desmontar')
//         setCount()
//     })
// }, [count])


    return(
<div className="contenedor-count">
    <button onClick={decrement} className="bot-count btn btn-outline-primary"> - </button>
    <p className="number"> {count} </p>
    <button onClick={increment} className="bot-count btn btn-outline-primary"> + </button>
    <button className="bot-agregar btn btn-primary" onClick ={() => onAdd(count)}> AGREGAR</button>
</div>
    )
}

export default ItemCount