/**
 * Promesas en Javascript
 */

const empleados = [
	{
		id: 1,
		nombre: 'cristian',
	},
	{
		id: 2,
		nombre: 'Angel',
	},
	{
		id: 3,
		nombre: 'Maricarmen',
	},
];

const salarios = [
	{
		id: 1,
		salario: 500,
	},
	{
		id: 2,
		salario: 1000,
	},
];

const getEmpleado = (id) => {
	// const promesa
	return new Promise((resolve, reject) => {
		const empleado = empleados.find((e) => {
			return e.id === id;
		})?.nombre;

		if (empleado) {
			resolve(empleado);
		} else {
			reject(`No existe empleado con el id ${id}`);
		}
	});

	// return promesa;
};

const getSalario = (id) => {
	return new Promise((resolve, reject) => {
		const salario = salarios.find((e) => {
			return e.id === id;
		})?.salario;

		salario ? resolve(salario) : reject(`No existe un salario con el id ${id}`);
	});
};

const id = 3;

// getEmpleado(id)
// 	.then((empleado) => console.log(empleado))
// 	.catch((err) => console.log(err));

// getSalario(id)
// 	.then((salario) => console.log(salario))
// 	.catch((err) => console.log(err));

/***********************
 * Promesas en Cadena
 **********************/

let nombre;

getEmpleado(id)
	.then((empleado) => {
		nombre = empleado;
		return getSalario(id);
	})
	.then((salario) =>
		console.log(`El empleado: ${nombre} tiene un salario de : ${salario}`)
	)
	.catch((err) => {
		console.log(err);
	});

// Verificar después cómo solucionar que muestre el empleado aunque no posea salario
