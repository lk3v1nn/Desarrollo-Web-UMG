import TarjetaCarrito from "./components/TarjetaCarrito";
import "./styles/carrito.css";

export default function carrito() {
    return (
        <div className="container">
            <div className="products">
                <TarjetaCarrito />
                <TarjetaCarrito />
                <TarjetaCarrito />
            </div>
            <div className="info">
                
            </div>
        </div>
    );
}
