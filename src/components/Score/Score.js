import './Score.css';

function Score({label, score}) {
    return (
        <div className="Score">
            <p className="Score-label">{label}:</p>
            <p className="Score-score">{score}</p>
        </div>
    );
}

export default Score;