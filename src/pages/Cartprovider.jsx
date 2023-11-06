import { useContext, useState } from "react";
import { contexto } from "../providers/CustomProvider";
import PurchaseForm from "../components/PurchaseForm";

const Carrito = () => {
  const valorDelContexto = useContext(contexto);
  const [showPurchaseForm, setShowPurchaseForm] = useState(false);

  const handleClick = () => {
    setShowPurchaseForm(true);
  };

  return (
    <div className="footer-class">
      <h1>Hola bienvenido al Carrito</h1>
      <p>Cantidad: {JSON.stringify(valorDelContexto)}</p>
      <p>Item Count: {valorDelContexto.itemCount}</p> {/* Display item count */}
      <button onClick={handleClick}>Confirmar compra</button>
      {showPurchaseForm && <PurchaseForm />} {/* Conditional rendering of PurchaseForm */}
    </div>
  );
};

export default Carrito;
