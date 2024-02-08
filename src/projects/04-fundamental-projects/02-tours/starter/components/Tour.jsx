import React, {useState} from 'react';

const Tour = ({id, image, info, name, price, removeTour}) => {
    const [readMore, setReadMore] = useState(false);

    return (
        <article className='single-tour'>
            <img className='img' src={image} alt={name} />
            <span className='tour-price'>{price}</span>
            <div className='tour-info'>
                <h5>{name}</h5>
                <p > 
                    {readMore ? info : `${info.substring(0,300)}...`}
                    <button className='info-btn' onClick={() => setReadMore(!readMore)}>{readMore ? 'show less' : 'show more'}</button>
                </p>
                <button className='btn btn-block delete-btn' onClick={() => removeTour(id)}>not interested</button>
            </div>
        </article>
    );
};

export default Tour;