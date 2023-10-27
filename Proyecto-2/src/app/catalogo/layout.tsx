import '../../styles/Carrito.css'

export default function ProductosLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <div className="cartContainer">
                <button className="cartButton">carrito</button>
                <div className='cantidadArticulosContainer'>
                    <div className='cantidad'>
                        10
                    </div>
                </div>
            </div>
            {children}
        </>
    );
}
