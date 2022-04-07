import React from 'react'
import Item from '../Item/Item'
import "./ItemList.css";


const ItemList = ({products}) => {
    return(
      // <ul className='flex-container'>
      //     {products.map((product) => {
      //       return <Item
      //               id={product.id} nombre={product.nombre} medidas={product.medidas} precio={product.precio}  img={product.img}  stock={product.stock}  category={product.category}  />
      //     })}
      // </ul>

      <ul className='flex-container'>
      {products.map(product => <Item id={product.id} nombre={product.nombre} medidas={product.medidas} precio={product.precio}  img={product.img}  stock={product.stock}  category={product.category} />)}
  </ul>

      
    )
}

export default ItemList