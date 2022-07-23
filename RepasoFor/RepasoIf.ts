// Reto2
export function Continent(pais) {
    pais.toLowerCase()
    if (pais == "españa" || pais == "francia" || pais == "alemania" || pais == "italia" || pais == "austria") {
        console.log("Europe");
    } else if (pais == "china" || pais == "japon" || pais == "vietnam" || pais == "india" || pais == "korea") {
        console.log("Asia");
    } else if (pais == "surafrica" || pais == "egipto" || pais == "marruecos" || pais == "chad" || pais == "argelia") {
        console.log("Africa");
    } else if (pais == "argentina" || pais == "peru" || pais == "colombia" || pais == "brazil" || pais == "chile") {
        console.log("Sudamerica");
    } else if (pais == "canada" || pais == "estados unidos" || pais == "mexico" || pais == "itsmo de tehuantepec" || pais == "groenlandia") {
        console.log("Norteamerica");
    } else {
        console.log("Oceanía");
    }
}

// Reto9
export function printnumb(number) {
    if (number % 2 == 0) {
        console.log("El numero es par");
    } else {
        console.log("El numero es impar");
    }
}