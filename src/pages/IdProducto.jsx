import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { app } from "../firebaseconfig";
import { getFirestore, collection, doc, getDoc } from "firebase/firestore";
import ItemDetail from "../components/ItemDetail";

function IdProducto() {
    const [loading, setLoading] = useState(true);
    const [producto, setProducto] = useState(null);
    const { id } = useParams(); 

    useEffect(() => {
        const fetchData = async () => {
            if (id) {
                const db = getFirestore(app);
                const productoDocRef = doc(db, "productos", id);

                try {
                    const docSnapshot = await getDoc(productoDocRef);

                    if (docSnapshot.exists()) {
                        setProducto(docSnapshot.data());
                    } else {
                        setProducto(null);
                    }

                    setLoading(false);
                } catch (err) {
                    setLoading(false);
                }
            } else {
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!producto) {
        return <p>No product found with this ID.</p>;
    }

    return (
        <div className="item-list-container">
            <ItemDetail producto={producto} />
        </div>
    );
}

export default IdProducto;
