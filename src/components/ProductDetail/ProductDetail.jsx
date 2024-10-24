// src/ProductDetail.js
import React from 'react';
import './ProductDetail.css';
import {useParams} from 'react-router-dom';

const products = [
    {id: 1, name: 'Product 1', price: 100, description: 'Description for Product 1'},
    {id: 2, name: 'Product 2', price: 200, description: 'Description for Product 2'},
    {id: 3, name: 'Product 3', price: 300, description: 'Description for Product 3'},
    // Добавьте больше продуктов по необходимости
];

const ProductDetail = () => {
    const {id} = useParams();
    const product = products.find(p => p.id === parseInt(id));

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className="product_body">
            <h2 className="Name">{product.name}</h2>
            <p>Price: ${product.price}</p>
            <p>{product.description}</p>
        </div>
    );
};

export default ProductDetail;
