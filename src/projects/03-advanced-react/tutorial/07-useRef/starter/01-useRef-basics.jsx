import { useEffect, useRef, useState } from 'react';
import './useRef.css'
const UseRefBasics = () => {
  const [value, setValue] = useState(0);
  const inputRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = inputRef.current.value;
    console.log('name: ',name)
    inputRef.current.value = null;
  };

  return (
    <div className="container-center">
      <form className='form' onSubmit={handleSubmit}>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            Name
          </label>
          <input type='text' id='name' className='form-input' ref={inputRef} />
        </div>
        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
      
      <h1>value : {value}</h1>
      <button onClick={() => setValue(value + 1)} className='btn'>
        increase
      </button>
    </div>
  );
};

export default UseRefBasics;
