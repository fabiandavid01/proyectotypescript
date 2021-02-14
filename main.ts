import {Aprendiz, NivelEducativo} from './aprendiz.js';
import {Curso} from './curso.js'

let cursos = [new Curso("Prácticas esenciales para el ágilismo",20,90,true,2019)
,new Curso("Ingeniería de software para la web",15,90,true,2018) 
,new Curso("Pruebas automatizadas",15,50,false,2018)
,new Curso("Principios de diseño y arquitectura",30,75,true,2020) ]

export const ap = new Aprendiz("Juan Pablo", "Reyes Gómez", "avatar.png", 30, NivelEducativo.POSGRADO,cursos);
console.log(ap.cursos);

let aprendizTable: HTMLElement = document.getElementById("aprendiz")!;
let estadisticasTable: HTMLElement = document.getElementById("estadisticas")!;

mostrarDatosAprendiz(ap);
mostrarEstadisticas(ap);

function mostrarDatosAprendiz(aprendiz: Aprendiz): void{
    let tbodyAprendiz = document.createElement("tbody");
    tbodyAprendiz.innerHTML = `<tr><td colspan=2><img src="./${aprendiz.avatar}" height="100"></td></tr>
    <tr> <td>Nombres:</td><td>${aprendiz.nombres}</td></tr>
    <tr> <td>Apellidos:</td><td>${aprendiz.apellidos}</td></tr>
    <tr> <td>Nivel educativo:</td><td>${aprendiz.nivelEducativo}</td></tr>
    <tr> <td>Edad:</td> <td>${aprendiz.edad}</td></tr>`
    aprendizTable.appendChild(tbodyAprendiz);
}

function mostrarEstadisticas(aprendiz: Aprendiz): void{
    let numeroCertificado: number = aprendiz.darCursosCertificados();
    let trElement: HTMLElement = document.createElement("tr");
    trElement.innerHTML = `<td><b>Cursos certificados<b/></td><td>${numeroCertificado}</td>`;
    estadisticasTable.appendChild(trElement)
}
console.log(ap);

