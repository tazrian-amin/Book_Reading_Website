import React from 'react';
import './Aside.css';
const Aside = () => {
    return (
        <div className='container bg-white'>
            <h3 className='text-center fw-bold text-success'>Reader Info</h3>
            <div className='container d-flex align-items-center justify-content-between bg-secondary bg-opacity-25 pt-3 text-center border border-light rounded'>
                <div>
                    <h6>Name</h6>
                    <p>Tazrian</p>
                </div>
                <div>
                    <h6>Age</h6>
                    <p>24</p>
                </div>
                <div>
                    <h6>Location</h6>
                    <p>Bangladesh</p>
                </div>
            </div>
            <h5 className='my-3'>Add An Interval</h5>
            <div className='interval-btn container py-3 d-flex align-items-center justify-content-between bg-secondary bg-opacity-25 text-center border border-light rounded'>
                <div>
                    <button className='border-0 rounded-circle p-1'>2hr</button>
                </div>
                <div>
                    <button className='border-0 rounded-circle p-1'>3hr</button>
                </div>
                <div>
                    <button className='border-0 rounded-circle p-1'>4hr</button>
                </div>
                <div>
                    <button className='border-0 rounded-circle p-1'>5hr</button>
                </div>
                <div>
                    <button className='border-0 rounded-circle p-1'>6hr</button>
                </div>
            </div>
        </div>
    );
};

export default Aside;