import { useParams } from "react-router-dom";
import { getProducts } from "../utils";
import { useState, useEffect } from "react";
import ItemDetail from "../components/Item";

function IdProducto() {
    // Estado del State
    const [loading, setLoading] = useState(true);
    const [producto, setProducto] = useState(null); // Use null to represent no product initially
    const params = useParams();
    const { id } = params;


    console.log('Product ID from URL:', params.id);
    console.log('Fetched Product Data:', producto);

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
// In the parent component
console.log('props.producto in parent component:', producto);

    return (
        <div className="item-list-container">
             <ItemDetail producto={producto} /> 
        </div>
    );
}

export default IdProducto;
