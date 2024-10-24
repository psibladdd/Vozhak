// src/ProductDetail.js
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import './ProductDetail.css'
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
        <div>
            <div className="back_button" onClick={handleBack}>
                <FontAwesomeIcon icon={faArrowLeft}/>
            </div>
            <img className="photo" src={`/photos/${image}`} alt={name}/>
            <h2>{name}</h2>
            <p>Price: ${price}</p>
            <p>{desc}</p>
        </div>
    );
};

export default ProductDetail;
