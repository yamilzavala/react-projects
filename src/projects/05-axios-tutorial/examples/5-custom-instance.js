import { useEffect } from 'react';
import customInstance from '../axios/custom-instance';
import axios from 'axios';

const randomUserUrl = 'https://randomuser.me/api';

const CustomInstance = () => {
  const fetchData = async () => {
    try {
      const resp1 = await customInstance('/react-store-products')
      const resp2 = await axios.get(randomUserUrl)
    } catch (error) {
      console.log(error.response)
    }
    customInstance()
    console.log('custom axios instance');
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className='text-center'>custom instance</h2>;
};
export default CustomInstance;
