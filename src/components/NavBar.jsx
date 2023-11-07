import { useContext } from "react"
import { contexto } from "../providers/CustomProvider"
import CartWidget from './CartWidget';
import {  Link , NavLink , useNavigate } from "react-router-dom"

const NavBar = (props) => {
    const valorDelContexto = useContext (contexto)
    const navigate = useNavigate()
    const nombre = "Caminito"

    return (
        
<header className={"header-"+nombre}>
    <Link to="/">
    <h1>{nombre}</h1> 
    </Link>
   
    <nav className="navbar">

        <h1>{props.nombre}</h1>
        <NavLink to="/Vegetarian">Veggies</NavLink>
        <NavLink to="/Meat">Carne</NavLink>
        <NavLink to="/GlutenFree">Gluten Free</NavLink>
        <NavLink to="/Carrito">Carrito</NavLink>
  

        {valorDelContexto.cantidadTotal}
        { /*  <a href="#">Food</a> */}
        { /*  <a href="#">About us</a>*/}
        { /*  <a href="#">Location</a>*/}
        <CartWidget></CartWidget>
    </nav>
    </header>
   
    )
    
    }
export default NavBar