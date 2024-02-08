import {useState} from 'react';

const ToggleChallenge = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="container-center">
      <button className='btn' onClick={() => setShow(!show)}>Toggle</button>
      {show && <OtherComponent/>}
    </div>
  )
};

const OtherComponent = () => {
  return (
    <div className="alert alert-danger">I am the other component</div>
  )
}

export default ToggleChallenge;
