import React, { useRef, useState } from 'react';

function PurchaseForm() {
  const nameInputRef = useRef();
  const [showForm, setShowForm] = useState(true);
  const [userName, setUserName] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);



  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameInputRef.current.value;
    setUserName(name);
    setShowForm(false); 
    setShowSuccessMessage(true);
  };

  return (
    <div>
      {showForm && (
        <div>
          <h1>Ya casi es tuyo!</h1>
          <h2>Por favor, completa el formulario para proceder</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Telefono
              <input type="number" ref={nameInputRef} required />
            </label> <br/>
            <label>
              Nombre
              <input type="text" ref={nameInputRef} required />
            </label><br/>
            <button type="submit" className='btn'>Submit</button>
          </form>
        </div>
      )}

      {showSuccessMessage && (
        <div>
          <h1>Tu compra fue exitosa!</h1>  <br />
          <a href="/">Volver al Menu principal</a>
        </div>
      )}
    </div>
  );
}

export default PurchaseForm;
