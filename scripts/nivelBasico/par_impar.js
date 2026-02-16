numero = parseInt(prompt("Ingrese un número para determinar si es par o impar:"));

function determinarParOImpar(numero) {
    if (numero % 2 === 0) {
        return "par";
    } else {
        return "impar";
    }
}

for (let i = 1; i <= numero; i++) {
    let resultado = determinarParOImpar(i);
    alert(`El número ${i} es ${resultado}.`);
}