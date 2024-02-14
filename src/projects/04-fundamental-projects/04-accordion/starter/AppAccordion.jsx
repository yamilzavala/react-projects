import './indexAccordion.css';
import data from './data'
import { useState } from 'react';
import QuestionList from './components/QuestionList';

const AppAccordion = () => {
  const [questions, setQuestions] = useState(data);
  const [activeId, setActiveId] = useState(null)

  const handleSetActiveId = (id) => {
    const newActiveId = id === activeId ? null : id;
    setActiveId(newActiveId)
  }

  return (
    <main>
      <QuestionList questions={questions} activeId={activeId} handleSetActiveId={handleSetActiveId}/>
    </main>
  );
};
export default AppAccordion;
