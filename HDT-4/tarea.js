const readline = require('readline');
const colors = require('colors');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class alumno {
    constructor(nombre, carnet, notas) {
        this.nombre = nombre;
        this.carnet = carnet;
        this.notas = notas;
    }
}

let nombre;
let carnet;
let notas = [];
let alumnos = [];

solicitarDatosAlumno(1);

function solicitarDatosAlumno(numeroAlumno) {
    rl.question(`Nombre alumno ${numeroAlumno}: `.blue, (nombreIngresado) => {
    nombre = nombreIngresado;
    solicitarCarnet(numeroAlumno);
    })
}

function solicitarCarnet(numeroAlumno) {
    rl.question(`Carnet del alumno ${numeroAlumno}: `.blue, (carnetIngresado) => {
    carnet = carnetIngresado;
    solicitarNotas(numeroAlumno);
    })
}

function solicitarNotas(numeroAlumno) {
    rl.question(`Notas separadas por coma del alumno ${numeroAlumno}: `.blue, (notasIngresadas) => {
        notas = notasIngresadas.split(',');
        crearAlumno();
    })
}

function crearAlumno() {
    let objalumno = new alumno(nombre, carnet, notas);
    alumnos.push(objalumno);
    menuOpciones();
}

function menuOpciones(){
    rl.question(`Seleccione una opcion i: Ingresar nuevo Alumno, b: Buscar un alumno, s: Salir: `.green, (respuesta) => {
        switch (respuesta) {
            case 'i':
                solicitarDatosAlumno(alumnos.length + 1);
                break;
            case 'b':
                buscarAlumno();
                break;
            case 's':
                console.log(alumnos);
            default:
                break;
        }
    })
}

function buscarAlumno() {
    rl.question(`Ingrese el carnet del alumno a buscar: `.yellow, (carnetIngresado) => {
        let alumnoEncontrado = alumnos.find((alumno) => {
            return alumno.carnet === carnetIngresado;
        });

        console.log(`El carnet corresponde a: `.yellow, alumnoEncontrado.nombre);
        menuOpciones();
    })
}


