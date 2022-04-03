import React from 'react'
import './Item.css'
import { Card,Button  } from 'react-bootstrap'
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom'

//información del producto imagen , descripci{on y botón
const Item = ({id, nombre, medidas, precio, img, stock, category}) => {

    //función que va contando
const onAdd = (quantity) => {
    console.log(quantity)
  }

return(
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={"../img/"+img} />
      <Card.Body>
        <Card.Title>Cuadro {nombre} </Card.Title>
        <Card.Text> sku:{id} </Card.Text>
        <Card.Text> Categoría: {category} </Card.Text>
        <Card.Text>  Medidas: {medidas} </Card.Text>
        <Card.Text>${precio} </Card.Text>
        <Card.Text> stock: {stock} unidades</Card.Text>
        <Button variant="secondary">Ver más</Button>
        <ItemCount initial={1} stock={20} onAdd={onAdd}/>
        <footer className='footer-detail'>
                <Link to={`/detail/${id}`} className='Option'>Ver detalle</Link>
            </footer>
      </Card.Body>
  </Card>
   
)
}

export default Item