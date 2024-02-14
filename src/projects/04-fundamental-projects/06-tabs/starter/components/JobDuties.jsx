import React from 'react';
import { v4 as uuid } from 'uuid'
import { FaAngleDoubleRight } from 'react-icons/fa';

const JobDuties = ({duties}) => {
    const renderedDuties = duties.map(duties => (
        <div key={uuid()} className='job-desc'>
            <FaAngleDoubleRight className='job-icon'/>
            <p> {duties} </p>
        </div>
        
    ))

    return (
        <div>            
             {renderedDuties}
        </div>
    );
};

export default JobDuties;