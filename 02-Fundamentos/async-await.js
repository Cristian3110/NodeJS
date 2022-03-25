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

const getInfoUsuario = async (id) => {
	try {
		const empleado = await getEmpleado(id);
		const salario = await getSalario(id);

		return `El salario del empleado: ${empleado} es de: ${salario}`;
	} catch (error) {
		return error;
	}
};

const id = 3;

getInfoUsuario(id)
	.then((msg) => console.log(msg))
	.catch((err) => console.log(err));
