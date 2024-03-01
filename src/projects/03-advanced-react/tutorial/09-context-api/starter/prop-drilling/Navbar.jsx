import React, {useState} from 'react';
import NavbarLinks from './components/NavbarLinks';
import './index.css';

const NavbarPropDrilling = () => {
    const [user, setUser] = useState({name: 'Bob'})

    const logout = () => {
        setUser(null)
    }
    const login = () => {
        setUser({name: 'Bob'})
    }

    return (
        <nav className='nav-container'>
             <h1>Prop drilling</h1>
            <NavbarLinks login={login} logout={logout} user={user}/>
        </nav>
    );
};

export default NavbarPropDrilling;