// src/Product.js
import React from 'react';
import './Product.css';

const Product = ({name, price}) => {
    return (
        <div className="product-item">
            <a className="text" href="/">
                {name}
            </a>
            <a className="text-desc" href="/">
                Price: ${price}
            </a>
        </div>
    );
};

export default Product;
