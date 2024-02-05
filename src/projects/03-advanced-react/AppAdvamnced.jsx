import './indexAdvanced.css';
import ErrorExample from './tutorial/01-useState/starter/01-error-example';
import UseStateArray from './tutorial/01-useState/starter/03-useState-array';
import UseStateObject from './tutorial/01-useState/starter/04-useState-object';

function AppAdvanced() {
  return (
    <div className='container'>
      <h2>Advanced React</h2>
      {/* <ErrorExample/> */}
      {/* <UseStateArray/> */}
      <UseStateObject/>
    </div>
  );
}

export default AppAdvanced;
