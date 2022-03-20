// import { useState, useEffect } from "react"


// const ItemCount = (initial = 0, stock, inAdd) => {
// //useState
// const [count, setCount] = useState(props.initial)
// const [title, setTitle] = useState('Titulo inicial')

// const decrement = () => {
//     setCount(count - 1)
// }

// const increment = () => {
//     if(count < stock){
//         setCount(count + 1)
//     }
// }

// //useEffect (escucha los cambio de estados)
// useEffect(()=>{

//     return (()=> {
//         console.log('se va a desmontar')
//         setCount()
//     })
// }, [count])


//     return(
// <div>

//     <button onClick={decrement}> - </button>
//     <p> {count} </p>
//     <button onClick={increment}> + </button>
//     <button onClick={() => onAdd(count)}> AGREGAR</button>
// </div>
//     )
// }

// export default ItemCount