import React from 'react';
import Title from './Title';
import Tour from './Tour';
import { tours } from '../data';

const Tours = () => {

    const renderedTours = tours.map(tour => (        
        <Tour key={tour.id} {...tour}/>
    ))

    return (
        <section className="section" id="tours">
            <Title title='featured' subTitle='tours'/>

            <div className="section-center featured-center">
               {renderedTours}
            </div>
        </section>
    );
};

export default Tours;