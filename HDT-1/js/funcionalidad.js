
class clsCurso {
    constructor(nombre, anio, semestre) {
        this.nombre = nombre;
        this.anio = anio;
        this.semestre = semestre;
    }
}

arrCursos = [];

let DESARROLLO_HUMANO_Y_PROFESIONAL = new clsCurso("DESARROLLO HUMANO Y PROFESIONAL", 2020, 'Primer semestre');
let METODOLOGÍA_DE_LA_INVESTIGACIÓN = new clsCurso("METODOLOGÍA DE LA INVESTIGACIÓN", 2020, 'Primer semestre');
let CONTABILIDAD_I = new clsCurso("CONTABILIDAD I", 2020, 'Primer semestre');
let INTRODUCCIÓN_A_LOS_SISTEMAS_DE_CÓMPUTO = new clsCurso("INTRODUCCIÓN A LOS SISTEMAS DE CÓMPUTO", 2020, 'Primer semestre');
let LÓGICA_DE_SISTEMAS = new clsCurso("LÓGICA DE SISTEMAS", 2020, 'Primer semestre');
arrCursos.push(DESARROLLO_HUMANO_Y_PROFESIONAL, METODOLOGÍA_DE_LA_INVESTIGACIÓN, CONTABILIDAD_I, INTRODUCCIÓN_A_LOS_SISTEMAS_DE_CÓMPUTO, LÓGICA_DE_SISTEMAS);

let PRECÁLCULO = new clsCurso("PRECÁLCULO", 2020, 'Segundo semestre');
let ÁLGEBRA_LÍNEAL = new clsCurso("ÁLGEBRA LÍNEAL", 2020, 'Segundo semestre');
let ALGORITMOS = new clsCurso("ALGORITMOS", 2020, 'Segundo semestre');
let CONTABILIDAD_II = new clsCurso("CONTABILIDAD II", 2020, 'Segundo semestre');
let MATEMÁTICA_DISCRETA = new clsCurso("MATEMÁTICA DISCRETA", 2020, 'Segundo semestre');
arrCursos.push(PRECÁLCULO, ÁLGEBRA_LÍNEAL, ALGORITMOS, CONTABILIDAD_II, MATEMÁTICA_DISCRETA);

let FÍSICA_I = new clsCurso("FÍSICA I", 2021, 'Primer semestre');
let PROGRAMACIÓN_I = new clsCurso("PROGRAMACIÓN I", 2021, 'Primer semestre');
let CÁLCULO_I = new clsCurso("CÁLCULO I", 2021, 'Primer semestre');
let PROCESO_ADMINISTRATIVO = new clsCurso("PROCESO ADMINISTRATIVO", 2021, 'Primer semestre');
let DERECHO_INFORMÁTICO = new clsCurso("DERECHO INFORMÁTICO", 2021, 'Primer semestre');
arrCursos.push(FÍSICA_I, PROGRAMACIÓN_I, CÁLCULO_I, PROCESO_ADMINISTRATIVO, DERECHO_INFORMÁTICO);

let MICROECONOMÍA = new clsCurso("MICROECONOMÍA", 2021, 'Segundo semestre');
let PROGRAMACIÓN_II = new clsCurso("PROGRAMACIÓN II", 2021, 'Segundo semestre');
let CÁLCULO_II = new clsCurso("CÁLCULO II", 2021, 'Segundo semestre');
let ESTADÍSTICA_I = new clsCurso("ESTADÍSTICA I", 2021, 'Segundo semestre');
let FÍSICA_II = new clsCurso("FÍSICA II", 2021, 'Segundo semestre');
arrCursos.push(MICROECONOMÍA, PROGRAMACIÓN_II, CÁLCULO_II, ESTADÍSTICA_I, FÍSICA_II);

let MÉTODOS_NÚMERICOS = new clsCurso("MÉTODOS NÚMERICOS", 2022, 'Primer semestre');
let PROGRAMACIÓN_III = new clsCurso("PROGRAMACIÓN III", 2022, 'Primer semestre');
let EMPRENDEDORES_DE_NEGOCIOS = new clsCurso("EMPRENDEDORES DE NEGOCIOS", 2022, 'Primer semestre');
let ELECTRÓNICA_ANALÓGICA = new clsCurso("ELECTRÓNICA ANALÓGICA", 2022, 'Primer semestre');
let ESTADÍSTICA_II  = new clsCurso("ESTADÍSTICA II", 2022, 'Primer semestre');
arrCursos.push(MÉTODOS_NÚMERICOS, PROGRAMACIÓN_III, EMPRENDEDORES_DE_NEGOCIOS, ELECTRÓNICA_ANALÓGICA, ESTADÍSTICA_II);

let INVESTIGACIÓN_DE_OPERACIONES = new clsCurso("INVESTIGACIÓN DE OPERACIONES", 2022, 'Segundo semestre');
let BASES_DE_DATOS_I = new clsCurso("BASES DE DATOS I", 2022, 'Segundo semestre');
let AUTÓMATAS_Y_LENGUAJES_FORMALES = new clsCurso ("AUTÓMATAS Y LENGUAJES FORMALES", 2022, 'Segundo semestre'); 
let SISTEMAS_OPERATIVOS_I = new clsCurso("SISTEMAS OPERATIVOS I", 2022, 'Segundo semestre');
let ELECTRÓNICA_DIGITAL = new clsCurso("ELECTRÓNICA DIGITAL", 2022, 'Segundo semestre');
arrCursos.push(BASES_DE_DATOS_I, AUTÓMATAS_Y_LENGUAJES_FORMALES, SISTEMAS_OPERATIVOS_I, ELECTRÓNICA_DIGITAL);

let BASES_DE_DATOS_II = new clsCurso("BASES DE DATOS II", 2023, 'Primer semestre');
let ANÁLISIS_DE_SISTEMAS_I = new clsCurso("ANÁLISIS DE SISTEMAS I", 2023, 'Primer semestre');
let SISTEMAS_OPERATIVOS_II = new clsCurso("SISTEMAS OPERATIVOS II", 2023, 'Primer semestre');
let ARQUITECTURA_DE_COMPUTADORAS_I = new clsCurso("ARQUITECTURA DE COMPUTADORAS I", 2023, 'Primer semestre');
let COMPILADORES = new clsCurso("COMPILADORES", 2023, 'Primer semestre');
arrCursos.push(BASES_DE_DATOS_II, ANÁLISIS_DE_SISTEMAS_I, SISTEMAS_OPERATIVOS_II, ARQUITECTURA_DE_COMPUTADORAS_I, COMPILADORES);

arrCursos.forEach(curso => {
    let plantilla = `
        <tr>
        <td>${curso.nombre}</td>
        <td>${curso.anio}</td>
        <td>${curso.semestre}</td>
        </tr>
    `;
    document.getElementById("bodyTabla").innerHTML += plantilla;
});

console.log(arrCursos);
