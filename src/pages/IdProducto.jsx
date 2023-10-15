import { useParams } from "react-router-dom";
import { getProducts } from "../utils";
import { useState, useEffect } from "react";

function IdProducto() {
    // Estado del State
    const [loading, setLoading] = useState(true);
    const [producto, setProducto] = useState(null); // Use null to represent no product initially
    const params = useParams();

    useEffect(() => {
        async function fetchData() {
            try {
                const resultado = await getProducts();

                if (Array.isArray(resultado)) {
                    const foundProduct = resultado.find(
                        product => product.id === parseInt(params.id)
                    );

                    if (foundProduct) {
                        setProducto(foundProduct);
                    }
                }

                setLoading(false);
            } catch (error) {
                console.error("An error occurred while fetching data:", error);
                setLoading(false);
            }
        }

        fetchData();
    }, [params.id]); // Add params.id as a dependency to trigger the effect when the ID changes

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!producto) {
        return <p>Product not found.</p>;
    }

    return (
        <div>
         <article className="card">
          <h2 className="card__title">{producto.flavor}</h2>
          <img className="card__image" src={producto.picture} alt={producto.title} />
          <p>${producto.price}</p>
          <button className="btnCard">ver mas</button>
        </article>
            {}
        </div>
    );
}

export default IdProducto;
