/**
 * Destructuración de objetos
 */

const elZorro = {
	nombre: 'Diego',
	apellido: 'De la Vega',
	poder: 'Espadachin',
	//edad: 30,
	descripcion: 'héroe',
	getNombre: function () {
		return `${this.nombre} ${this.apellido}`;
	},
	getDescripcion() {
		return `${this.nombre} ${this.apellido} ${this.poder} ${this.descripcion}`;
	},
};

// Sin aplicar destructuración

// const nombre = elZorro.nombre;
// const apellido = elZorro.apellido;
// const poder = elZorro.poder;

// console.log(nombre, apellido, poder); Resultado sin destructuración

// Aplicando DESTRUCTURACIÓN

//const {nombre, apellido, poder} = elZorro;
//console.log(nombre, apellido, poder); // El resultado es el mismo.

//También se le puede asignar
//const {nombre, apellido, poder, edad = 50} = elZorro;
//console.log(nombre, apellido, poder, edad);

/**
 * Otra manera de destructurar
 */

function imprimeHeroe(heroe) {
	const {nombre, apellido, poder, edad = 30} = heroe;
	console.log(nombre, apellido, poder, edad);
}

imprimeHeroe(elZorro);

// puedo desestructuras desde el argumento de la función

function imprimeHeroe2({nombre, apellido, poder, edad = 20}) {
	console.log(nombre, apellido, poder, edad);
}

imprimeHeroe2(elZorro);

const heroes = ['El zorro', 'Vegetta', 'Gokú'];

// const h1 = heroes[0];
// const h2 = heroes[1];
// const h3 = heroes[2];

// Ahora haciendo destructuración

// const [h1, h2, h3] = heroes;

// console.log(h1, h2, h3);

const [, , h3] = heroes;

console.log(h3);
