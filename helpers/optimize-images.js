
// const yargs = require('yargs');
// const argv = require('../config/yargs');
const colors = require('colors');
const fs = require('fs')
const path =require('path')
const { v4: uuidv4 } = require('uuid');
const alert = require('cli-alerts');



const { formatCLI,  
      error, 
      warn, 
      notice, 
      bold, 
      lite, 
      italic, 
      blink, 
      underline, 
      danger,
      success,
      terminal} = require('./colors-formatting-cli');
const getMD5file = require('./md5-files');


const validExtensions = ['png','jpg','jpeg'];

const destination = './nuevas-imagenes-para-web'

function showDir(dir) {
  return  colors.brightCyan(dir)
}

const menuItem = (item, content='') => {

  let c;

  c = ' '+content.toString().padStart(5,' ')
  return item.padEnd(57,".")+c;

} 

let total;

const optimizeImages = async (source, 
        quality = 25, destD = destination , show = true) => {

          if ( !source ) {
            return console.log(formatCLI('warning', 'Debe indicar el directorio'))
          }

    console.log(notice('--  Parámetros --'));
    console.log(menuItem('Directorio de imágenes: ', source));
    console.log(menuItem('% de optimización: ', quality));
    console.log(menuItem('Directorio destinado para imágenes procesadas: ', destination));
    console.log(menuItem('Mostrar el procesado en consola: ',  `${(show) ? 'Sí': 'No'}` ));

  try {

    

    const pwd = path.dirname(source) === '.' 
      ? showDir('Actual') 
      : showDir(source);

      fs.readdir(source, (err, files) => {

        // console.log(`\n>>> Archivo del directorio: ${pwd}`);
  
        files.forEach((file, index) => { 
          
          // get extension file
          const shorter_filename = file.split('.');
          const extension_file = shorter_filename[ shorter_filename.length -1 ];
  
          // to test output
          // console.log(item)
          const item = {index, file}

          // console.log('Procesamiento de ',file)
            // md5 hash of the file
        // const md5hash_file = getMD5file(file)

        // const temp_namefile = md5hash_file + '.' + extension_file
          
      const temp_namefile = uuidv4() + '.' + extension_file;
          
         
          
        }); // foreach
        
        return total;
  });

  }
  catch (err) {
    throw err;
  }

} // optimizarImage

module.exports = { optimizeImages }