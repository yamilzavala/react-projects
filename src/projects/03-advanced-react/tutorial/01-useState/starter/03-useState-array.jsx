import { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const handleRemove = (id) => {
    const newState = people.filter(person => person.id !== id)
    setPeople(newState);
  }

  const renderedPersons = people.map(person => (
    <div key={person.id}>
      {person.name}
      <button onClick={() => handleRemove(person.id)} className="btn">x</button>
    </div>    
  ))

  return (
    <>
      <h2>useState array example</h2>
      {renderedPersons}
      <button onClick={() => setPeople([])} className="btn">Clear all</button>
    </>
    );
};

export default UseStateArray;
