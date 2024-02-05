import { useState } from 'react';
import { data } from '../../../data';

const UseStateObject = () => {
  const [idx,setIdx] = useState(0)
  const [age, setAge] = useState(data[idx].age);
  const [name, setName] = useState(data[idx].name);
  const [hobbie, setHobbie] = useState(data[idx].hobbie);

  let showNextPerson = idx < data.length-1;

  const handleShowNextPerson = () => {
    setName(data[idx+1].name)
    setAge(data[idx+1].age)
    setHobbie(data[idx+1].hobbie)     
    setIdx(prevState => prevState + 1);
    showNextPerson = idx < data.length-1;    
  }


  return (
    <>
      <h2>useState object example</h2>
      {age}<br/>
      {name}<br/>
      {hobbie}<br/>
      {showNextPerson && <button className="btn"onClick={handleShowNextPerson}>show {data[idx+1].name}</button>}
    </>
  );
};

export default UseStateObject;
