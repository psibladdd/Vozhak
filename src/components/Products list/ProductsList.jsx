// src/ProductList.js
import React from 'react';
import Product from '../Product/Product';
import './ProductsList.css';

const products = [
    {id: 1, name: 'Product 1', price: 100, description: "temp", image: '1.jpg'},
    {id: 2, name: 'Product 2', price: 200, description: "temp", image: '2.jpg'},
    {id: 3, name: 'Product 3', price: 300, description: "temp", image: '3.jpg'},
    // Добавьте больше продуктов по необходимости
];

const ProductList = () => {
    return (
        <div className="product-list">
            <h1>Список</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <Product id={product.id} name={product.name} price={product.price} image={product.image}
                                 desc={product.description}/>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
