import { useParams } from "react-router-dom";
import { getProducts } from "../utils";
import { useState, useEffect } from "react";

function Meat() {
    const [loading, setLoading] = useState(true);
    const [productos, setProductos] = useState([]);
    const params = useParams();

    useEffect(() => {
        async function fetchData() {
            try {
                const resultado = await getProducts();

                if (Array.isArray(resultado)) {
                    const filteredProducts = resultado.filter(
                        product => product.category === "Meat"
                    );                    
                    setProductos(filteredProducts);
                }

                setLoading(false);
            } catch (error) {
                console.error("An error occurred while fetching data:", error);
                setLoading(false);
            }
        }

        fetchData();
    }, []); 

    if (loading) {
        return <p>Loading...</p>;
    }

    if (productos.length === 0) {
        return <p>No products found in this category.</p>;
    }

    return (
        <div>
            {productos.map(producto => (
                <article key={producto.id} className="card">
                    <h2 className="card__title">{producto.flavor}</h2>
                    <img className="card__image" src={producto.picture} alt={producto.flavor} />
                    <p>${producto.price}</p>
                    <button className="btnCard">ver mas</button>
                </article>
            ))}
        </div>
    );
}

export default Meat;
