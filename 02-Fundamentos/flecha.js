/**
 * Funciones flechas
 */

function sumar(a, b) {
	return a + b;
}

console.log(sumar(15, 5));

// funcion flecha

const restar = (a, b) => {
	return a - b;
};
console.log(restar(8, 3));

/**
 * Ahora ésta función anterior cuando es de una sola operación se puede reducir a una línea
 * A continuación un ejemplo
 */
const multiplicar = (a, b) => a * b;
console.log(multiplicar(5, 4));
