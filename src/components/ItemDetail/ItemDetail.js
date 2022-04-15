import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useState, useContext } from 'react' 
import CartContext from '../../context/CartContext'

const ItemDetail = ({ id, nombre, img, category, description, precio, stock, medidas}) => {
  // const [quantity, setQuantity] = useState(0)

  // const {cart, setCart} = useContext(CartContext)

const {addItem, isInCart } = useContext(CartContext)

  const handleOnAdd = (count) => {
      console.log('agregue productos al carrito')
      // setQuantity(count)
     
      addItem({ id, nombre, precio }, count)
  }
     
    return(
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={"../img/"+img} />
            <Card.Body>
              <Card.Title>Cuadro {nombre} </Card.Title>
              <Card.Text> sku:{id} </Card.Text>
              <Card.Text> Categoría: {category} </Card.Text>
              <Card.Text >
                    Descripción: {description}
                </Card.Text>
              <Card.Text>  Medidas: {medidas} </Card.Text>
              <Card.Text>${precio} </Card.Text>
              <Card.Text> stock: {stock} unidades</Card.Text>
              <div className='ir'>
              {isInCart(id) ? <Link to='/cart' className='bot-carrito'>Ir al carrito</Link> : <ItemCount onAdd={handleOnAdd}/>}
              {/* {quantity === 0 ? <ItemCount onAdd={handleOnAdd}/> : <Link to='/cart' className='bot-carrito'>Ir al carrito</Link>} */}
              </div>
            </Card.Body>
        </Card>
         
      )
}

export default ItemDetail