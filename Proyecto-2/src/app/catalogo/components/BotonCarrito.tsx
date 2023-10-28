
'use client'
import "../styles/Carrito.css";
import { useRouter } from "next/navigation";

export default function BotonCarrito() {
    const router = useRouter();
    const redireccionar = () => {
        router.push('../carrito')
    };
    return (
        <div className="cartContainer">
            <button className="cartButton"
            onClick={redireccionar}>carrito</button>
            <div className="cantidadArticulosContainer">
                <div className="cantidad">10</div>
            </div>
        </div>
    );
}
