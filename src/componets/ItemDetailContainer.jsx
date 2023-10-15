//import { getProducts } from "./utils"
//getProducts()

import { useState , useEffect } from "react";
import ItemListContainer from "./ItemListContainer";
import { getProducts } from "../utils"


function itemDetailContainer() {

  //estados 
  const [productos, setProductos] = useState ([])

  //Effectos - ponerlo siempre despues del estado - Esta depende de como cambie el efecto y evita que se ejectue infinito
  useEffect (()=>{  
    const resultado = getProducts()
    resultado.then(productos => {
      console.log ("TERMINO BIEN")
     setProductos (productos) //aca lo hago es setear el estado pero si no pongo los corcheted del final, se va a ejercutar infinito
    })
  },[]) //esto evita que se repita en efecto bucle. 



 
  return (
    <ItemListContainer state={ productos }/>
  )
  
}

export default itemDetailContainer