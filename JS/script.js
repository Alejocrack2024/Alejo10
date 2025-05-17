let nombre = "Juan";
let edad = 40;
let trabaja = true;
let info = {
    marca : "Toyota",
    modelo : "Yaris",
    year : 2015,
}
if(edad >= 18){
    console.log
}

let count = 3
while(count>=0){
    count=count-1;
}

let p = 2; // Aquí definimos la variable 'p'

switch (p) {
  case 1:
    console.log("El valor de p es 1.");
    break;
  case 2:
    console.log("El valor de p es 2.");
    // Aquí podrías usar la variable 'p' si fuera necesario para alguna otra lógica.
    let otroValor = p * 5;
    console.log("Otro valor calculado usando p:", otroValor);
    break;
  default:
    console.log("El valor de p no es ni 1 ni 2.");
    break;
}

let parrafo = document.createElement("p");
parrafo.textContent = "Hola";
parrafo.style.color = "red";
document.body.appendChild(parrafo);

let titulo = document.createElement("h1");
titulo.textContent = "Hola Mundo";
titulo.style.color = "blue";
document.body.appendChild(titulo);

let subtitulo = document.createElement("h2");
subtitulo.textContent = "Introducción al mundo de programación";
subtitulo.style.color = "red";
document.body.appendChild(subtitulo);

let parrafo2 = document.createElement("p");
parrafo2.textContent = "Eso se pone en el print (Hola mundo)";
parrafo2.style.color = "green";
document.body.appendChild(parrafo2);

let subtitulo2 = document.createElement("h2");
subtitulo2.textContent = "Terminaste el curso";
subtitulo2.style.color = "yellow";
document.body.appendChild(subtitulo2);

let parrafo3 = document.createElement("p");
parrafo3.textContent = "Te has recibido en el curso de programación";
parrafo3.style.color = "black";
document.body.appendChild(parrafo3);

let img = document.createElement('img');
img.src = 'Imagen.png';
document.body.appendChild(img);

function suma (a,b) {
    return a+b;
}

function resta (a,b) {
    return a-b;
}

function multiplicacion (a,b) {
    return a*b;
}

function division (a,b) {
    return a/b;
}

console.log(suma(3,10));

let opcion = 1
let opcion = 2
let opcion = 3
let opcion = 4


 switch (opcion) {
    case 1:
        suma (a,b)
            break;
    case 2:
        resta (a,b)
            break;
    case 3:
        multiplicacion (a,b)
            break;
    case 4:
        division (a,b)
        break;
    case: default}

