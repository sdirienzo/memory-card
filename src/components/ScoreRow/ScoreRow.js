import './ScoreRow.css';
import Score from '../Score/Score';

function ScoreRow({ score1, score2 }) {
    return (
        <div className='ScoreRow'>
            <Score label='Score' score={score1} />
            <Score label='High Score' score={score2} />
        </div>
    );
}

export default ScoreRow;