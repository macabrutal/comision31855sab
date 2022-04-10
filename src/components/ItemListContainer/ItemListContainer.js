import React from "react"
import './ItemListContainer.css'

import {
    getProducts
} from "../../asyncmock" //traigo los productos desde asyncmock
import {
    useState,
    useEffect
} from 'react'
import ItemList from '../ItemList/ItemList'
import {
    useParams
} from 'react-router-dom'

const ItemListContainer = ({
    greeting
}) => {
    const [products, setProducts] = useState([])

    const {
        categoryId
    } = useParams()

    useEffect(() => {
        getProducts(categoryId).then(response => {
            setProducts(response)
        })
    }, [categoryId])
    console.log(products)

    return ( 
        <div > {
            /* <h3 className="greeting"> {greeting} </h3> */ } <
        ItemList products = {
            products
        }
        /> </div>


    )
}

export default ItemListContainer