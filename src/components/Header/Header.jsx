// src/components/Header/Header.js
import React from 'react';
import './Header.css';
import {useTelegram} from "../../hooks/useTelegram";

const {user} = useTelegram();
const Header = () => {
    return (
        <header className="header">
            <div className="header-left">
                <img src="" alt="Avatar" className="avatar"/>
                <span className="shop-name">Магазин</span>
            </div>
            <div className="header-right">
                <span className="text-right">{user?.username}</span>
            </div>
        </header>
    );
};

export default Header;