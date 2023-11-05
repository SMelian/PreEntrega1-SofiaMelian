import { useState } from "react"

function ItemCount(props) {

    const [contador,setContador] = useState(props.inicial)
    
    const handleAdd = () => {
        setContador(contador + 1)
    }

    const handleMinus = () => {
        if(contador > 1){
            setContador(contador - 1)
        }
    }

    const handleReset = () => {
        setContador(1)
    }

    const handleConfirmar = () => {
        props.onAdd(contador)
    }

    return (
        <div>
            <p>Contador Actual : {contador}</p>
            <button onClick={handleAdd} className="btnCard">sumar</button>
            <button onClick={handleMinus} className="btnCard">restar</button>
            <button onClick={handleReset} className="btnCard">resetear</button>
            <button onClick={handleConfirmar} className="btnCard">confirmar</button>

        </div>
    )
}

export default ItemCount