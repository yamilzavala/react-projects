import { useEffect } from 'react';
import fetchDataInterceptor from '../axios/interceptors';
const url = 'https://course-api.com/react-store-products';

const Interceptors = () => {
  const fetchData = async () => {
    try {
      const resp1 = fetchDataInterceptor('/react-store-products')      
    } catch (error) {
      console.log(error.response)
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className='text-center'>interceptors</h2>;
};
export default Interceptors;
