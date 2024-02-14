import React from 'react';
import {v4 as uuid} from 'uuid'

const MenuContainer = ({setIdxJobSelected, jobs, idxJobSelected}) => {
    const menuRendered = jobs.map((job, idx) => (
        <button className={idx === idxJobSelected ? 'job-btn active-btn' : 'job-btn'} key={uuid()} onClick={() => setIdxJobSelected(idx)}> {job.company}</button>        
    ))

    return (
        <div className='btn-container'>
            {menuRendered}
        </div>
    );
};

export default MenuContainer;