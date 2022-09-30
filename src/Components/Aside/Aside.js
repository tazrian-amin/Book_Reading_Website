import React from 'react';
import './Aside.css';
const Aside = (props) => {
    const { total } = props;
    return (
        <div className='bg-white h-100 container aside'>
            <h3 className='text-center fw-bold pt-3'>Reader Info</h3>
            <div className='d-flex align-items-center justify-content-between px-2 bg-secondary bg-opacity-25 pt-3 text-center border border-light rounded'>
                <div>
                    <h6 className='fw-bold'>Name</h6>
                    <p>Tazrian</p>
                </div>
                <div>
                    <h6 className='fw-bold'>Age</h6>
                    <p>24</p>
                </div>
                <div>
                    <h6 className='fw-bold'>Location</h6>
                    <p>Bangladesh</p>
                </div>
            </div>
            <h5 className='my-3 text-success fw-bold'>Add An Interval</h5>
            <div className='interval-btn py-3 px-2 d-flex align-items-center justify-content-between bg-secondary bg-opacity-25 text-center border border-light rounded'>
                <div>
                    <button className='border-0 rounded-circle fw-bold p-1'>2hr</button>
                </div>
                <div>
                    <button className='border-0 rounded-circle fw-bold p-1'>3hr</button>
                </div>
                <div>
                    <button className='border-0 rounded-circle fw-bold p-1'>4hr</button>
                </div>
                <div>
                    <button className='border-0 rounded-circle fw-bold p-1'>5hr</button>
                </div>
                <div>
                    <button className='border-0 rounded-circle fw-bold p-1'>6hr</button>
                </div>
            </div>
            <h5 className='my-3 text-success fw-bold'>Reading Details</h5>
            <div className='d-flex align-items-center justify-content-between p-2 bg-secondary bg-opacity-25 border border-light rounded'>
                <h6 className='fw-bold'>Total Pages to Read</h6>
                <h6 id='total-pages-container'>{total}</h6>
            </div>
            <div className='d-flex align-items-center justify-content-between p-2 bg-secondary bg-opacity-25 border border-light rounded mt-2 mb-4'>
                <h6 className='fw-bold'>Interval</h6>
                <h6 id='interval'>0 hours</h6>
            </div>
            <div>
                <button className='w-100 btn btn-success fw-bold'>Activity Completed</button>
            </div>
        </div>
    );
};

export default Aside;