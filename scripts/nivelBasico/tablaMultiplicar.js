numero = parseInt(prompt("Ingrese un número para mostrar su tabla de multiplicar:"));

function tablaMultiplicar(numero) {
    for (let i = 1; i <= 10; i++) {
        alert(`${numero} x ${i} = ${numero * i}`);
    }
    return
}

tablaMultiplicar(numero);