// Templates Literal o Template String

const nombre = 'cristian';
const nombre2 = 'josé';
const apellido = 'carrillo';
const apellido2 = 'cegarra';

const nombres = nombre + ' ' + nombre2;

// utilizando template literal
const apellidos = `${apellido} ${apellido2}`;

const nombreCompleto = `Mi nombre es: ${nombres} ${apellidos}`;

console.log(nombres);
console.log(apellidos);

console.log(nombreCompleto);
