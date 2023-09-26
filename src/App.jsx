//esto se exporta al archivo main.jsx
import Header from "./componets/Header"
import NavBar from "./componets/NavBar"
import Footer from "./componets/footer"
import ItemListContainer from "./componets/ItemListContainer"
//export defoult funtion app () {
function App() {
  
  const nombre = "sofia"
  const customGreeting = "Es la comida mejor del mundo"

  if (nombre == "sofia") {
  return (
  < >
  <NavBar></NavBar>
   <Header></Header>
   <ItemListContainer greeting={customGreeting} /> 
   <Footer></Footer>
  </>)
  } else {
}
return(

  <>
  <h1 className={"header-"+nombre}> Estupida pone bien el nombre es horacio y no { nombre}</h1>
  <Footer></Footer>
  </>
)

}


export default App // puedo hacerlo asi, primero la funcion y despues export o puedo porner todo junto

