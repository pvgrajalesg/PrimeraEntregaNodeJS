//Primer punto

(function () {
    const { cursos } = require('./datos');

    let mostrarCursos = (cursos) => {
        let i = 0;
        let interval = setInterval(function () {
            mostrar(i);
            i++;
            if (i == 3) {
                clearInterval(interval);
            }
        }, 2000);
    }

    function mostrar(i) {
        console.log(cursos[i]);
    }

    mostrarCursos();
})();