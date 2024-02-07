import React from 'react';
import Person from './Person';

const List = ({people}) => {

    const personsRendered = people.map(people => (
        <Person key={people.id} {...people} />
    ))

    return (
        <section>
            {personsRendered}
        </section>
    );
};

export default List;