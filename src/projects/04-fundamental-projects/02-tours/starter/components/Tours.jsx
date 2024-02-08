import React from 'react';
import Tour from './Tour';

const Tours = ({tours, removeTour}) => {

    const renderedTours = tours.map(tour => {
        return <Tour key={tour.id} {...tour} removeTour={removeTour}/>
    });

    return (
        <section>
            <div>
                <h2 className='title'>ours tours</h2>
                <div className='title-underline'></div>
            </div>
            <div className='tours'>
                {renderedTours}
            </div>
        </section>
    );
};

export default Tours;