import {useState, createContext} from 'react';

export const NavbarContext = createContext();

const NavbarContextProvider = ({children}) => {
    const [user, setUser] = useState({name: 'Bob'})

    const logout = () => {
        setUser(null)
    }
    const login = () => {
        setUser({name: 'Bob'})
    }

    const valuesToShare = {
        user,
        login,
        logout,
    }

    return  (
        <NavbarContext.Provider value={valuesToShare}>
            {children}
        </NavbarContext.Provider>
        )
}

export default NavbarContextProvider;

