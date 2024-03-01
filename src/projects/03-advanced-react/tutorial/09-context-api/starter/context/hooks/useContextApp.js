import { useContext } from "react";
import { NavbarContext } from "../context/context";

const useContextApp = () => {
    return useContext(NavbarContext);
}

export default useContextApp;