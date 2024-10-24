// src/ProductDetail.js
import React from 'react';
import {useLocation} from 'react-router-dom';

const ProductDetail = () => {
    const location = useLocation();
    const {id, name, price, image, desc} = location.state;

    if (!id) {
        return <div>Product not found</div>;
    }

    return (
        <div>
            <img className="photo" src={`/photos/${image}`} alt={name}/>
            <h2>{name}</h2>
            <p>Price: ${price}</p>
            <p>{desc}</p>
        </div>
    );
};

export default ProductDetail;
