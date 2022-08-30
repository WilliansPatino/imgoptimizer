// const yargs = require('yargs');
const { optimizeImages } = require('./helpers/optimize-images');

const argv = require('./config/yargs')

/* parameters
  
  s - origen
  p - porcentaje
  d - destino
  l - listar


*/

console.clear();

optimizeImages(argv.s, argv.p, argv.d, argv.l );
/* .then ( newImage => console.log(newImage, 'terminado'))
.catch (err => console.log(err));  */