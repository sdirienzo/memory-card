import './Header.css';
import ScoreRow from '../ScoreRow/ScoreRow';

function Header({ title, currentScore, highScore }) {
    return (
        <header className='Header-container'>
            <h1 className='Header-title'>{title}</h1>
            <ScoreRow score1={currentScore} score2={highScore} />
        </header>
    );
}

export default Header;