import React from 'react'
import Item from '../Item/Item'


const ItemList = ({products}) => {

    const productos = [
      {
        id:1,
        nombre: "Cuadro",
        medidas: "24 x 29 cms.",
        precio: 30000,
        img: "46.png",
        stock: 15, 
        category: 'cuadro grande'
      }
    ]


    return(
      productos.map((product) => {
        return <Item
                id={product.id} nombre={product.nombre} medidas={product.medidas} precio={product.precio}  img={product.img}  stock={product.stock}  category={product.category}  />
      })
    )
}

export default ItemList