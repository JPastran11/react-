import React, {useState} from 'react';

const ProductosContainer = ({stock, initial, onAdd}) => {
    const [cantidad,setCantidad] = useState(initial)
    
    
    const aumentarContador = () => {
        if(cantidad < stock)
        setCantidad(cantidad + 1)
    }

    const disminuirContador = () => {
        if(cantidad > 0)
        setCantidad(cantidad - 1)
    }

     

    const agregarCarrito = () => {
        onAdd(this.onAdd)

    }

    return (
        
            <div>
                <p>Stock disponible : {stock}</p>
                <div>
                    <div>
                        <button onClick={aumentarContador} className={` ${cantidad === stock ? "disabled" : null}`}>
                            <i> + </i>
                        </button>
                    </div>
                    <div>{cantidad}</div>
                    <div>
                        <button onClick={disminuirContador} className={` ${cantidad === 0 ? "disabled" : null}`}>
                            <i> - </i>
                        </button>
                    </div>
                </div>
                <button onClick={this.onAdd}>Agregar a mi carrito</button>
            </div>
    
    )
}

export default ProductosContainer