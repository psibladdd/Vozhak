// src/Product.js
import React from 'react';
import './Product.css';

const Product = ({name, price}) => {
    return (
        <div className={cards}>
            <a className="product-item" href="/">
                <h2>{name}</h2>
                <p>Price: ${price}</p>
            </a>
        </div>
    );
};

export default Product;
