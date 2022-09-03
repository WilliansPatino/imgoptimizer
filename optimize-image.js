// const yargs = require('yargs');
const { imageProcessing } = require('./controllers/image-processing');

const argv = require('./config/yargs')

/* parameters
  
  s - origen
  p - porcentaje
  d - destino
  l - listar


*/

console.clear();

imageProcessing(argv.s, argv.p, argv.d, argv.l, false, true );
/*
.then ( newImage => console.log('Total imágenes:', newImage))
.catch (err => console.log(err));  

*/
