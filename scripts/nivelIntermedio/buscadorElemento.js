function buscarElemento(arreglo, valorBuscado) {
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] === valorBuscado) {
            return true;
        }
    }
    return false;
}