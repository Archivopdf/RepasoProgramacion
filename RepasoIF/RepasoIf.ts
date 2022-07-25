// reto1
function signoZod(month, day) {

    let signozodiaco = "";
    if (month == "december") {

        if (day < 22)
            signozodiaco = "Sagittarius";
        else
            signozodiaco = "capricorn";
    }

    else if (month == "january") {
        if (day < 20)
            signozodiaco = "Capricorn";
        else
            signozodiaco = "aquarius";
    }

    else if (month == "february") {
        if (day < 19)
            signozodiaco = "Aquarius";
        else
            signozodiaco = "pisces";
    }

    else if (month == "march") {
        if (day < 21)
            signozodiaco = "Pisces";
        else
            signozodiaco = "aries";
    }
    else if (month == "april") {
        if (day < 20)
            signozodiaco = "Aries";
        else
            signozodiaco = "taurus";
    }

    else if (month == "may") {
        if (day < 21)
            signozodiaco = "Taurus";
        else
            signozodiaco = "gemini";
    }

    else if (month == "june") {
        if (day < 21)
            signozodiaco = "Gemini";
        else
            signozodiaco = "cancer";
    }

    else if (month == "july") {
        if (day < 23)
            signozodiaco = "Cancer";
        else
            signozodiaco = "leo";
    }

    else if (month == "august") {
        if (day < 23)
            signozodiaco = "Leo";
        else
            signozodiaco = "virgo";
    }

    else if (month == "september") {
        if (day < 23)
            signozodiaco = "Virgo";
        else
            signozodiaco = "libra";
    }

    else if (month == "october") {
        if (day < 23)
            signozodiaco = "Libra";
        else
            signozodiaco = "scorpio";
    }

    else if (month == "november") {
        if (day < 22)
            signozodiaco = "scorpio";
        else
            signozodiaco = "sagittarius";
    }

}
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