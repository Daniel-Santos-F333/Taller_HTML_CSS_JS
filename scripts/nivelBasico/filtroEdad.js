function filtrarEdades(listaEdades) {
    for (let i = 0; i < listaEdades.length; i++) {
        let edadActual = listaEdades[i];
        
        if (edadActual >= 18) {
            alert(`Edad: ${edadActual} -> Es mayor de edad.`);
        } else {
            alert(`Edad: ${edadActual} -> Es menor de edad.`);
        }
    }
}

const edadesSistema = [15, 22, 12, 40, 18, 5, 33];
filtrarEdades(edadesSistema);