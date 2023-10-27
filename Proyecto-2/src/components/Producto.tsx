import "../styles/Producto.css";

export default function Producto() {
    return (
        <>
            <div className="product-card">
                <div className="product-tumb">
                    <img src="https://i.imgur.com/xdbHo4E.png" alt="" />
                </div>
                <div className="product-details">
                    <span className="product-catagory">CATEGORIAS</span>
                    <h4>
                        <a href="">NOMBRE</a>
                    </h4>
                    <p>DESCRIPCION</p>
                    <div className="product-bottom-details">
                        <div className="product-price">
                            <small>descuento</small>PrecioDescuento
                        </div>
                    </div>
                    <button className="my-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Agregar
                    </button>
                </div>
            </div>
        </>
    );
}
