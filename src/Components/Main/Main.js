import React from 'react';
import logo from '../../logo.svg';
import Cards from '../Cards/Cards';
import './Main.css';

const Main = () => {
    return (
        <div className="m-3">
            <div className='header m-3 d-flex'>
                <img src={logo} alt="logo" />
                <h1 className='ms-2 fw-bold'>Hub For Bibliophiles</h1>
            </div>
            <h3 className='fw-bold text-success py-3 mb-4'>Select Books You Want To Read Today</h3>
            <Cards></Cards>
        </div>
    );
};

export default Main;