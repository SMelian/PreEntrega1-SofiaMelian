
import CartWidget from './CartWidget';
const NavBar = (props) => {

    const nombre = "Caminito"
    return (
        
<header className={"header-"+nombre}>
    <h1>{nombre}</h1> 
    <nav className="navbar">
        <h1>{props.nombre}</h1>
        <a href="#">Food</a>
        <a href="#">About us</a>
        <a href="#">Location</a>
        <CartWidget></CartWidget>
    </nav>
    </header>
   
    )
    
    }
export default NavBar