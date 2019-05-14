/* Eliga una opción
    1. Punto 1
    2. Punto 2
*/
let rl = require('readline-sync');

console.log("      Primera Entrega " + '\n');
console.log("1. Mostrar Los cursos " + '\n');
console.log("2. Inscripción a los cursos " + '\n');

idCurso = rl.question("Eliga una opcion (1 o 2): ");
if (idCurso == 1) {
    const punto1 = require('./src/Punto1');
} else {
    const punto2 = require('./src/Punto2');
}
