import React from 'react'
import { Card,Button  } from 'react-bootstrap'

//información del producto imagen , descripci{on y botón
const Item = ({id, nombre, medidas, precio, img, stock, category}) => {

return(
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="../img/10.png" />
    <Card.Body>
      <Card.Title>Cuadro {nombre} </Card.Title>
      <Card.Text> sku:{id} </Card.Text>
      <Card.Text> Categoría{category} </Card.Text>
      <Card.Text>  Medidas:{medidas} </Card.Text>
      <Card.Text>${precio} </Card.Text>
      <Card.Text> stock: {stock} </Card.Text>
      <Button variant="secondary">Ver más</Button>
    </Card.Body>
  </Card>
   
)
}

export default Item