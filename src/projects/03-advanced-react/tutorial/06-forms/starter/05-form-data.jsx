import {getValues} from './getValues'

const UncontrolledInputs = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget)
    console.log('form: ', form)
    console.log('get a field, name: ', form.get('name'))
    console.log('entries: ',[ ...form.entries()])
    console.log('object: ', Object.fromEntries(form))
    console.log('keys: ', [...form.keys()])
    console.log('values: ', [...form.values()])

    const {isEmpty, data} = getValues(e.currentTarget)

    if(isEmpty) console.log('please complete all fields')
    console.log('data: ', data)

    //reset
    e.currentTarget.reset()

  };

  return (
    <div>
      <form onSubmit={handleSubmit} className='form'>
        <h4>Form Data API</h4>
        {/* name */}
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input type='text' className='form-input' id='name' name='name' />
        </div>
        {/* email */}
        <div className='form-row'>
          <label htmlFor='email' className='form-label'>
            Email
          </label>
          <input type='email' className='form-input' id='email' name='email' />
        </div>
        {/* email */}
        <div className='form-row'>
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input
            type='password'
            className='form-input'
            id='password'
            name='password'
          />
        </div>

        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
    </div>
  );
};
export default UncontrolledInputs;
