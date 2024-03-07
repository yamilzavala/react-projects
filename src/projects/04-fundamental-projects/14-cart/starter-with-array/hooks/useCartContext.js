import { useContext } from "react";
import { CartContext } from "../context/cartContext";

export const useCartContext = () => useContext(CartContext)