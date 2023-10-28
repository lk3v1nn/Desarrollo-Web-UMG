import BotonCarrito from "./components/BotonCarrito";

export default function ProductosLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <BotonCarrito/>
            {children}
        </>
    );
}
