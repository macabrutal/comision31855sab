
const products = [
    {
        id: 1,
        name: 'iphone 12',
        price: 100.000,
        category: 'celular',
        stock: 25,
        description: 'Descripción de Iphone 12',
        img: ''
    },
]

//PRPMESA
export const getProducts = () => {
    return new Promise ((resolve, reject) => {
setTimeout(() => {
    resolve(products)
}, 2000);
    })
}

export default products 