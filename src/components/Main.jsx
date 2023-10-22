import { Route, Routes } from "react-router-dom"
import  ItemDetailContainer from "./ItemDetailContainer"
import Carne from "../pages/Carne"
import Vegetarian from "../pages/Vegetarianas"
import IdProducto from "../pages/IdProducto"
import GlutenFree from "../pages/glutenfree"

const Main = () => {
 
    return(
        <main>
            <Routes>
                    <Route path="/" element={<ItemDetailContainer/>} />
                    <Route path="/Meat" element={<Carne />} />
                    <Route path="/Vegetarian" element={<Vegetarian/>} />
                    <Route path="/GlutenFree" element={<GlutenFree/>} />
                    <Route path="/:id" element={<IdProducto/>} />

            </Routes>
        </main>
    )
}

export default Main