import React from 'react';
import "./Product.css";

export default function Product(props) {
    const {product, onAdd} = props;

    return (
        <div className="cardProduct">
            <img className="Image" src={product.imgURL} alt={product.name}/>
        <div>
            <h2 className="title">{product.name}</h2>
            <p className="cardtext">Price: {product.price}</p>
            <p className="cardtext">Rating: {product.rating}</p>
            <p className="cardtext">Time: {product.time}</p>
            <button onClick={() => onAdd(product)} className="button">Add to cart</button>
        </div>
        </div> 
    )
}
