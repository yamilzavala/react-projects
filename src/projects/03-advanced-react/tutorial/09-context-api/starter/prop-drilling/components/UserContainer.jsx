import React from 'react';

const UserContainer = ({login, logout, user}) => {
    return (
        <div className="user-container">
            {user ? (
                <>
                    <p>Hello there, {user.name.toUpperCase()}!</p>
                    <button className='btn' onClick={logout}>Logout</button>                
                </>
            ) : (
                <>
                    <p>Please login!</p>
                    <button className='btn' onClick={login}>Login</button>                
                </>
            )}
        </div>
    );
};

export default UserContainer;