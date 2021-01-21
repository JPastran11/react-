import React, {useState} from 'react';
import ProductosContainer from './ProductosContainer'
import 'materialize-css/dist/css/materialize.css'
import {Card,Container,Row} from 'react-bootstrap'

function ItemDetail  ({title,price,pictureUrl,stock,initial,id,item})  {
        const [cantidadDetail, setCantidadDetail]= useState (initial);
        

        function add(){
            if (cantidadDetail < stock ){
                setCantidadDetail(cantidadDetail+1)
            }
        }
        function substract() {
            if (cantidadDetail > initial ){
                setCantidadDetail(cantidadDetail-1)
            }
        }
    
    return (
        <Container>
            <Row>
                <Card>
        <Card.Img variant="top" src={pictureUrl} />
        <Card.Body>
            <Card.Tittle>{title}</Card.Tittle>
            <Card.Text>
                Precio: {price}
                Stock: {stock}
            </Card.Text>
        </Card.Body>
        </Card>

        <br></br>
    
        </Row>
        <div>
            <ProductosContainer initial={initial} stock={stock} add={add} substract={substract}
            item={item} cantidadDetail={cantidadDetail}  id={id}/>
          </div>
        </Container>
        
    )
}

export default ItemDetail