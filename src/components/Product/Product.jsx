// src/Product.js
import React from 'react';
import {Link} from 'react-router-dom';
import './Product.css';

const Product = ({id, name, price, image, desc}) => {
    return (
        <div className="product-item">
            <img className="photo" src={`/photos/${image}`} alt={name}/>
            <Link className="text" to={`/product/${id}`} state={{id, name, price, image, desc}}>
                <h2>{name}</h2>
            </Link>
            <Link className="text-desc" to={`/product/${id}`} state={{id, name, price, image, desc}}>
                <p>Price: ${price}</p>
            </Link>
        </div>
    );
};

export default Product;
