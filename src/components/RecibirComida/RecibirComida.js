
//PROMESAS

const RecibirComida = () => {
    return new Promise((resolve, reject) => {

        const hayComida = true

        setTimeout(() => {
            if(hayComida){
            resolve('recibí comida') 
            } else {
            reject('no hay comida')
            }
        }, 2000);
    })
   
}

RecibirComida().then(response => {
console.log(response)
}).catch(error => {
    console.log(error)
}).finally(() => {
    console.log('esto se ejecuta al final pase lo que pase')
  })
  








export default RecibirComida