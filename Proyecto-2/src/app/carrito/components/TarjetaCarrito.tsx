export default function TarjetaCarrito() {
    return (
        <a
            href="#"
            className="w-full m-1 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row max-w-xl hover:bg-gray-100 bg-white border-gray-200  bg-opacity-50"
        >
            <img
                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                src="https://c1.klipartz.com/pngpicture/669/504/sticker-png-building-investment-percentage-venture-capital-funding-rate-business-discounts-and-allowances.png"
                alt=""
            ></img>
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-xl tracking-tight text-indigo-600">
                    Nombre
                </h5>
                <p className="mb-3 font-normal text-gray-700 ">Descripcion</p>
                <button className="relative  px-4 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                    Eliminar
                </button>
            </div>
        </a>
    );
}
