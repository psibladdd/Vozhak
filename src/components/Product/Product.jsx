// src/Product.js
import React from 'react';
import './Product.css';

const Product = ({name, price}) => {
    return (
        <a className="product-item" href="/">
            <h2>{name}</h2>
            <p>Price: ${price}</p>
        </a>
    );
};

export default Product;
