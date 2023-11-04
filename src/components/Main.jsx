import { Route, Routes } from "react-router-dom"
import  ItemDetailContainer from "../pages/ItemDetailContainer"
import IdProducto from "../pages/IdProducto"
import ProductListContainer from "../pages/ProductListContainer"
import Carrito from "../pages/Carrito"

const Main = () => {
 
    return(
        <main>
            <Routes>
                    <Route path="/" element={<ItemDetailContainer/>} />
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