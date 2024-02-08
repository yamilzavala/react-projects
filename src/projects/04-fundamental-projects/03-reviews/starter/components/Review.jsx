import React from 'react';
import { FaAngleLeft, FaAngleRight, FaQuoteRight } from "react-icons/fa";

const Review = ({id, name, job, image, text, goNext, goPrev, supriseMe}) => {
    return (
        <article className='review'>
             <div className='img-container'>
                <img src={image} alt={name} className='person-img'/>
                <span className='quote-icon'>
                    <FaQuoteRight />
                </span>
             </div>
             <h4 className='author'>{name}</h4>
             <p className='job'>{job}</p>
             <p className='info'>{text}</p>
             <div className='btn-container'>
                <button className='prev-btn' onClick={goPrev}>
                    <FaAngleLeft />
                </button>
                <button className='next-btn' onClick={goNext}>
                    <FaAngleRight />
                </button>
             </div>
             <button onClick={supriseMe} className='btn btn-hipster'>suprise me</button>
        </article>
    );
};

export default Review;