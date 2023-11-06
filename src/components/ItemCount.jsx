import { useState, useContext } from "react";
import { contexto } from "../providers/CustomProvider"; // Import the context

function ItemCount(props) {
  const [contador, setContador] = useState(props.inicial);
  const valorDelContexto = useContext(contexto); // Use the context

  const handleAdd = () => {
    setContador(contador + 1);
  }

  const handleMinus = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  }

  const handleReset = () => {
    setContador(1);
  }

  const handleConfirmar = () => {
    props.onAdd(contador);
    valorDelContexto.setItemCount(contador); // Update itemCount in context
  }

  return (
    <div>
      <p>Contador Actual: {contador}</p>
      <button onClick={handleAdd} className="btnCard">
        sumar
      </button>
      <button onClick={handleMinus} className="btnCard">
        restar
      </button>
      <button onClick={handleReset} className="btnCard">
        resetear
      </button>
      <button onClick={handleConfirmar} className="btnCard">
        confirmar
      </button>
    </div>
  );
}

export default ItemCount;
