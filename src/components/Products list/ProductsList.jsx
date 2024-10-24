// src/ProductList.js
import React from 'react';
import Product from '../Product/Product';
import './ProductsList.css';

const products = require("../../products.json")

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
