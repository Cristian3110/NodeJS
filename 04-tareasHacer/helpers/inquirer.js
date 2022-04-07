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
		choices: ['opt1', 'opt2', 'opt3'],
	},
];

const inquirerMenu = async () => {
	console.clear();
	console.log('======================='.red);
	console.log('Seleccione una Opción'.yellow);
	console.log('=======================\n'.red);

	const opt = await inquirer.prompt(menuOption);

	return opt;
};

module.exports = {
	inquirerMenu,
};
