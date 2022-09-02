const yargs = require('yargs');
const colors = require('colors');
const { boolean } = require('yargs');
const argv = require('yargs')
        .option({
        's': {
            alias: 'origen',
            type: 'string',
            demandOption: false,
            describe: colors.brightCyan('Directorio origen de las imagenes')
        },
        'i': {
          alias: 'info',
          type: 'boolean',
          demandOption: false,
          default: false,
          describe: colors.brightCyan('Mostrar información de la foto ')
      },
      'o': {
        alias: 'optimizar',
        type: 'boolean',
        demandOption: false,
        default: false,
        describe: colors.brightCyan('Optimizar archivos de imágenes ')
    }
    }) 
    .check( (argv, options) => {
        if ( typeof argv.s !== 'string' ) {
          // if ( isNaN(argv.o) ) {
            throw colors.brightRed('El directorio de imagenes es requerido')
        }
        return true;
    })
    .check( (argv, options) => {
        if ( argv.i.lenght === 0  ) {
          // if ( isNaN(argv.o) ) {
            throw colors.brightRed(' REquiere')
        }
        return true;
    })
    .argv;

module.exports = argv  ;