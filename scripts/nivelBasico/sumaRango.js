function sumarRango(numeroInicio, numeroFin) {
    let sumaTotal = 0;

    for (let i = numeroInicio; i <= numeroFin; i++) {
        sumaTotal += i;
    }

    return sumaTotal;
}

const inicio = 1;
const fin = 10;
alert(`La suma del rango de ${inicio} a ${fin} es: ${sumarRango(inicio, fin)}`);