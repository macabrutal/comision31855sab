
import React from "react"
import {getProducts } from "../../asyncmock" //traigo los productos desde asyncmock
import { useState, useEffect } from 'react'
// import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    useEffect(()=> {
        getProducts ().then(response => {
            setProducts(response)
        })
    },[])
    console.log(products)

    return (
        <div>
            <h1> {greeting} </h1>
            <ul>
            {products.map(product => 
            <li key={product.id}>{product.nombre}</li> )}
            </ul>
            {/* <ItemList prducts = {products}/> */}
       </div>


    )
}

export default ItemListContainer