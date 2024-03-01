import useContextApp from "../hooks/useContextApp";

const UserContainer = () => {
    const {login, logout, user} = useContextApp()

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