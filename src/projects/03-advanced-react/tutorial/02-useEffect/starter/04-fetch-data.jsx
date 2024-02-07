import {useState, useEffect} from 'react';
const url = 'https://api.github.com/users';

const FetchData = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)
        setUsers(data)        
      } catch (error) {
        console.error(error.message)
      }
    }

    fetchUsers()
  }, [])

  const usersRendered = users.map((user, idx) => (
    <li key={user.id}>
      <img src={user.avatar_url} alt={user.login} />
      <div>
        <h5>{user.login}</h5>
        <a href={user.html_url}>Profile</a>
      </div>
    </li>
  ))

  return (
    <section>
      <h3>fetch data example</h3>
      <ul className='users'>
        {usersRendered}
      </ul>
    </section>
  );
};
export default FetchData;
