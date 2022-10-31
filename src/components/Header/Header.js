import logo from '../../images/Logo.svg';
import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <a href="/order">Order</a>
                <a href="/manageInventory">Manage Inventory</a>
                <a href="/orderReviwe">Order Reviwe</a>
                <a href="login">Login</a>

               </div>
        </nav>
    );
};

export default Header;