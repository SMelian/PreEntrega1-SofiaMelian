//import { getProducts } from "./utils"
//getProducts()

import { useState , useEffect } from "react";
//import ItemListContainer from "./ItemListContainer";
import ItemDetail from "../components/ItemDetail";
import { getProducts } from "../utils"


function itemDetailContainer() {

 
  const [productos, setProductos] = useState ([])

  useEffect (()=>{  
    const resultado = getProducts()
    resultado.then(productos => {
      console.log ("TERMINO BIEN")
     setProductos (productos) 
    })
  },[]) 



 
  return (
    <div>
    {productos.map((producto) => (
      <ItemDetail key={producto.id} producto={producto} />
    ))}
  </div>  )
  
}

export default itemDetailContainer