import {createContext, useState} from "react";

const Context = createContext()

export const CartContextProvider = ({children}) => {
const [cart, setCart] = useState([])
console.log(cart)

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

//$ TOTAL de productos:
const getTotal = () =>{
    let total = 0
    cart.forEach(prod => {
        const subtotal = prod.precio * prod.quantity 
        total += subtotal
    })

    return total
}

//no mostrar contador de productos si ya seleccioné ese productos:
const isInCart = (id) => {
return cart.some(prod => prod.id === id)
}

//ELIMINAR items de a uno
const removeItem = (id) => {
const newProducts = cart.filter(prod => prod.id !== id)
setCart(newProducts )
}

  return (
      <Context.Provider value={{
          cart, 
          addItem,
          clearCart,
          getQuantity,
          getTotal,
          isInCart,
          removeItem 
      }}>
        {children}
      </Context.Provider>
  ) 
    
}

export default Context