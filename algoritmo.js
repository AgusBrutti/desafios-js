// Se ingresa primero el nombre del alumno y sus 3 notas
let nombre = prompt ("Ingresa nombre del alumno");
let apellido = prompt ("Ingresa apellido");
let notas1 = parseInt(prompt("Ingrese la 1er nota del alumno."));
let notas2 = parseInt(prompt("Ingrese la 2da nota del alumno."));
let notas3 = parseInt(prompt("Ingrese la 3er nota del alumno."));
//Se guardan los valores en un array
let listadoNotas = [notas1,notas2,notas3];
//Se declara una función que donde se va a sumar y contar las notas
function contadorDeNotas(listadoNotas){
    let contadorNotas=0;
    for (let i = 0; i < 3; i++){
        contadorNotas += listadoNotas[i];
    }
    return contadorNotas;
}
//Se guarda en una varible la funcion
let contador = contadorDeNotas(listadoNotas);
//Se declara otra función que realiza el promedio de las notas
function sacarPromedio(contador){
    let promedio = Math.round(contador/3);
    return promedio;
}
//Se guarda en otra variable
let promedio1 = sacarPromedio(contador);
//Se muestran los resultados en pantalla
if (promedio1 > 6){
    alert("La nota promedio de " + nombre + " " + apellido + " " +  "es de: " + promedio1 + ". " + "Está aprobado.");
}else{
    alert("La nota promedio de " + nombre + " " + apellido + " " +  "es de: " + promedio1 + ". " + "Está desaprobado.");
}