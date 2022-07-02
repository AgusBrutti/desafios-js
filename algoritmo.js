let nombre = prompt ("Ingresa nombre del alumno");
let apellido = prompt ("Ingresa apellido");

let notas1 = parseInt(prompt("Ingrese la 1er nota del alumno."));
let notas2 = parseInt(prompt("Ingrese la 2da nota del alumno."));
let notas3 = parseInt(prompt("Ingrese la 3er nota del alumno."));
let listadoNotas = [notas1,notas2,notas3];
let contadorNotas=0;

for (let i = 0; i < 3; i++){
    contadorNotas += listadoNotas[i];
}
let promedio = Math.round(contadorNotas/3);
if (promedio > 6){
    alert("La nota promedio de " + nombre + " " + apellido + " " +  "es de: " + promedio + ". " + "Está aprobado.");
}else{
    alert("La nota promedio de " + nombre + " " + apellido + " " +  "es de: " + promedio + ". " + "Está desaprobado.");
}