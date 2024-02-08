//Falsy values: NaN, 0, undefined, null, false, ''

import { useState } from 'react';
const ShortCircuitOverview = () => {
  //falsy
  const [text, setText] = useState('')
  //truthy
  const [name, setName] = useState('susan')

  const codeExample = text || 'Hi world'

  return <div>
    {codeExample}
    <h4>Falsy OR: {text || 'Hi world'}</h4>
    <h4>Truthy AND: {text && 'Hi world'}</h4>
    <h4>Truthy OR: {name || 'Hi world'}</h4>
    <h4>Truthy AND: {name && 'Hi world'}</h4>
  </div>;
};
export default ShortCircuitOverview;
