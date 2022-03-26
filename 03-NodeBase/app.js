/**
 *  working
 */

const fs = require('fs');

console.clear();
console.log(`
==========================
        Tabla del 5
==========================`);

//Mi código de la tarea

// for (let n = 0; n <= 10; n++) {
// 	r = n * 5;
// 	console.log(`5 x ${n} = ${r}`);
// }

// Ejemplo de Fernando
const base = 3;
let salida = '';

for (let i = 1; i <= 10; i++) {
	salida += `${base} x ${i} = ${base * i} \n`;
}
console.log(salida);

fs.writeFile(`table-${base}.txt`, salida, (err) => {
	if (err) throw err;
	console.log(`table-${base}.txt creado`);
});

console.log(salida);
