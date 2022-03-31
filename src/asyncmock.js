
const products = [
  
    {
        id:1,
        nombre: "Cuadro Niña de mis ojos",
        medidas: "24 x 29 cms.",
        precio: 30000,
        img: "46.png",
        stock: 15, 
        category: 'cuadro grande'
    },

    {
        id:2,
        "nombre": " Cuadro Ballena",
        "medidas": "23 x 18 cms.",
        "precio": 18000,
        "img": "11.png",
        stock: 25, 
        category: 'cuadro pequeño'
    },
    {
        id:3,
        "nombre": " Cuadro Corona",
        "medidas": "23 x 18 cms.",
        "precio": 18000,
        "img": "10.png",
        stock: 45, 
        category: 'cuadro pequeño'
    },
        {id:4,
        "nombre": " Cuadro Oso",
        "medidas": "23 x 18 cms.",
        "precio": 18000,
        "img": "12.png",
        stock: 50, 
        category: 'cuadro pequeño'
    }
]

//PROPMESA
export const getProducts = () => {
    return new Promise ((resolve, reject) => {
setTimeout(() => {
    resolve(products)
}, 2000);
    })
}

export default products 