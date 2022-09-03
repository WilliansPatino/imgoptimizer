const argv = require('./config/yargs-infoimage');
const { imageProcessing } = require('./controllers/image-processing');

/* parameters
  
  s - origen
  p - porcentaje
  d - destino
  l - listar


*/

console.clear();

imageProcessing(argv.s, undefined, undefined, true, argv.i, argv.o);
/*
.then ( newImage => console.log('Total imágenes:', newImage))
.catch (err => console.log(err));  

*/
