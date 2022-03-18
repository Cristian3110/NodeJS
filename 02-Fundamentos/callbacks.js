/*** ********************
 * Callbacks en Js: Es una función que se manda como un argumento
 *****************************/

const getUsuarioByID = (id, callback) => {
	const user = {
		//id: id,
		id,
		nombre: 'Cristian',
	};
	setTimeout(() => {
		callback(user);
	}, 3000);
};

getUsuarioByID(10, (usuario) => {
	console.log(usuario.id);
	console.log(usuario.nombre);
});
