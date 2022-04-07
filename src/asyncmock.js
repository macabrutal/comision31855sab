
const products = [
  
    {
        id:1,
        nombre: "Niña de mis ojos",
        medidas: "24 x 29 cms.",
        precio: 30000,
        img: "46.png",
        stock: 15, 
        category: 'Personas',
        description:'Print inspirado la mujer'
    },

    {
        id:2,
        nombre: " Ballena",
        medidas: "23 x 18 cms.",
        precio: 18000,
        img: "11.png",
        stock: 25, 
        category: 'Animales',
        description:'Print tono azul rey'
    },
    {
        id:3,
        nombre: " Corona",
        medidas: "23 x 18 cms.",
        precio: 18000,
        img: "10.png",
        stock: 45, 
        category: 'Objetos',
        description:'Print tonos menta y mostaza'
    },
        {
        id:4,
        nombre: " Oso",
        medidas: "23 x 18 cms.",
        precio: 18000,
        img: "12.png",
        stock: 50, 
        category: 'Animales',
        description:'Print oso con patrón organico'
    }
    // {
    //     id:5,
    //     nombre: " Oso",
    //     medidas: "23 x 18 cms.",
    //     "precio": 18000,
    //     img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-card-40-s3-202109?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1633547153000',
    //     stock: 50, 
    //     category: 'cuadro pequeño'
    // },
    // {
    //     id:6,
    //     nombre: " Oso",
    //     medidas: "23 x 18 cms.",
    //     "precio": 18000,
    //     img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-card-40-se-202203?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1645382412806",
    //     stock: 50, 
    //     category: 'cuadro pequeño'
    // },
    // {
    //     id:7,
    //     nombre: " Oso",
    //     medidas: "23 x 18 cms.",
    //     "precio": 18000,
    //     img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-card-40-s7-202203?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1645382414936",
    //     stock: 50, 
    //     category: 'cuadro pequeño'
    // },
    // {
    //     id:8,
    //     nombre: " Oso",
    //     medidas: "23 x 18 cms.",
    //     "precio": 18000,
    //     img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-card-40-nike-202203?wid=680&hei=528&fmt=jpeg&qlt=90&.v=1645382412788",
    //     stock: 50, 
    //     category: 'cuadro pequeño'
    // }
]

//PROPMESA
export const getProducts = (category) => {
    return new Promise ((resolve, reject) => {
setTimeout(() => {
    // resolve(products)
    category ? resolve(products.filter(prod => prod.category === category)) : resolve(products)
}, 1000);
    })
}

// export default products 

export const getProductById = (id) =>{
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(products.find(prod => prod.id === parseInt(id)))
        }, 1000)
    })
}

