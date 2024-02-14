import React from 'react';
import JobDuties from './JobDuties';
import { v4 as uuid } from 'uuid'

const JobInfo = ({jobs, idxJobSelected}) => {
    const {title, dates, duties, company} = jobs[idxJobSelected]

    return (
        <article className='job-info'>
            <h3>{title}</h3>
            <span className='job-company'>{company}</span>
            <p className='job-date'>{dates}</p>
            <JobDuties key={uuid()} duties={duties}/>
        </article>
    );
};

export default JobInfo;