// src/Product.js
import React from 'react';
import './Product.css';

const Product = ({name, price}) => {
    return (
        <div className="product-item">
            <h2>{name}</h2>
            <p>Price: ${price}</p>
        </div>
    );
};

export default Product;
