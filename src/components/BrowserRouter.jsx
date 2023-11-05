import { Route, Routes } from "react-router-dom"
import  ItemDetailContainer from "../pages/ItemDetailContainer"
import IdProducto from "../pages/IdProducto"
import ProductListContainer from "../pages/ItemListContainer"
import Carrito from "../pages/Cartprovider"

const Main = () => {
 
    return(
        <main>
            <Routes>
                    <Route path="/" element={<ProductListContainer/>} />
                    <Route path="/:category" element={<ProductListContainer/>} />
                    <Route path="/:category" element={<ProductListContainer/>} />
                    <Route path="/:category" element={<ProductListContainer/>} />
                    <Route path="/detalle/:id" element={<IdProducto />} /> 
                    <Route path="/carrito" element={<Carrito/>} /> 
            </Routes>
        </main>
    )
}

export default Main