// Reto6
function returneven(arraynumbers) {

    let i = 0;
    let a = true;

    while (i < arraynumbers.length) {

        if (arraynumbers[i] % 2 == 0) {

            a = false;

            return "Hay un numero par";

        }
        i = i + 1;
    }
    return "No hay un numero par"
}
let prueba = [3, 1, 3, 5];
console.log(returneven(prueba));



// Reto10

let array1 = ["Casa", "Ciudad", "Cesta"];
let array2 = ["Baca", "Barco", "Bicicleta", "Balon", "Brasil"];
let array3 = ["Venezuela", "Veneno", "Voltaje"];