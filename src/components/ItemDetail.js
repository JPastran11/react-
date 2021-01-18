import React, {useState} from 'react';
import ProductosContainer from './ProductosContainer'
import {Link} from 'react-router-dom'
import 'materialize-css/dist/css/materialize.css'
import {Card,Col,Button,Container,Row} from 'react-bootstrap'

const ItemDetail = ({title,price,pictureUrl,stock}) => {
        const [cantidadDetail, setCantidadDetail]= useState (null);
        

        const onAdd = cant => {
            console.log("funcion onAdd"+ cant)
            setCantidadDetail(cant)
            
        }
    return (
        <Container>
            <Row>
        <Card.Img variant="top" src={pictureUrl} />
        <Card.Body>
            <Card.Tittle>{title}</Card.Tittle>
            <Card.Text>
                Precio: {price}
                Stock: {stock}
            </Card.Text>
        </Card.Body>
        <br></br>
        <Col text="center">
            <ProductosContainer stock={10} initial={1} onAdd={onAdd}  />
            <br></br>
            {cantidadDetail &&
            <Link to="/Cart">
            <Button type="submit">Comprar</Button>
            </Link> 
            }
        </Col>
        </Row>
        </Container>
        
    )
}

export default ItemDetail