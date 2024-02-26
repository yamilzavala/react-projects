import { nanoid } from 'nanoid';
import Form from './components/Form';
import Items from './components/Items';
import './indexGrocery.css'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const setLocalStorage = (list) => {
  localStorage.setItem('liest', JSON.stringify(list));
}

const AppGrocery = () => {
  const defaultValues = JSON.parse(localStorage.getItem('list') || '[]');
  const [items, setItems] = useState(defaultValues);

  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    };
    const newItems = [...items, newItem];
    setItems(newItems)
    setLocalStorage(newItems)
    toast.success('Item added')
  }
  
  const removeItem = (id) => {
    const newState = items.filter(item => item.id !== id)
    setItems(newState)
    setLocalStorage(newState)
    toast.success('Item removed')
  }

  const editItem = (id) => {
       const newItems = items.map((item) => {
        if (item.id === id) {
          const newItem = { ...item, completed: !item.completed };
          return newItem;
        }
        return item;
      });

      setItems(newItems)
      setLocalStorage(newItems)
    
  }


  return <section className='section-center'>    
    <ToastContainer position='top-center'/>
    <Form addItem={addItem}/>
    <Items items={items} removeItem={removeItem} editItem={editItem}/>
  </section>;
};

export default AppGrocery;
