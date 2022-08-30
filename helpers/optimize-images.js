
// const yargs = require('yargs');
const argv = require('../config/yargs');
const colors = require('colors');
const fs = require('fs')
const path =require('path')
const { v4: uuidv4 } = require('uuid');
const imagemin = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminPngquant = require('imagemin-pngquant')

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
          
          if ( validExtensions.includes(extension_file) ) {
            

            // return console.log(formatCLI('light', file ) );
            return alert({type:'success',msg: file, name: 'Procesada'})

            total ++
  
               // console.log(shorter_filename)
          // console.log('imagen: ',file)
  
  
            // console.log(formatCLI('ok', item ))
  
  
            // assign different name to file, even to same file uploaded
          const temp_namefile = uuidv4() + '.' + extension_file;
  
          // console.log(index+'. '+file+' > '+` ${temp_namefile}`)
  
          // const img = await comprimirImagen(file, argv.optimizar )
  
          } 
          
        }); // foreach
        
        return total;
  });

  //   return console.log(` --- Parámetros ---
  //   Origen              : ${pwd}
  //   Destino             : ${destination}
  //   % optimización      : ${quality}
  //   Mostrar en consola  : ${show}
  //  `)


  }
  catch (err) {
    throw err;
  }

} // optimizarImage

module.exports = { optimizeImages }