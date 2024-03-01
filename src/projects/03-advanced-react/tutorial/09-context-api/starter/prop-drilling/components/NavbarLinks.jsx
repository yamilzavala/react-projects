import React from 'react';
import UserContainer from './UserContainer';

const links = [
    {name: 'home', url: '/home'},
    {name: 'about', url: '/about'},
]

const NavbarLinks = ({login, logout, user}) => {
    return (
        <div className="navbar-links">
            <ul className="links">
                {links.map((link, idx) => {
                    const {name, url} = link;
                    return (<li key={idx}>
                                <a href={url}>{name}</a>
                            </li>)
                })}
            </ul>
            <UserContainer login={login} logout={logout} user={user}/>
        </div>
    );
};

export default NavbarLinks;