import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Form = ({addItem}) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!value) {
            toast.error('You must enter a valid value');
            return;
        }
        addItem(value)
    }

    return (
        <form  onSubmit={handleSubmit}>
            <h4 >Grocery Bud</h4>
            <div className='form-control'>
                <input className='form-input' type="text" value={value} onChange={e => setValue(e.target.value)}/>
                <button className='btn' type="submit">Add Item</button>
            </div>
        </form>
    );
};

export default Form;