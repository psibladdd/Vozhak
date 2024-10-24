// src/Product.js
import React from 'react';
import './Product.css';

const Product = ({id, name, price, image, desc}) => {
    return (
        <div className="product-item">
            <img className="photo" src={`/photos/${image}`} alt={name}/>
            <a className="text" href={`/product/${id}`}>
                <h2>{name}</h2>
            </a>
            <a className="text-desc" href={`/product/${id}`}>
                <p>Price: ${price}</p>
            </a>
            <div>
                {desc}
            </div>
        </div>
    );
};

export default Product;
