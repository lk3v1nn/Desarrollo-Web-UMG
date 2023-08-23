// @ts-nocheck
const formPasaportexD = document.getElementById('formPasaportexD');

const modalDeErrores = document.getElementById("modalxd");
const cuerpoModal = document.getElementById("cuerpoModal");
const botonErroresX1 = document.getElementById("btnCerrarModal1");
const botonErroresX2 = document.getElementById("btnCerrarModal2");

const modalDeVista = document.getElementById("modalVista");
const botonVistaX1 = document.getElementById("btnCerrarModalVista1");
const botonVistaX2 = document.getElementById("btnCerrarModalVista2");

let formularioCompleto;

function imprimirDiv(elemento) {
    let contenido = document.getElementById(elemento).innerHTML;

    // Crear una nueva ventana emergente
    let ventanaImpresion = window.open("", "", "height=auto,width=75%");

    // Escribir el contenido en la ventana emergente
    ventanaImpresion.document.write("<!DOCTYPE html><html lang='es'><head><title>Imprimir Div</title>");
    // ventanaImpresion.document.write("<link href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css' rel='stylesheet' integrity='sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9' crossorigin='anonymous'></link>");
    ventanaImpresion.document.write("<link rel='stylesheet' href='css/estilos.css'></link>");
    ventanaImpresion.document.write("</head>");
    ventanaImpresion.document.write("<body>" + contenido + "</body>");
    ventanaImpresion.document.write("</html>");
    // Imprimir la ventana emergente
    ventanaImpresion.document.write("<script>window.addEventListener('load', window.print());</script>");
    // Cerrar la ventana emergente
    window.close();
}

formPasaportexD?.addEventListener('submit', function(event) { 
    formularioCompleto = true;
    // modalDeVista.style.display = "block";
    event.preventDefault();
    
    //CREA UN OBJETO CON LOS VALORES DE LOS INPUTS
    const formData = new FormData(formPasaportexD);
    
    //CREA VARIABLES CON LOS VALORES DE LOS INPUTS
    const nombres = formData.get('nombres');
    const apellidos = formData.get('apellidos');
    const fecha = formData.get('fecha');
    const genero = formData.get('genero');
    const dpi = formData.get('documento');
    const archivo = formData.get('subirArchivo');
    const telefono = formData.get('telefono');
    const correo = formData.get('correo');
    const colorPiel = formData.get('ColorDePiel');
    const colorCabello = formData.get('ColorDeCabello');
    const motivo = formData.get('Soicitud');
    
    //VALIDA CAMPOS VACIOS Y CREA EL MENSAJE DEL MODAL
    cuerpoModal.innerHTML=""; //limpia el modalDeErrores
    ValidadorModal(nombres, "Nombres");
    ValidadorModal(apellidos, "Apellidos");
    ValidadorModal(fecha, "Fecha de nacimiento");
    ValidadorModal(genero, "Genero"); 
    ValidadorModal(dpi, "DPI");
    ValidadorModal(archivo.name, "Archivo");
    ValidadorModal(telefono, "Telefono");
    ValidadorModal(correo, "Correo");
    ValidadorModal(colorPiel, "Color de piel");
    ValidadorModal(colorCabello, "Color de cabello");
    ValidadorModal(motivo, "Motivo de solicitud");
    console.log(formularioCompleto);
    
    if(formularioCompleto){
        mostrarDatos(nombres, apellidos, fecha, genero, dpi, archivo, telefono, correo, colorPiel, colorCabello, motivo);
    };
});

function ValidadorModal(variable,campo){
    if (variable ==  "" || variable == null || variable == 'Seleccione') {
        formularioCompleto = false;
        //MUESTRA EL MODAL
        modalDeErrores.style.display = "block"; 
        
        //BOTONES QUE CIERRAN EL MODAL
        botonErroresX1?.addEventListener("click", (event) =>{
            event.preventDefault();
            modalDeErrores.style.display = "none";
        });
        botonErroresX2?.addEventListener("click", (event) =>{
            event.preventDefault();
            modalDeErrores.style.display = "none";
        });

        //MUESTRA EL MENSAJE DE ERROR
        let mensaje = document.createElement("p");
        mensaje.innerHTML = `${campo} : no puede estar vacio`;
        cuerpoModal?.appendChild(mensaje);
    }
}

function mostrarDatos(nombres, apellidos, fecha, genero, dpi, archivo, telefono, correo, colorPiel, colorCabello, motivo){

    modalDeVista.style.display = "block";
    botonVistaX1?.addEventListener("click", (event) =>{
        event.preventDefault();
        modalDeVista.style.display = "none";
    });
    botonVistaX2?.addEventListener("click", (event) =>{
        event.preventDefault();
        modalDeVista.style.display = "none";
    });
    // const nombreCompletoVista = document.getElementById("nombreCompletoVista");
    // const fechaNacimientoVista = document.getElementById("fechaNacimientoVista");
    // const dpiVista = document.getElementById("dpiVista");
    // const motivoVista = document.getElementById("motivoVista");
    // const telefonoVista = document.getElementById("telefonoVista");
    // const correoVista = document.getElementById("correoVista");
    // const pielVista = document.getElementById("pielVista");
    // const cabelloVista = document.getElementById("cabelloVista");

    document.getElementById("nombreCompletoVista").innerHTML = `${nombres} ${apellidos}`;
    document.getElementById("fechaNacimientoVista").innerHTML = fecha;
    document.getElementById("dpiVista").innerHTML = dpi;
    document.getElementById("motivoVista").innerHTML = motivo;
    document.getElementById("telefonoVista").innerHTML = telefono;
    document.getElementById("correoVista").innerHTML = correo;
    document.getElementById("pielVista").innerHTML = colorPiel;
    document.getElementById("cabelloVista").innerHTML = colorCabello;
};