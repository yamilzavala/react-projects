
/* Unlike axios, fetch does not concider 4** and 5** as errors, take this error codes as success */
import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchData = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setError] = useState(false);

  useEffect(() => {
    const fetchUser = async() => {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          setError(true)
          setIsLoading(false)
        } else {
          const data = await res.json();
          setUser(data)    
        }
      } catch (error) {       
        setError(true)
        console.log(error.message);
      }
      setIsLoading(false)
    }
    fetchUser()
  }, [])

  if(isLoading) return <h3>Loading....</h3>
  if(isError) return <h3>Error....</h3>

  const {avatar_url, name, company, bio} = user;

  return  <main style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '80vw'}}>
    <section style={{ margin: '5px auto', textAlign: 'center'}}>
      <img style={{width: '200px', height: '200px', borderRadius: '50px', margin: '5px auto'}} src={avatar_url} alt={name} />
      <h3>{name}</h3>
      <h3>Works at {company}</h3>
      <p>Teacher at {bio}</p>
    </section>
  </main>
};
export default MultipleReturnsFetchData;
