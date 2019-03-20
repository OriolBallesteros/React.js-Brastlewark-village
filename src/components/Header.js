import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Header.scss';

const Header = () => (
    <header className='Header'>
        <h1>Meet people in Brastlewark</h1>
        <NavLink to="/" className='NavLink' activeClassName="is-active" exact={true}>Go to filter</NavLink>
        <NavLink to="/searched" className='NavLink' activeClassName="is-active">Listed</NavLink>
    </header>
);

export default Header;