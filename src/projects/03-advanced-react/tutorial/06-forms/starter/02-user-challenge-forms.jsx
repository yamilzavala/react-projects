import {data} from '../../../data'
import { useState } from 'react';

const UserChallengeForms = () => {
  const [persons, setPersons] = useState(data);
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();    
    if(!name) return;
    
    const newUser = {
      name: name,
      age: 20,
      id: +new Date().getTime(),
      hobbie: 'hobbie desc'
    }
    
    const newState = [...persons, newUser]
    setPersons(newState)
    setName('')
  }

  const removePerson = (id) => {
    const newState = persons.filter(person => person.id !== id);
    setPersons(newState)
  }

  const renderedPersons = persons.map(person => {
    return <div className='container' key={person.id}>     
        <h1>{person.name}</h1>
        <button className='btn' onClick={() => removePerson(person.id)}>
          <span>x</span>
        </button>      
    </div>
  })

  return (
    <div>
      <form onSubmit={handleSubmit} className='form'>
        <h4>Add User</h4>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input type='text' className='form-input' id='name'  value={name} onChange={(e) => setName(e.target.value)}/>
        </div>

        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
      {/* render users below */}
      {renderedPersons}
    </div>
  );
};
export default UserChallengeForms;
