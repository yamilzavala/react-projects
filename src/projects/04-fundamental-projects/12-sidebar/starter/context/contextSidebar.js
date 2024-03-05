import { createContext, useState } from "react";

export const AppSidebarContext = createContext();

const SidebarContextProvider = ({children}) => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [sidebarIsOpen, setSidebarIsOpen] = useState(false)

    const openModal = () => {
        setModalIsOpen(true)
    }
    const closeModal = () => {
        setModalIsOpen(false)
    }
    const openSidebar = () => {
        setSidebarIsOpen(true)
    }
    const closeSidebar = () => {
        setSidebarIsOpen(false)
    }

    const valuesToShare = {
        modalIsOpen,
        sidebarIsOpen,
        openModal,
        closeModal,
        openSidebar,
        closeSidebar
    }

    return (
        <AppSidebarContext.Provider value={valuesToShare}>
            {children}
        </AppSidebarContext.Provider>
    )
}

export default SidebarContextProvider;