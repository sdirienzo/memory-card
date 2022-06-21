import './Card.css';

function Card({ id, caption, imageUri, themeNum, onClick }) {

    const handleClick = () => {
        onClick(id);
    }

    return (
        <div className={`Card Card-theme-${themeNum}`} onClick={handleClick}>
            <figure className='Card-figure'>
                <img className='Card-image' src={imageUri} alt={caption} />
                <figcaption className='Card-caption'>{caption}</figcaption>
           </figure>
        </div>
    );
}

export default Card;
