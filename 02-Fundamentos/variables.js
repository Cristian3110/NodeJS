// Fundamentos de Javascript variables

var nombre = 'josé';

if (true) {
	var nombre = 'cristian';
}

console.log(nombre); // podemos denotar que el scope es globalizado, cambia e influye en las demás variables declaradas

let apellido = 'carrillo';

if (true) {
	let apellido = 'cegarra';
}

console.log(apellido);

const apodo = 'chapulin';
if (true) {
	const apodo = 'lento rodriguez';
}

console.log(apodo);
