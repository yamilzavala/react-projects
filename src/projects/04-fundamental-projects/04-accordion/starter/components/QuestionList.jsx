import React from 'react';
import SingleQuestion from './SingleQuestion';

const QuestionList = ({questions, activeId, handleSetActiveId}) => {
    const renderedQuestions = questions.map(question => (
        <SingleQuestion key={question.id} {...question} activeId={activeId} handleSetActiveId={handleSetActiveId}/>
    ))

    return (
        <section className='container'>
            {renderedQuestions}
        </section>
    );
};

export default QuestionList;