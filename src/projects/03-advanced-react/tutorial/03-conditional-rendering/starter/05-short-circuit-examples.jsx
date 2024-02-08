import { useState } from 'react';

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState('');
  // truthy
  const [name, setName] = useState('susan');
  const [user, setUser] = useState({ name: 'john' });
  const [isEditing, setIsEditing] = useState(false);

  const loggedUser = <div>Hi user {user.name}</div>;
  const unLoggedUser = <div>You need to login first</div>

  return (
    <div>
      {text && (
        <div>
          <h1>Some title</h1>
          {name}
        </div>
      )}

      {user && <SomeComponent name={user.name}/>}

      <button onClick={() => setIsEditing(!isEditing)}>{isEditing ? 'add' : 'edit'}</button>

      {text ? loggedUser :  unLoggedUser}
      
    </div>
  )
};

const SomeComponent = ({name}) => {
  return (
    <h1>User: {name}</h1>
  )
}

export default ShortCircuitExamples;
