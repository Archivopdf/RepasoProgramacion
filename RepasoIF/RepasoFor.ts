// Reto3
function printOdds(number) {

    for (let i = 0; i <= number; i++) {

        if (i % 2 != 0) {

            console.log(i);
        }
    }
}

// Reto5
function rainbow(arraycolors) {
    for (let i = 0; i < arraycolors.length; i++) {
        if (arraycolors[i] == "rojo" || arraycolors[i] == "naranja" || arraycolors[i] == "amarillo" || arraycolors[i] == "verde" || arraycolors[i] == "azul" || arraycolors[i] == "añil" || arraycolors[i] == "violeta") {
            console.log(arraycolors[i] + " " + true);
        } else {
            console.log(arraycolors[i] + " " + false);
        }
    }
}

// Reto7

function nameStarts(arrayofnames) {

    for (let i = 0; i < arrayofnames.length; i++) {

        if (arrayofnames[i].charAt(0) == "M" || arrayofnames[i].charAt(0) == "m") {

            return true

        } else {

            return false

        }
    }
}

// Reto8
// Comprobar
function SumCaracters(array1, array2) {

    let a = new Array(array1.length);
    for (let i = 0; i < array1.length; i++) {
        a[i] = array1[i].length
    }
    let Suma = 0;
    for (let i = 0; i < a.length; i++) {
        Suma += a[i];

    }

    let b = new Array(array2.length);
    for (let i = 0; i < array2.length; i++) {
        b[i] = array2[i].length
    }
    let Sumb = 0;
    for (let i = 0; i < b.length; i++) {
        Sumb += a[i];

    }
    let SumTotal = Sumb + Suma
    return SumTotal
}