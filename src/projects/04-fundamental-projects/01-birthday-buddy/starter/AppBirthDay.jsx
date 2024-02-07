import './indexBirthDay.css';
import data from './data';
import { useState} from 'react';
import List from './components/List';

const AppBirthDay = () => {
  const [people, setPeople] = useState(data);

  return (

    <main>
      <section className="container">
        <h3>{people.length}: Birthdays today</h3>
        <List people={people}/>
        <button className="btn btn-block" onClick={() => setPeople([])}>Clear all</button>
      </section>
    </main>
  );
};
export default AppBirthDay;
