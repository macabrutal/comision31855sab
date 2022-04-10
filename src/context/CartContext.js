import {createContext, useState} from "react";

const Context = createContext()

export const CartContextProvider = ({children}) => {
const [cart, setCart] = useState([])

//AGREGAR productos al carrito
const addItem = (product, quantity) => {
    const objItemCart = {
        ...product,
        quantity
    }

    setCart([...cart, objItemCart])

}

//ELIMINAR todos los productos del carrito
const clearCart = () => {
    setCart([])
}

//SUMA productos al carrito
const getQuantity = () => {
let count = 0
cart.forEach(prod => {
    count = count + prod.quantity
})

return count

}

  return (
      <Context.Provider value={{
          cart, 
          addItem,
          clearCart,
          getQuantity
      }}>
        {children}
      </Context.Provider>
  ) 
    
}

export default Context