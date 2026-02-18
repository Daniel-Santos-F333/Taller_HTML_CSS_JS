function contarVocales(texto) {
    const vocales = "aeiouAEIOU";
    let totalVocales = 0;

    for (let i = 0; i < texto.length; i++) {
        if (vocales.includes(texto[i])) {
            totalVocales++;
        }
    }

    return totalVocales;
}

const palabraPrueba = "Nexus Protocol";
alert(`La palabra "${palabraPrueba}" tiene ${contarVocales(palabraPrueba)} vocales.`);