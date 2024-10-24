// src/App.js
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ProductsList from './components/Products list/ProductsList';
import ProductDetail from './components/ProductDetail/ProductDetail';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ProductsList/>}/>
                <Route path="/product/:id" element={<ProductDetail/>}/>
            </Routes>
        </Router>
    );
}

export default App;
