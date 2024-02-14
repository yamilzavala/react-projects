import React from 'react';
import { HiMinusSm } from "react-icons/hi";
import { GoPlus } from "react-icons/go";

const SingleQuestion = ({id, title,info, activeId, handleSetActiveId}) => {
    const isActive = activeId === id;
    return (
        <article className='question'>
            <header>
                <h5>{title}</h5>
                <button onClick={() => handleSetActiveId(id)} className='question-btn'>
                    {!isActive ? <GoPlus/> : <HiMinusSm/>}
                </button>
            </header>
            {isActive && 
                <p>
                    {info}
                </p>}
        </article>
    );
};

export default SingleQuestion;