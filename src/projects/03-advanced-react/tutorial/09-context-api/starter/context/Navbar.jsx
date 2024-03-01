import NavbarLinks from './components/NavbarLinks';
import NavbarContextProvider from './context/context';
import './index.css';

const NavbarContextApi = () => {
 

    return (
        <NavbarContextProvider>
            <nav className='nav-container'>
                <h1>Context</h1>
                <NavbarLinks/>
            </nav>
        </NavbarContextProvider>
    );
};

export default NavbarContextApi;