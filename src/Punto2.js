/*Inscripción cursos
    1. Buscar Curso y Generar un mensaje de alerta si el curso no esta
    2. Esta interesado?, si escribe "Inscribir" -> hacer el proceso de inscripción
    y quedar como prematriculado
    Ingresar información del usuario
    Genera el archivo de texto con la información del curso y del estudiante
  */

(function () {
    const { cursos } = require('./datos');
    let rl = require('readline-sync');
    let fs = require('fs');
    let response = '';
    let idCurso = '';
    let cedula = '';
    let nombre = '';

    let crearArchivo = (cedula, nombre, idCurso) => {
        texto = 'La cedula del estudiante es: ' + cedula + '\n' +
            'El nombre del estudiante es: ' + nombre + '\n' +
            'Nombre del curso: ' + idCurso;
        fs.writeFile('promedio.txt', texto, (err) => {
            if (err) throw (err);
            console.log('Se ha creado el archivo');
        });
    }

    console.log("Cursos Disponibles: " + '\n');
    cursos.forEach(curso => console.log(curso.id + ' ' + curso.nombre + '\n'));


    idCurso = rl.question("Ingrese el codigo del curso que desea buscar: ");
    buscarCurso = cursos.find(
        curso => (curso.id == idCurso));


    if (buscarCurso == undefined) {
        console.log('No se encontro el curso');
    } else {
        console.log(buscarCurso);
        response = rl.question('¿Estas interesado en tomar este curso? (Escriba "inscribir" si esta interesado) : ');
        if (response == 'inscribir') {
            console.log('Ingrese la siguiente informacion');
            cedula = rl.question('Cedula : ');
            nombre = rl.question('Nombre : ');
            crearArchivo(cedula, nombre, idCurso);
        } else {
            console.log("Cursos Disponibles: " + '\n');
            cursos.forEach(curso => console.log(curso.id + ' ' + curso.nombre + '\n'));
        }
    }
})();
