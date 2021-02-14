import { Aprendiz, NivelEducativo } from './aprendiz.js';
import { Curso } from './curso.js';
var cursos = [new Curso("Prácticas esenciales para el ágilismo", 20, 90, true, 2019),
    new Curso("Ingeniería de software para la web", 15, 90, true, 2018),
    new Curso("Pruebas automatizadas", 15, 50, false, 2018),
    new Curso("Principios de diseño y arquitectura", 30, 75, true, 2020)];
export var ap = new Aprendiz("Juan Pablo", "Reyes Gómez", "avatar.png", 30, NivelEducativo.POSGRADO, cursos);
console.log(ap.cursos);
var aprendizTable = document.getElementById("aprendiz");
var estadisticasTable = document.getElementById("estadisticas");
mostrarDatosAprendiz(ap);
mostrarEstadisticas(ap);
function mostrarDatosAprendiz(aprendiz) {
    var tbodyAprendiz = document.createElement("tbody");
    tbodyAprendiz.innerHTML = "<tr><td colspan=2><img src=\"./" + aprendiz.avatar + "\" height=\"100\"></td></tr>\n    <tr> <td>Nombres:</td><td>" + aprendiz.nombres + "</td></tr>\n    <tr> <td>Apellidos:</td><td>" + aprendiz.apellidos + "</td></tr>\n    <tr> <td>Nivel educativo:</td><td>" + aprendiz.nivelEducativo + "</td></tr>\n    <tr> <td>Edad:</td> <td>" + aprendiz.edad + "</td></tr>";
    aprendizTable.appendChild(tbodyAprendiz);
}
function mostrarEstadisticas(aprendiz) {
    var numeroCertificado = aprendiz.darCursosCertificados();
    var trElement = document.createElement("tr");
    trElement.innerHTML = "<td><b>Cursos certificados<b/></td><td>" + numeroCertificado + "</td>";
    estadisticasTable.appendChild(trElement);
}
console.log(ap);
