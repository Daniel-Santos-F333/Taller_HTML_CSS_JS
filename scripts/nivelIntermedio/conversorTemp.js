function convertirTemperatura(valor, unidadDestino) {
    if (unidadDestino.toUpperCase() === "F") {
        return (valor * 9/5) + 32;
    } else if (unidadDestino.toUpperCase() === "C") {
        return (valor - 32) * 5/9;
    }
    return "Unidad no válida";
}