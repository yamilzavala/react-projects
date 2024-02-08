import {useState, useEffect} from 'react';

const CleanupFunction = () => {
  const [showComponent, setShowComponent] = useState(false);
  console.log('render')

  return (
    <div className="container-center">
      {showComponent && <SecondComponent/>}
      <button className="btn"onClick={() => setShowComponent(!showComponent)}>{showComponent ? 'hide' : 'show'}</button>
    </div>
  );
};

const SecondComponent = () => {
  useEffect(() => {
    //subscription
    const idInt = setInterval(() => {
      console.log('hi from interval')
    },1000)

    //unsubscription
    return () => {
      clearInterval(idInt)
      console.log('cleanup')
    }
  }, [])

  useEffect(() => {
    const someFn = () => {
      console.log('running someFn')
    }
    //subscription
    window.addEventListener('scroll', someFn)

    //unsubscription
    return () => {
      window.removeEventListener('scroll', someFn)
    }


  }, [])

  return (
    <h2>I am second component</h2>
  );
};



export default CleanupFunction;
