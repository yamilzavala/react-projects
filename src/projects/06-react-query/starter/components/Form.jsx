import { useState } from 'react';
import { useAddTask } from '../hooks/reactQueryCustomHook';

const Form = () => {
  const [newItemName, setNewItemName] = useState('');
  const {createTask, isLoadingCreateTask} = useAddTask()

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(newItemName)
    setNewItemName('')
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <h4>task bud</h4>
      <div className='form-control'>
        <input
          type='text '
          className='form-input'
          value={newItemName}
          onChange={(event) => setNewItemName(event.target.value)}
        />
        <button type='submit' className='btn' disabled={isLoadingCreateTask}>
          add task
        </button>
      </div>
    </form>
  );
};
export default Form;
