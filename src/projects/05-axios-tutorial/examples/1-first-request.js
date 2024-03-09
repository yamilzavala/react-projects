import { useEffect } from 'react';
import axios from 'axios';
// limit, if 429 wait for 15 min and try again
const url = 'https://course-api.com/react-store-products';

const FirstRequest = () => {

  //axios
  const fetchData = async () => {
    try {
      const response = await axios(url);
      const data = response.data;
      console.log('data: ', data)
    } catch (error) {
      console.log('error: ', error.response)
    }
  }

  //fetch
  const fetchDataFetch = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log('data: ', data)
    } catch (error) {
      console.log('error: ', error)
    }
  }

  useEffect(() => {
    fetchData()
    //fetchDataFetch()
  }, []);

  return <h2 className='text-center'>first request</h2>;
};
export default FirstRequest;
