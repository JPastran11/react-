import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ProductosContainer from './ProductosContainer'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

function ItemDetail( { item, id, name, image, description, stock, initial, price }) {
    const classes = useStyles();

   
    const [ cantidadDetail, setCantidadDetail] = useState(initial)


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
        <div>
             <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt={name}
                  height="300"
                  image={image}
                  title={name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {description} por tan solo ${price}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          <div>
         
            <ProductosContainer initial={initial} stock={stock} add={add} substract={substract}
            item={item} cantidadDetail={cantidadDetail}  id={id}/>
          </div>
        </div>
    )
}

export default ItemDetail 
