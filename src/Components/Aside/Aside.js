import React, { useEffect, useState } from 'react';
import './Aside.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Aside = (props) => {
    const { total } = props;
    const intervals = [2, 3, 4, 5, 6];
    const [time, setTime] = useState(0);

    const addToLs = (time) => {
        setTime(time);
        localStorage.setItem('time', time);
    }

    useEffect(() => {
        const savedData = localStorage.getItem('time');
        if (savedData) {
            setTime(savedData);
        }

    }, [])

    // toast 
    const showToast = () => {
        toast.success("Congratulations! Task Completed!", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

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
                {
                    intervals.map((interval) => {
                        return <button key={interval} onClick={() => addToLs(interval)} className='border-0 rounded-circle fw-bold p-1'>{interval}hr</button>
                    })
                }
            </div>
            <h5 className='my-3 text-success fw-bold'>Reading Details</h5>
            <div className='d-flex align-items-center justify-content-between p-2 bg-secondary bg-opacity-25 border border-light rounded'>
                <h6 className='fw-bold'>Total Pages to Read</h6>
                <h6 id='total-pages-container'>{total}</h6>
            </div>
            <div className='d-flex align-items-center justify-content-between p-2 bg-secondary bg-opacity-25 border border-light rounded mt-2 mb-4'>
                <h6 className='fw-bold'>Interval</h6>
                <h6 id='interval'>{time}hr</h6>
            </div>
            <div>
                <button onClick={showToast} className='w-100 btn btn-success fw-bold'>Activity Completed</button>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Aside;