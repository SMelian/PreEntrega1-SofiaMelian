import { createContext, useState } from "react";

export const contexto = createContext();
const Provider = contexto.Provider;

const CustomProvider = (props) => {
 
  const [carrito, setCarrito] = useState([]);
  const [cantidadTotal, setCantidadTotal] = useState(0);
  const [itemCount, setItemCount] = useState(0); // intento de que pase el numero al  carrito

  

  const handleIncrementTotal = (newQuantity) => {
    setCantidadTotal(cantidadTotal + newQuantity);
  };

  const handleSetItemCount = (count) => {
    setItemCount(count); // intento de que pase el numero al  carrito
  };

  const valorContexto = {
    
    cantidadTotal: cantidadTotal,
    handleIncrementTotal: handleIncrementTotal,
    itemCount: itemCount, // intento de que pase el numero al  carrito
    setItemCount: handleSetItemCount, // intento de que pase el numero al  carrito
  };

  return (
    <Provider value={valorContexto}>
      {props.children}
    </Provider>
  );
};

export default CustomProvider;
