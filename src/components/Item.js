import React from 'react'
import {Link} from 'react-router-dom'
const Item = ({title,price,pictureUrl,stock,id}) => {
    return (
        <div className="col s6 m4 l3">
            <div className="card">
                <div className="card-image">
                    <img src={pictureUrl} alt={`title-id`}/>
                </div>
                <div className="card-content">
                    <span className="card-title truncate">{title}</span>
                    <p>${price}</p>
                    <p>Stock: {stock}</p>
                    
                </div>
                <div className="card-action">
                    <Link to={`/item/${id}`}>ver detalle</Link>
                </div>
            </div>
        </div>
    )
}

export default Item