import React, {useReducer} from 'react';
import { data } from '../../../data';
import './indexUseReducer.css'
import { REMOVE, CLEAR_ALL, RESET} from './actions';
import reducer from './reducer';

const defaultValues = {
  people: data
}

const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, defaultValues)
  //const [people, setPeople] = React.useState(data);

  const removeItem = (id) => {
    // let newPeople = people.filter((person) => person.id !== id);
    // setPeople(newPeople);
    dispatch({type: REMOVE, payload: {id}})
  };

  const resetItems = () => {
    dispatch({type: RESET})
    //setPeople(data)
  };

  const clearAll = () => {
    dispatch({type: CLEAR_ALL})
  }

  return (
    <div className='container-center'>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button className='btn btn-remove' onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      {state.people.length ? 
      (
        <button
          className='btn'
          style={{ marginTop: '2rem' }}
          onClick={clearAll}
        >
          Clear items
        </button>
      )
      : (
        <button
          className='btn'
          style={{ marginTop: '2rem' }}
          onClick={resetItems}
        >
          Reset
        </button>
      ) }
      
    </div>
  );
};

export default ReducerBasics;
