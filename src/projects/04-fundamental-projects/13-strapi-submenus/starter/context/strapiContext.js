import { createContext, useState } from "react";

export const StrapiContext = createContext();

const StrapiContextProvider = ({children}) => {
    const[sideBarIsOpen, setSideBarIsOpen] = useState(false);
    const[pageId, setPageId] = useState(null);

    const closeSideBar = () => {setSideBarIsOpen(false)};
    const openSideBar = () => {setSideBarIsOpen(true)};

    const valuesToShare = {
        sideBarIsOpen,
        closeSideBar,
        openSideBar,
        pageId,
        setPageId
    };

    return (
        <StrapiContext.Provider value={valuesToShare}>
            {children}
        </StrapiContext.Provider>
    )
}

export default StrapiContextProvider;