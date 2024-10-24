// src/Product.js
import React from 'react';
import './Product.css';

const Product = ({name, price}) => {
    return (
        <div className="product-item">
            <a>
                <h2>{name}</h2>
                <p>Price: ${price}</p>
            </a>
        </div>
    );
};

export default Product;
