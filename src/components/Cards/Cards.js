import React, { useEffect, useState } from 'react';
import './Cards.css';
import uniqid from 'uniqid';
import Card from '../Card/Card';

function Cards() {
    const [cards, setCards] = useState(
        [
            {
                id: uniqid(),
                caption: 'Annie Leonhart',
                imageUri: require('../../assets/images/Annie-Leonhart.jpg'),
                themeNum: '1',
                selected: false
            },
            {
                id: uniqid(),
                caption: 'Armin Arlert',
                imageUri: require('../../assets/images/Armin-Arlert.png'),
                themeNum: '2',
                selected: false
            },
            {
                id: uniqid(),
                caption: 'Gabi Braun',
                imageUri: require('../../assets/images/Gabi-Braun.jpg'),
                themeNum: '3',
                selected: false
            },
            {
                id: uniqid(),
                caption: 'Eren Yeager',
                imageUri: require('../../assets/images/Eren-Yeager.jpg'),
                themeNum: '4',
                selected: false
            },
            {
                id: uniqid(),
                caption: 'Erwin Smith',
                imageUri: require('../../assets/images/Erwin-Smith.jpg'),
                themeNum: '1',
                selected: false
            },
            {
                id: uniqid(),
                caption: 'Hange Zoe',
                imageUri: require('../../assets/images/Hange-Zoe.jpg'),
                themeNum: '2',
                selected: false
            },
            {
                id: uniqid(),
                caption: 'Historia Reiss',
                imageUri: require('../../assets/images/Historia-Reiss.jpg'),
                themeNum: '3',
                selected: false
            },
            {
                id: uniqid(),
                caption: 'Levi Ackerman',
                imageUri: require('../../assets/images/Levi-Ackerman.png'),
                themeNum: '4',
                selected: false
            },
            {
                id: uniqid(),
                caption: 'Ymir Fritz',
                imageUri: require('../../assets/images/Ymir-Fritz.jpg'),
                themeNum: '1',
                selected: false
            },
            {
                id: uniqid(),
                caption: 'Mikasa Ackerman',
                imageUri: require('../../assets/images/Mikasa-Ackerman.jpg'),
                themeNum: '2',
                selected: false
            },
            {
                id: uniqid(),
                caption: 'Hitch Dreyse',
                imageUri: require('../../assets/images/Hitch-Dreyse.jpg'),
                themeNum: '3',
                selected: false
            },
            {
                id: uniqid(),
                caption: 'Sasha Braus',
                imageUri: require('../../assets/images/Sasha-Braus.jpg'),
                themeNum: '4',
                selected: false
            }
        ]
    );
    useEffect(() => {
        let newCards = [...cards];
        shuffle(newCards);

        setCards(newCards);
    }, []);

    // Fisher-Yates shuffle: https://javascript.info/task/shuffle
    const shuffle = (cards) => {
        for (let i = cards.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [cards[i], cards[j]] = [cards[j], cards[i]];
        }
    };

    return (
        <section className='Cards'>
            {cards.map(card => <Card key={card.id} {...card} />)}
        </section>
    );
}

export default Cards;