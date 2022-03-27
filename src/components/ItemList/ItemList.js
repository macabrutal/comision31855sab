import React from 'react'

const ItemList = () => {

}

return(
    <div className="card border-primary mb-3" id="producto${indice}" style="max-width: 20rem; margin:8px">
    <img src="" class="card-img-top" alt="producto">
    <div className="card-body">
        <h4 className="card-title">Cuadro </h4>
        <p className="card-text">Medidas: </p>
        <p className="card-pice">$</p>
        <button className="btn btn-primary "> AGREGAR AL CARRO </button>
    </div>
</div>
)


export default ItemList