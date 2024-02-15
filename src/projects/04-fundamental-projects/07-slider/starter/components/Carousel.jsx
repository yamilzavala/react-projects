import { useState, useEffect } from "react";
import {longList} from '../data'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';

const Carousel = () => {
    const [people, setPeople] = useState(longList);
    const [currentPersonIdx, setCurrentPersonIdx] = useState(0);

    useEffect(() => {
        const slideId = setInterval(() => {
            nextSlide()
        },2000)

        return () => {
            clearInterval(slideId)
        }
    },[currentPersonIdx])

    const renderedPersons = people.map((person, persoIdx) => {
        const {id, image, name, title, quote} = person;
        return (
            <article key={id} className='slide'
            style={{transform: `translateX(${100*(persoIdx - currentPersonIdx)}%)`,
                    opacity: persoIdx === currentPersonIdx ? 1 : 0,
                    visibility: persoIdx === currentPersonIdx ? 'visible' : 'hidden'
                    }}>
                <img src={image} alt={name} className='person-img'/>
                <h5 className='name'>{name}</h5>
                <p className='title'>{title}</p>
                <p className='text'>{quote}</p>
                <FaQuoteRight className='icon' />
            </article>
        )
    })

    const prevSlide = () => {
        setCurrentPersonIdx(oldPerson => {
            const result = (oldPerson - 1 + people.length) % people.length;
            return result
        })
    }

    const nextSlide = () => {
        setCurrentPersonIdx(oldPerson => {
            return (oldPerson + 1) % people.length;
        })
    }

    return (
        <section className='slider-container'>
            {renderedPersons}
            <button type='button' className='prev' onClick={prevSlide}>
                <FiChevronLeft />
            </button>
            <button type='button' className='next' onClick={nextSlide}>
                <FiChevronRight />
            </button>
        </section>
    );
};

export default Carousel;