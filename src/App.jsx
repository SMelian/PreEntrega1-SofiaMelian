//esto se exporta al archivo main.jsx
import Header from "./componets/Header"
import NavBar from "./componets/NavBar"
import Footer from "./componets/footer"
import ItemDetailContainer from "./componets/itemDetailContainer"

//export defoult funtion app () {
function App() {
  
  const nombre = "sofia"
  const customGreeting = "Es la mejor planner del mundo"

  if (nombre == "sofia") {
  return (
  < >
  <NavBar></NavBar>
   <Header></Header>
   <ItemDetailContainer/>
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

