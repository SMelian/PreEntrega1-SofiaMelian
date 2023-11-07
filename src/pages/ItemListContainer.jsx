import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { app } from "../firebaseconfig";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";
import ItemDetail from "../components/ItemDetail";

function ItemListContainer() {
    const [loading, setLoading] = useState(true);
    const [productos, setProductos] = useState([]);
    const { category } = useParams(); 

    useEffect(() => {
        const fetchData = async () => {
            const db = getFirestore(app);
            const productosCollection = collection(db, "productos");
            let filtro = productosCollection; 
            if (category) {
                
                filtro = query(productosCollection, where("category", "==", category));
            }

            try {
                const consulta = await getDocs(filtro);
                const productosData = consulta.docs.map((doc) => {
                    const id = doc.id;
                    const data = doc.data();
                    data.id = id;
                    return data;
                });
                setProductos(productosData);
                setLoading(false);
            } catch (err) {
                console.error("An error occurred while fetching data:", err);
                setLoading(false);
            }
        };

        fetchData();
    }, [category]); 

    if (loading) {
        return <p>Loading...</p>;
    }

    if (productos.length === 0) {
        return <p>Los productos no fueron encontrados en esta categoria</p>;
    }

    return (
        <div className="item-list-container">
            {productos.map((producto) => (
                <ItemDetail key={producto.id} producto={producto} />
            ))}
        </div>
    );
    }

export default ItemListContainer;





