// src/Product.js
import React from 'react';
import {Link} from 'react-router-dom';
import './Product.css';

const Product = ({id, name, price}) => {
    return (
        <div className="product-item">
            <Link className="text" to={`/product/${id}`}>
                <h2>{name}</h2>
            </Link>
            <Link className="text-desc" to={`/product/${id}`}>
                <p>Price: ${price}</p>
            </Link>
        </div>
    );
};

export default Product;
