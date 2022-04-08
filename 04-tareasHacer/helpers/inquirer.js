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
				name: '1.- Crear lista',
			},
			{
				value: '2',
				name: '2.- Listar tareas ',
			},
			{
				value: '3',
				name: '3.- Listar tareas completadas ',
			},
			{
				value: '4',
				name: '4.- Listar tareas pendientes ',
			},
			{
				value: '5',
				name: '5.- Completar tarea(s)',
			},
			{
				value: '6',
				name: '6.- Borrar tareas',
			},
			{
				value: '0',
				name: '0.- Salir',
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

module.exports = {
	inquirerMenu,
	pausa,
};
