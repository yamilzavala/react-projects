import Categories from './components/Categories';
import Menu from './components/Menu';
import Title from './components/Title';
import data from './data'
import './indexMenu.css'
import { useState } from 'react';

const allCategories = ['all', ...new Set(data.map(item => item.category))]

const AppMenu = () => {
  const [menuItems, setMenuItems] = useState(data);
  const [categories, setCategories] = useState(allCategories);

  const handleCategory = (category) => {    
      if(category === 'all') {
        setMenuItems(data);
        return;
      }    
      const newItems = data.filter(item => item.category === category)
      setMenuItems(newItems);
  }

  return <menu className='menu'>
    <Title text='our menu' />
    <Categories categories={categories} handleCategory={handleCategory}/>
    <Menu menuItems={menuItems}/>
  </menu>
};
export default AppMenu;
