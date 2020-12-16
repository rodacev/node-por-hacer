//const argv = require('yargs').argv

const argv = require('./config/yargs').argv

const porHacer = require('./por-hacer/por-hacer');

const colors = require('colors');


let comando = argv._[0];

switch (comando) {

    case 'crear':
        console.log('Crear tarea por hacer');
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':

        let listado = porHacer.getListado();

        listado.forEach(tarea => {

            console.log('==== Por Hacer ===='.green);
            console.log(tarea.descripcion);
            console.log('Estado : ', tarea.completado);
            console.log('==================='.green);

        });




        break;

    case 'actualizar':
        console.log('Actualizar una tarea por hacer');

        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);

        console.log(actualizado);

        break;

    default:
        console.log(`El comando ${comando} no es reconocido`);


    case 'borrar':
        console.log('borrar tarea');

        let borrar = porHacer.borrar(argv.descripcion);

        console.log(borrar);
        break;
}