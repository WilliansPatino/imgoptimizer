const yargs = require('yargs');
const colors = require('colors');
const argv = require('yargs')
        .option({
        's': {
            alias: 'origen',
            type: 'string',
            demandOption: false,
            describe: colors.brightCyan('Directorio origen de las imagenes')
        },
        'p': {
            alias: 'porcentaje',
            type: 'number',
            default: 25,
            demandOption: false,
            describe: colors.brightCyan('Porcentaje de optimización')
        },
        'd': {
          alias: 'destino',
          type: 'string',
          demandOption: false,
        //   default: './nuevas-imagenes-para-web',
          describe: colors.brightCyan('Directorio destino ')
      },
      'l': {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: colors.brightCyan('Mostrar el resultado en consola')
    },
    })
    .check( (argv, options) => {
        if ( typeof argv.s !== 'string' ) {
          // if ( isNaN(argv.o) ) {
            throw colors.brightRed('El directorio de imagenes es requerido')
        }
        return true;
    })
    .check( (argv, options) => {
        if ( isNaN(argv.p) ) {
            throw colors.brightRed(' El porcentaje debe ser un número')
        }
        return true;
    })
/*     .help()
    .version() */
    .argv;

module.exports = argv  ;