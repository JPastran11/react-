import React from 'react'

const Item = ({title,price,pictureUrl,stock,description}) => {
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
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default Item