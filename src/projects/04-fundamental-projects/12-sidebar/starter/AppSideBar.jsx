import Home from "./components/Home";
import Modal from "./components/Modal";
import Sidebar from "./components/Sidebar";
import  SidebarContextProvider  from "./context/contextSidebar";
import './indexSidebar.css'

const AppSideBar = () => {
  return (
    <SidebarContextProvider>
      <>
        <Home/>
        <Modal/>
        <Sidebar/>
      </>
    </SidebarContextProvider>
  );
};
export default AppSideBar;
