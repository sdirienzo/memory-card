import React, { useState } from 'react';
import './App.css';
import uniqid from 'uniqid';
import Cards from './components/Cards/Cards';
import Header from './components/Header/Header';

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [cards, setCards] = useState(
    [
        {
            id: uniqid(),
            caption: 'Annie Leonhart',
            imageUri: require('./assets/images/Annie-Leonhart.jpg'),
            themeNum: '1',
            selected: false
        },
        {
            id: uniqid(),
            caption: 'Armin Arlert',
            imageUri: require('./assets/images/Armin-Arlert.png'),
            themeNum: '2',
            selected: false
        },
        {
            id: uniqid(),
            caption: 'Gabi Braun',
            imageUri: require('./assets/images/Gabi-Braun.jpg'),
            themeNum: '3',
            selected: false
        },
        {
            id: uniqid(),
            caption: 'Eren Yeager',
            imageUri: require('./assets/images/Eren-Yeager.jpg'),
            themeNum: '4',
            selected: false
        },
        {
            id: uniqid(),
            caption: 'Erwin Smith',
            imageUri: require('./assets/images/Erwin-Smith.jpg'),
            themeNum: '1',
            selected: false
        },
        {
            id: uniqid(),
            caption: 'Hange Zoe',
            imageUri: require('./assets/images/Hange-Zoe.jpg'),
            themeNum: '2',
            selected: false
        },
        {
            id: uniqid(),
            caption: 'Historia Reiss',
            imageUri: require('./assets/images/Historia-Reiss.jpg'),
            themeNum: '3',
            selected: false
        },
        {
            id: uniqid(),
            caption: 'Levi Ackerman',
            imageUri: require('./assets/images/Levi-Ackerman.png'),
            themeNum: '4',
            selected: false
        },
        {
            id: uniqid(),
            caption: 'Ymir Fritz',
            imageUri: require('./assets/images/Ymir-Fritz.jpg'),
            themeNum: '1',
            selected: false
        },
        {
            id: uniqid(),
            caption: 'Mikasa Ackerman',
            imageUri: require('./assets/images/Mikasa-Ackerman.jpg'),
            themeNum: '2',
            selected: false
        },
        {
            id: uniqid(),
            caption: 'Hitch Dreyse',
            imageUri: require('./assets/images/Hitch-Dreyse.jpg'),
            themeNum: '3',
            selected: false
        },
        {
            id: uniqid(),
            caption: 'Sasha Braus',
            imageUri: require('./assets/images/Sasha-Braus.jpg'),
            themeNum: '4',
            selected: false
        }
    ]
);

  return (
    <div className="App">
      <Header title='Attack on Titan Memory Game' currentScore={score} highScore={highScore} />
      <Cards cards={cards} />
    </div>
  );
}

export default App;
