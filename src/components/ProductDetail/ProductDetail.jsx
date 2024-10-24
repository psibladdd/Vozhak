// src/ProductDetail.js
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import './ProductDetail.css';
import {useLocation, useNavigate} from 'react-router-dom';

const ProductDetail = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const {id, name, price, image, desc} = location.state;

    if (!id) {
        return <div>Product not found</div>;
    }

    const handleBack = () => {
        navigate(-1); // Возвращает на предыдущую страницу
    };

    return (
        <div className="product-detail-container">
            <div className="back-button-container" onClick={handleBack}>
                <FontAwesomeIcon icon={faArrowLeft}/>
            </div>
            <div className="product-info-container">
                <img className="photo" src={`/photos/${image}`} alt={name}/>
                <div className="product-text-container">
                    <h2>{name}</h2>
                    <p>Price: ${price}</p>
                </div>
                <p className="product-description">{desc}</p>
            </div>
        </div>
    );
};

export default ProductDetail;
