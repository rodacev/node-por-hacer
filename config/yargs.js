////

const opcionesCrear = {

    descripcion: {
        demand: true,
        alias: 'd'
    }
}

const opcionesActualizar = {

    descripcion: {
        demand: true,
        alias: 'd'
    },
    completado: {
        default: true,
        alias: 'c'
    }
}




const argv = require('yargs')
    .command('crear', 'Crea una tarea por hacer', opcionesCrear)
    .command('actualizar', 'Actualiza el estado completado de una tarea', opcionesActualizar)
    .command('borrar', 'Borrar una tarea', opcionesCrear)
    .help()
    .argv


module.exports = {
    argv
}