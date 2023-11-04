import { createContext, useState } from "react"

export const contexto = createContext ()
const Provider = contexto.Provider

const CustomProvider = (props) => {

const [darkMode, setDarkMode] = useState(false);
const [carrito, setCarrito] = useState([]);
const [cantidadTotal, setCantidadTotal] = useState(0);

const handleToggleDark = () =>  { 
   setDarkMode (!darkMode)
}

const handleIncrementTotal = (newQuantity) =>  { 
    setCantidadTotal (cantidadTotal + newQuantity)
 }
const valorContexto = { 
        dark: darkMode,
        setDark: handleToggleDark,
        cantidadTotal: cantidadTotal,
        handleIncrementTotal : handleIncrementTotal,
    }

   
        return (
            <Provider value= {valorContexto}>
                {props.children}
            </Provider>
        );
    }
    
   export default CustomProvider
    