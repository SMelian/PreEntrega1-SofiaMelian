//esto se exporta al archivo main.jsx
import Header from "./components/Header"
import Main from "./components/Main"
import NavBar from "./components/NavBar"
import Footer from "./components/footer"
import { BrowserRouter } from "react-router-dom"
//import { createContext } from "react"
import CustomProvider from "./providers/CustomProvider"
//export const contexto = createContext ()
//const Provider = contexto.Provider

//export defoult funtion app () {
function App() {
  
//const valorContexto = { dark: true,
 

  const nombre = "sofia"
  const customGreeting = "Es la mejor planner del mundo"

  if (nombre == "sofia") {
  return (
  < >
 <BrowserRouter>
  <CustomProvider>
        <NavBar></NavBar>
        <Header/>
        <Main/>
        <Footer></Footer>
    </CustomProvider>
  </BrowserRouter>
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

