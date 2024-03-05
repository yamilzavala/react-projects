import { useContext } from "react";
import { AppSidebarContext } from "../context/contextSidebar";

export const useContextSidebar = () => {
    return useContext(AppSidebarContext)
}