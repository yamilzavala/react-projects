import { useState } from 'react';
const frameworks = ['react', 'angular', 'vue', 'svelte'];

const OtherInputs = () => {
  const [shipping, setShipping] = useState(false);
  const [framework, setFramework] = useState('react');

  const handleChange = (e) => {
    console.log(e.target.checked)
    setShipping(e.target.checked);
  }
  const handleChangeFramework = (e) => {
    setFramework(e.target.value);
  }

  return (
    <div>
      <form className='form'>
        <h4>Other Inputs</h4>
        {/* name */}
        <div className='form-row' style={{ textAlign: 'left' }}>
          <label htmlFor='shipping'> Free Shipping </label>
          <input type="checkbox" checked={shipping} onChange={handleChange} />
        </div>
        <div className='form-row' style={{ textAlign: 'left' }}>
          <label htmlFor='framework' className='form-label'>
            Framework
          </label>
          <select name="framework" id="" onChange={handleChangeFramework}>
              {frameworks.map(framework => (
                <option value={framework}>{framework}</option>
              ))}
          </select>
        </div>
        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
    </div>
  );
};
export default OtherInputs;
