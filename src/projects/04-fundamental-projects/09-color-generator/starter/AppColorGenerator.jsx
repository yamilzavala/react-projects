import './indexColorGenerator.css'
import Values from 'values.js';
import { ToastContainer, toast } from 'react-toastify';
import Form from './components/Form';
import ColorList from './components/ColorList';
import { useState } from 'react';

const AppColorGenerator = () => {
  const [colors, setColors] = useState(new Values('#44a26a').all(10))

  const handleChangeColor = (colorValue) => {   
    try {
      const newColor = new Values(colorValue).all(10);
      setColors(newColor)

    } catch (error) {
      toast.error(error.message)
    }
   
  }

  return (<main className='container-center'>   
    <Form addColor={handleChangeColor}/>
    <ColorList colors={colors} />
    <ToastContainer position='top-center'/>
  </main>)
};
export default AppColorGenerator;
