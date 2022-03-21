/*********************************
 * El infierno de los callbacks
 ********************************/

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

const salario = [
	{
		id: 1,
		salario: 500,
	},
	{
		id: 2,
		salario: 1000,
	},
];

// función para traer la informaciṕon del empleado

const getEmpleado = (id, callback) => {
	const empleado = empleados.find((e) => {
		return e.id === id;
	});

	// si el empleado existe o si no existe (!empleado)
	if (empleado) {
		callback(null, empleado); // se utiliza el NULL para evitar el error
	} else {
		callback(`Empleado con id ${id} no existe`);
	}
};

getEmpleado(10, (err, empleado) => {
	if (err) {
		console.log('ERROR!');
		return console.log(err);
	} else {
		console.log('Empleado si existe');
		console.log(empleado);
	}
});

// console.log(getEmpleado(5));
