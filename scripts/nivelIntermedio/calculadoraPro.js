function calculadora(n1, n2, operacion) {
    let resultado;
    switch (operacion.toLowerCase()) {
        case "suma":
            resultado = n1 + n2;
            break;
        case "resta":
            resultado = n1 - n2;
            break;
        case "multi":
            resultado = n1 * n2;
            break;
        case "div":
            resultado = n2 !== 0 ? n1 / n2 : "Error: Div por 0";
            break;
        default:
            resultado = "Operación no válida";
    }
    return resultado;
}