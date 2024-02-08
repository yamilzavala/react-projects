import Loading from './components/Loading';
import Tours from './components/Tours';
import './indexTours.css'
import { useState, useEffect } from 'react';

const url = 'https://course-api.com/react-tours-project';

const AppTours = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchTours = async() => {
    try {
      setLoading(true);
      const res = await fetch(url)
      const data = await res.json()
      setTours(data);
    } catch (error) {
      console.error(error)
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchTours();
  }, [])

  const removeTour = (id) => {
    const newState = tours.filter(tour => tour.id !== id);
    setTours(newState)
  }

  if(loading) return <Loading/>

  if(!tours.length) {
    return (
      <mian>
        <div className="title">
          <h2>no tours left</h2>
          <button style={{marginTop: '2rem'}} className='btn' onClick={fetchTours}>Refetch</button>
        </div>
      </mian>
    )
  }

  return (     
      <main>
        <Tours tours={tours} removeTour={removeTour}/>
      </main>    
  )
};
export default AppTours;
