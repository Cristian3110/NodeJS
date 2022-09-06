/**
 * Autenticación de google Sign-In
 */

// especificando que estamos en Desarrollo, devuelve true
console.log(window.location.hostname.includes('localhost'));

const miFormulario = document.querySelector('form');

// ternary operator
const url = window.location.hostname.includes('localhost')
	? 'http://localhost:8080/api/auth/'
	: 'https://restserver-production.up.railway.app/api/auth/';

//? ejecución del formulario
miFormulario.addEventListener('submit', (ev) => {
	//Para no hacer el refresh de la page
	ev.preventDefault();

	const formData = {};

	for (let el of miFormulario.elements) {
		if (el.name.length > 0) {
			formData[el.name] = el.value;
		}
	}
	console.log(formData);
	// conectandome a mi backEnd
	fetch(url + 'login', {
		method: 'POST',
		body: JSON.stringify(formData),
		headers: { 'Content-Type': 'application/json' },
	})
		.then((resp) => resp.json())
		.then(({ errors, msg, token }) => {
			// console.log(data);
			// console.log(`${data.errors[0].msg} y ${data.errors[1].msg}`);
			if (errors) {
				console.log(`${errors[0].msg} / ${errors[1].msg}`);
			}
			if (msg) {
				console.log(msg);
			}
			localStorage.setItem('token', token);
		})
		.catch((err) => console.log(err));
});

function handleCredentialResponse(response) {
	console.log('Encoded JWT ID token: ' + response.credential);
	// console.log(response);

	let id_token = response.credential;
	const data = { id_token };
	fetch(url + 'google', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(data),
	})
		.then((resp) => resp.json())
		// .then((data) => console.log('My server', data))
		// .then(({ token }) => console.log('My token', token))
		.then(({ token }) => localStorage.setItem('token', token))
		.catch((err) => console.log(err));
}
window.onload = function () {
	google.accounts.id.initialize({
		client_id: '1020712000852-gaucre2skm4g6mvig2rme3p7co6f0k45.apps.googleusercontent.com',
		callback: handleCredentialResponse,
	});
	google.accounts.id.renderButton(
		document.getElementById('buttonDiv'),
		{ theme: 'outline', size: 'large' } // customization attributes
	);
	google.accounts.id.prompt(); // also display the One Tap dialog
};
