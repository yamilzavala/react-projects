import { useContext } from "react";
import { AppUnsplashContext } from "../context/globalContext";

export const useGlobalContext = () => useContext(AppUnsplashContext)