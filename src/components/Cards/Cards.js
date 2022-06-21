import React, { useEffect } from 'react';
import './Cards.css';
import Card from '../Card/Card';

function Cards({ cards, onSelection }) {
    useEffect(() => {
        shuffle(cards);
    });

    // Fisher-Yates shuffle: https://javascript.info/task/shuffle
    const shuffle = (cards) => {
        for (let i = cards.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [cards[i], cards[j]] = [cards[j], cards[i]];
        }
    };

    return (
        <section className='Cards'>
            {cards.map(card => <Card key={card.id} {...card} onClick={onSelection} />)}
        </section>
    );
}

export default Cards;