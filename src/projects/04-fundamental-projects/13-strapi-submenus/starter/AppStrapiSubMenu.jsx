import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Submenu from './components/Submenu';
import StrapiContextProvider from './context/strapiContext';
import './indexStrapiSubMenu.css'

const AppStrapiSubMenu = () => {
  return (
    <StrapiContextProvider>
        <main className="main-container">
          <Navbar/>
          <Hero/>
          <Sidebar/>
          <Submenu/>
        </main>
    </StrapiContextProvider>
  );
};
export default AppStrapiSubMenu;
