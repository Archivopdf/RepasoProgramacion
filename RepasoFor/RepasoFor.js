"use strict";
exports.__esModule = true;
exports.SumCaracters = exports.nameStarts = exports.rainbow = exports.printOdds = void 0;
// Reto3
function printOdds(number) {
    for (var i = 0; i <= number; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }
}
exports.printOdds = printOdds;
// Reto4
function invert(array) {
    // return array.reverse()
    var arrayvacio = new Array(array.length);
    for (var i = array.length; i >= 0; i--) {
        arrayvacio[array.length - i] = array[i];
    }
    return arrayvacio;
}
// Reto5
function rainbow(arraycolors) {
    for (var i = 0; i < arraycolors.length; i++) {
        if (arraycolors[i] == "rojo" || arraycolors[i] == "naranja" || arraycolors[i] == "amarillo" || arraycolors[i] == "verde" || arraycolors[i] == "azul" || arraycolors[i] == "añil" || arraycolors[i] == "violeta") {
            console.log(arraycolors[i] + " " + true);
        }
        else {
            console.log(arraycolors[i] + " " + false);
        }
    }
}
exports.rainbow = rainbow;
// Reto7
function nameStarts(arrayofnames) {
    for (var i = 0; i < arrayofnames.length; i++) {
        if (arrayofnames[i].charAt(0) == "M" || arrayofnames[i].charAt(0) == "m") {
            return true;
        }
        else {
            return false;
        }
    }
}
exports.nameStarts = nameStarts;
// Reto8
function SumCaracters(array1) {
    var sum = 0;
    for (var i = 0; i < array1.length; i++) {
        sum += array1[i].length;
    }
    return sum;
}
exports.SumCaracters = SumCaracters;
