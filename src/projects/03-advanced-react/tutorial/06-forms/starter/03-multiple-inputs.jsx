import { useState } from 'react';

const defaultValue = {
  name: '',
  email: '',
  password: ''
}

const MultipleInputs = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: ''
  });

const handleChange = (e) => {
  const {name, value} = e.target;
  setUser({...user, [name]: value})
}

const handleSubmit = (e) => {
  e.preventDefault();    
  console.log(user)
  setUser(defaultValue)
}

  return (
    <div>
      <form onSubmit={handleSubmit} className='form'>
        <h4>Multiple Inputs</h4>
        {/* name */}
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input type='text' className='form-input' name='name' value={user.name} onChange={handleChange} />
        </div>
        {/* email */}
        <div className='form-row'>
          <label htmlFor='email' className='form-label'>
            Email
          </label>
          <input type='email' className='form-input' name='email' value={user.email} onChange={handleChange}/>
        </div>
        {/* email */}
        <div className='form-row'>
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input type='password' className='form-input' name='password' value={user.password} onChange={handleChange} />
        </div>

        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
    </div>
  );
};
export default MultipleInputs;
