import "../../styles/Catalogo.css";
import Producto from "../../components/Producto";

export default function catalogo() {
    return (
        <div className="container">
            <div className="containerProducts">
                <Producto />
                <Producto />
                <Producto />
                <Producto />
                <Producto />
                <Producto />
                <Producto />
            </div>
        </div>
    );
}
