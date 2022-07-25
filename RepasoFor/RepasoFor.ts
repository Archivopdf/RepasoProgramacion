// Reto3
export function printOdds(number) {

    for (let i = 0; i <= number; i++) {

        if (i % 2 != 0) {

            console.log(i);
        }
    }
}

// Reto4

export function invert(array) {

    // return array.reverse()

    let arrayvacio = new Array(array.length);

    for (let i = array.length; i >= 0; i--) {

        arrayvacio[array.length - i] = array[i];
    }
    return arrayvacio;
}

// Reto5
export function rainbow(arraycolors) {
    for (let i = 0; i < arraycolors.length; i++) {
        if (arraycolors[i] == "rojo" || arraycolors[i] == "naranja" || arraycolors[i] == "amarillo" || arraycolors[i] == "verde" || arraycolors[i] == "azul" || arraycolors[i] == "añil" || arraycolors[i] == "violeta") {
            console.log(arraycolors[i] + " " + true);
        } else {
            console.log(arraycolors[i] + " " + false);
        }
    }
}

// Reto7

export function nameStarts(arrayofnames) {

    for (let i = 0; i < arrayofnames.length; i++) {

        if (arrayofnames[i].charAt(0) == "M" || arrayofnames[i].charAt(0) == "m") {

            return true

        } else {

            return false

        }
    }
}

// Reto8
export function SumCaracters(array1) {

    let sum = 0;

    for (let i = 0; i < array1.length; i++) {

        sum += array1[i].length;

    }

    return sum
}
