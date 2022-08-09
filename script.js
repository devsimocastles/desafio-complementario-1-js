


// Juego encontrar el número
let respuesta, numero = 17;

while (respuesta != numero) {

    respuesta = parseInt(prompt("Ingrese un número del 1 al 100"));

    if (respuesta < 1 || respuesta > 100) alert("Error -> el número escrito está fuera del rango");

    else if (respuesta > numero) alert("El número escrito es mayor");

    else if (respuesta < numero) alert("El número escrito es menor");

    else if (respuesta == numero) {

        alert("Número encontrado, has ganado!")
        break;

    }

    else alert("Respuesta inválida");
}


