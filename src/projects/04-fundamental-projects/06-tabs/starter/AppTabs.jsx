import { useEffect, useState } from "react";
import JobInfo from "./components/JobInfo";
import MenuContainer from "./components/MenuContainer";
import './indexTabs.css';

const url = 'https://course-api.com/react-tabs-project';

const AppTabs = () => {
  const [jobs, setJobs] = useState([])
  const [idxJobSelected, setIdxJobSelected] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchData = async() => {
    try {
      const res = await fetch(url)
      const data = await res.json();
      setJobs(data)
      setLoading(false)
    } catch (error) {
      setError(error)
      setLoading(false)
    }   
  }

  useEffect(() => {
    fetchData()
  },[])

  if(loading) return <div className='jobs-center'>
    <div className="loading"></div>
  </div>
  
  if(error) return 
  <div className='jobs-center'>
    <div className="error-fetch">Error: {error}</div>
  </div>  

  return <section className='jobs-center'>
      <MenuContainer className="btn-container"  jobs={jobs} idxJobSelected={idxJobSelected} setIdxJobSelected={setIdxJobSelected}/>
      <JobInfo  jobs={jobs} idxJobSelected={idxJobSelected}/>
  </section>;
};
export default AppTabs;
