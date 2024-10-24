// src/ProductList.js
import React from 'react';
import Product from '../Product/Product';
import './ProductsList.css';

const products = [
    {id: 1, name: 'Product 1', price: 100},
    {id: 2, name: 'Product 2', price: 200},
    {id: 3, name: 'Product 3', price: 300},
    {id: 3, name: 'Product 3', price: 300},
    {id: 3, name: 'Product 3', price: 300},
    {id: 3, name: 'Product 3', price: 300},
    {id: 3, name: 'Product 3', price: 300},
    {id: 3, name: 'Product 3', price: 300},
    {id: 3, name: 'Product 3', price: 300},
    {id: 3, name: 'Product 3', price: 300},
    {id: 3, name: 'Product 3', price: 300},
    // Добавьте больше продуктов по необходимости
];

const ProductList = () => {
    return (
        <div className="product-list">
            <h1>Список</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <Product name={product.name} price={product.price}/>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
