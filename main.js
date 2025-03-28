
// Ejercicio 1:
// Diseña un algoritmo que cuente las veces que aparece una determinada 
// letra en una frase


function contarLetras(frase, letra) {
   
    let contador = 0;

    for (let i = 0; i < frase.length; i++) {
        if (frase[i].toLowerCase() === letra.toLowerCase()) {
            contador++;
        }
    }
    return contador;
}


let frase = prompt("Introduce una frase:");
let letra = prompt("Introduce la letra a buscar:");

let resultado = contarLetras(frase, letra);
alert("La letra '" + letra + "' aparece " + resultado + " veces en la frase.");




// Ejercicio 2:
// Diseña un algoritmo que imprima los números impares entre un número dado 
// por el usuario y los siguientes 50 números

let numeroUsuario = parseInt(prompt("Introduce un número:"));

for (let i = numeroUsuario; i < numeroUsuario + 50; i++) {
    
    if (i % 2 !== 0) {
        alert(i);
    }
}



