import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const Cards = () => {
    const [cards, setCards] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])
    return (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 bg-white rounded pb-3">
            {
                cards.map(card => <Card
                    key={cards.id}
                    card={card}
                ></Card>)
            }
        </div>
    );
};

export default Cards;