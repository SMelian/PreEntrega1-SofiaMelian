import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ItemCount from './ItemCount';
import { useContext } from "react";
import { contexto } from "../providers/CustomProvider";

function ItemDetail(props) {

  const navigate = useNavigate();
  const valorDelContexto = useContext (contexto)
  
  const [cantidadSeleccionada, setCantidadSeleccionada] = useState(1);
  const [showCounter, setShowCounter] = useState(false);
  const [showVerMasButton, setShowVerMasButton] = useState(true);
  const [showAgregar, setAgregar] = useState(false);
  

  const handle = (cantidadSeleccionada) => {
   SetCantidadSeleccionada(cantidadSeleccionada)
  };

  const handleRedirect = (producto) => {
    navigate(`/detalle/${producto.id}`);
    setShowCounter(true); 
    setShowVerMasButton(false); 
    setAgregar(true);
  };

  const handleVerMas = (producto) => {
    handleRedirect(producto);
    setShowCounter(true); 
    setShowVerMasButton(false); 
    setAgregar(true);
  };



const handleClick1 = () => {
   valorDelContexto.handleIncrementTotal(1);
   setShowCounter(true); 
   setShowVerMasButton(false); 
   setAgregar (true);


};

  return (
    <div>
      {props.producto ? (
        <article key={props.producto.id} className="card">
          <h2 className="card__title">{props.producto.flavor}</h2>
          <img className="card__image" src={props.producto.picture} alt={props.producto.title} />
          <p>${props.producto.price}</p>
          {showVerMasButton && (
            <button onClick={() => handleVerMas(props.producto)} className="btn">
              Ver mas
            </button>
          )}
          {showCounter && <ItemCount inicial={1} handle={setCantidadSeleccionada} />}
          {showAgregar && (
            <button onClick={handleClick1}>Agregar</button>
          )}            
      </article>
      ) : (
        <p>Product not found.</p>
      )}
    </div>
  );
}

export default ItemDetail;
