import React from 'react';
import logo from '../../logo.svg';
import Cards from '../Cards/Cards';
import './Main.css';

const Main = (props) => {
    const { handleAddToList } = props;

    return (
        <div>
            <div className="container px-4">
                <div className='header d-flex'>
                    <img src={logo} alt="logo" />
                    <h1 className='fw-bold'>Hub For Bibliophiles</h1>
                </div>
                <h4 className='fw-bold text-success py-3 mb-4'>Select Books You Want To Read Today</h4>
                <Cards handleAddToList={handleAddToList}></Cards>

            </div>
        </div>
    );
};

export default Main;