import { useState } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState(null);

  const login = () => {
    setUser({name: 'yamil'})  
  }

  const logout = () => {
    setUser(null)  
  }

  return (
    <div className="container-center">
      {user ? (
        <div className="container">
          <h1>Hi user {user.name}</h1>
          <button onClick={() => logout()} className="btn">logout</button>
        </div>) : (
        <div className="container">
          <h1>Please login first!</h1>
          <button onClick={() => login()} className="btn">login</button>
        </div>  
        )}
    </div>
  )
};

export default UserChallenge;
