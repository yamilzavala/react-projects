import './indexLoremIpsum.css'
import { nanoid } from 'nanoid';
import { useState } from 'react';
import data from './data'

const AppLoremIpsum = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newState = data.slice(0, +count)
    console.log('newState:', newState)
    setText(newState)
  }

  return (
    <section className="section-center">
      <h4>Lorem Ipsum</h4>

      <form onSubmit={handleSubmit} className='lorem-form'>
        <label>Paragraphs:</label>
        <input type="number" id="paragraphs" min="1" max='6' value={count} onChange={e => setCount(e.target.value)}/>
        <button type="submit" className='btn'>Generate</button>
      </form>

      <article className='lorem-text'>
        {text.map(paragrap => {
          return <p key={nanoid()}>{paragrap}</p>
        })}
      </article>

    </section>
  );
};
export default AppLoremIpsum;
