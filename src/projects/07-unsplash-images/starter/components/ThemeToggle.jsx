import React from 'react';
import { useGlobalContext } from '../hooks/useGlobalContext';
import { FaMoon } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";

const ThemeToggle = () => {
    const { isDarkTheme, toggleDarkTheme} = useGlobalContext();

    return (
        <section className='toggle-container'>
            <button onClick={toggleDarkTheme} className='dark-toggle'>
                {isDarkTheme ? <MdOutlineWbSunny className='toggle-icon'/> : <FaMoon className='toggle-icon'/>}
            </button>
        </section>
    );
};

export default ThemeToggle;