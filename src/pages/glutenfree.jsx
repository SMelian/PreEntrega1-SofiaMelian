import { useParams } from "react-router-dom";
import { getProducts } from "../utils";
import { useState, useEffect } from "react";

function GlutenFree() {
    // Estado del State
    const [loading, setLoading] = useState(true);
    const [productos, setProductos] = useState([]); // Use an array to store products
    const params = useParams();

    useEffect(() => {
        async function fetchData() {
            try {
                const resultado = await getProducts();

                if (Array.isArray(resultado)) {
                    // Filter the products based on the category
                    const filteredProducts = resultado.filter(
                        product => product.category === params.category
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
    }, [params.category]); // Use params.category as a dependency to trigger the effect when the category changes

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

export default GlutenFree;