/*************************************
 * Trabajando con el paquete inquirer
 ***********************************/

const inquirer = require('inquirer');
require('colors');

// realizando las diferentes prerguntas q necesitamos en consola
const menuOption = [
	{
		type: 'list',
		name: 'option',
		message: '¿Qué desea hacer?',
		choices: [
			{
				value: '1',
				name: `${'1.-'.yellow} Crear lista'`,
			},
			{
				value: '2',
				name: `${'2.-'.yellow} Listar tareas`,
			},
			{
				value: '3',
				name: `${'3.-'.yellow} Listar tareas completadas`,
			},
			{
				value: '4',
				name: `${'4.-'.yellow} Listar tareas pendientes`,
			},
			{
				value: '5',
				name: `${'5.-'.yellow} Completar tarea(s)`,
			},
			{
				value: '6',
				name: `${'6.-'.yellow} Borrar tareas`,
			},
			{
				value: '0',
				name: `${'0.-'.yellow} Salir`,
			},
		],
	},
];

const question = [
	{
		type: 'input',
		name: 'enter',
		message: `Presione ${'ENTER'.yellow} para continuar`,
	},
];

const inquirerMenu = async () => {
	console.clear();
	console.log('======================='.red);
	console.log('Seleccione una Opción'.yellow);
	console.log('=======================\n'.red);

	const { option } = await inquirer.prompt(menuOption);

	return option;
};

const pausa = async () => {
	console.log('\n');
	const { enter } = await inquirer.prompt(question);

	return enter;
};

const leerInput = async (message) => {
	const question = [
		{
			type: 'input',
			name: 'desc',
			message: message,
			validate(value) {
				if (value.length === 0) {
					return 'Por favor ingrese un valor';
				}
				return true;
			},
		},
	];
	const { desc } = await inquirer.prompt(question);
	return desc;
};

const listadoTareasBorrar = async (tareas = []) => {
	const choices = tareas.map((tarea, i) => {
		const idx = `${i + 1}`.yellow;

		return {
			value: tarea.id,
			name: `${idx} ${tarea.desc}`,
		};
	});

	//Agregando la opción de cancelar dentro de las tareas borrar
	choices.unshift({
		value: '0',
		name: '0.-'.yellow + 'Cancelar',
	});
	const preguntas = [
		{
			type: 'list',
			name: 'id',
			message: 'Borrar',
			choices,
		},
	];

	const { id } = await inquirer.prompt(preguntas);
	return id;
};

const confirmar = async (message) => {
	const question = [
		{
			type: 'confirm',
			name: 'ok',
			message,
		},
	];
	const { ok } = await inquirer.prompt(question);
	return ok;
};

const mostrarListadoCheckList = async (tareas = []) => {
	const choices = tareas.map((tarea, i) => {
		const idx = `${i + 1}`.yellow;

		return {
			value: tarea.id,
			name: `${idx} ${tarea.desc}`,
			checked: tarea.completadoEn ? true : false,
		};
	});

	const pregunta = [
		{
			type: 'checkbox',
			name: 'ids',
			message: 'Seleccione',
			choices,
		},
	];

	const { ids } = await inquirer.prompt(pregunta);
	return ids;
};

module.exports = {
	inquirerMenu,
	pausa,
	leerInput,
	listadoTareasBorrar,
	confirmar,
	mostrarListadoCheckList,
};
