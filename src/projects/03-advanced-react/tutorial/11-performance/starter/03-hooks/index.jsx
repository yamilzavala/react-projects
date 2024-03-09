import { useState, useCallback, useMemo } from 'react';
import { data } from '../../../../data';
import List from './List';
import { slowFn } from './slowFunction';

const LowerStateMemo = () => {
  const [people, setPeople] = useState(data);
  const [count, setCount] = useState(0);

  const removePerson = useCallback( (id) => {
    const newState = people.filter(person => person.id !== id)
    setPeople(newState)
  },[people])

  const value = useMemo(() => slowFn(), []);
  console.log(value)

  return (
    <section>
      <button
        className='btn'
        onClick={() => setCount(count + 1)}
        style={{ marginBottom: '1rem' }}
      >
        count {count}
      </button>
      <List people={people} removePerson={removePerson} />
    </section>
  );
};
export default LowerStateMemo;
