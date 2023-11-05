import { useContext } from "react"
import { contexto } from "../providers/CustomProvider"


const Carrito = () => {

const valorDelContexto = useContext (contexto)

const handleClick = () => {
    console.log ("worked"),
    //valorDelContexto.setDark(!valorDelContexto.dark)
valorDelContexto.setDark()
}

    return (
    <div className="footer-class">
    <h1>Hola bienvenido al Carrito</h1> 
    <button onClick={handleClick}>toggle Dark</button>  
    <p>Dark Mode: {JSON.stringify(valorDelContexto) } </p> 
    </div>
    )
    
    }
    
    export default Carrito