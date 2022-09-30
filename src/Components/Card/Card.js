import React from 'react';
import './Card.css';
const Card = (props) => {
    const { name, detail, img, pages } = props.card;
    const { handleAddToList } = props;

    return (
        <div className="col">
            <div className="card">
                <img src={img} className="mt-2 w-50 mx-auto rounded" alt={name} />
                <div className="card-body">
                    <h4 className="card-title fw-bold">{name}</h4>
                    <p className="card-text">{detail.slice(0, 150)} <span className='fw-bold'>...see more</span></p>
                    <h6 className='fw-bold'>Pages: {pages}</h6>
                </div>
                <div className="card-footer">
                    <button onClick={() => handleAddToList(pages)} className='w-100 btn btn-success fw-bold'>Add to List</button>
                </div>
            </div>
        </div>
    );
};

export default Card;