import { createContext, useState, useEffect } from "react";

export const AppUnsplashContext = createContext()

const getInitialDarkMode = () => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme:dark)').matches;
    const storedDarkMode = localStorage.getItem('darkTheme');
 
    if (storedDarkMode === null) {
        return prefersDarkMode;
    }
 
    return storedDarkMode === 'true';
}

const AppUnsplashProvider = ({children}) => {
    const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode());
    const [searchValue, setSearchValue] = useState('cat');

    useEffect(() => {
        document.querySelector('body').classList.toggle('dark-theme', isDarkTheme)
    },[isDarkTheme])

    const toggleDarkTheme = () => {     
        const newTheme = !isDarkTheme;   
        localStorage.setItem('darkTheme', newTheme);
        setIsDarkTheme(!isDarkTheme)       
        const body = document.querySelector('body')
        body.classList.toggle('dark-theme', isDarkTheme)      
    }

    const valuesToShare = {
        isDarkTheme,
        toggleDarkTheme,
        setSearchValue,
        searchValue
    }

    return <AppUnsplashContext.Provider value={valuesToShare}>
        {children}
    </AppUnsplashContext.Provider>
}

export default AppUnsplashProvider;