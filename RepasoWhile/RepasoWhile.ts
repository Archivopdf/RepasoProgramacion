// Reto6
export function returneven(arraynumbers) {

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
