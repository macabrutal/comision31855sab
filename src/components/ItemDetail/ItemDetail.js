import './ItemDetail.css'
import { Card,Button  } from 'react-bootstrap'

const ItemDetail = ({ id, nombre, img, category, description, precio, stock, medidas}) => {

    return(
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={"../img/"+img} />
            <Card.Body>
              <Card.Title>Cuadro {nombre} </Card.Title>
              <Card.Text> sku:{id} </Card.Text>
              <Card.Text> Categoría: {category} </Card.Text>
              <p className="Info">
                    Descripción: {description}
                </p>
              <Card.Text>  Medidas: {medidas} </Card.Text>
              <Card.Text>${precio} </Card.Text>
              <Card.Text> stock: {stock} unidades</Card.Text>
    
            </Card.Body>
        </Card>
         
      )
}

export default ItemDetail