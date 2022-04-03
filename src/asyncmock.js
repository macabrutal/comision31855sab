
const products = [
  
    {
        id:1,
        nombre: "Niña de mis ojos",
        medidas: "24 x 29 cms.",
        precio: 30000,
        img: "46.png",
        stock: 15, 
        category: 'cuadro grande'
    },

    {
        id:2,
        "nombre": " Ballena",
        "medidas": "23 x 18 cms.",
        "precio": 18000,
        img: "11.png",
        stock: 25, 
        category: 'cuadro pequeño'
    },
    {
        id:3,
        "nombre": " Corona",
        "medidas": "23 x 18 cms.",
        "precio": 18000,
        img: "10.png",
        stock: 45, 
        category: 'cuadro pequeño'
    },
        {id:4,
        "nombre": " Oso",
        "medidas": "23 x 18 cms.",
        "precio": 18000,
        img: "12.png",
        stock: 50, 
        category: 'cuadro pequeño'
    }
]

//PROPMESA
export const getProducts = () => {
    return new Promise ((resolve, reject) => {
setTimeout(() => {
    resolve(products)
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

