

const yargs = require('yargs');
const argv = require('./config/yargs');
const colors = require('colors');
// const { crearArchivo } = require('./helpers/multiplicar-async');
const fs = require('fs')
const path =require('path')
const { v4: uuidv4 } = require('uuid');


const { alertAboutFiles } = require('./helpers/alerts');
const { comprimirImagen } = require('./helpers/img-compression');

// testing
// console.log('argv >>>', argv)

const validExtensions = ['png','jpg','jpeg'];


function showDir(dir) {
  return  colors.brightCyan(dir)
}


const optimizeImages = async (sourceD, quality, destD, show = true) => {

  try {


  }
  catch (err) {
    throw err;
  }

} // optimizarImage


console.clear();
console.log(` --- Parámetros 
 Origen         : ${argv.origen}
 Destino        : ${argv.destino}
 % optimización : ${argv.porcentaje}
 Mostrar en consola : ${argv.listar}
`)



const source_dir = argv.origen
const pwd = path.dirname(source_dir) === '.' 
      ? showDir('Actual') 
      : showDir(source_dir);

// console.log('___dirname >>>', __dirname)
// console.log('process.cwd >>>', process.cwd())

// console.log(path.dirname(source_dir));

// if (path.dirname(source_dir) === '.' ) {
//   console.log('>>> DIR ACTUAL')
// }


fs.readdir(source_dir, (err, files) => {

      console.log(`\n>>> Archivo del directorio: ${pwd}`);

      files.forEach((file, index) => { 
        
        // get extension file
        const shorter_filename = file.split('.');
        const extension_file = shorter_filename[ shorter_filename.length -1 ];

     

        // to test output
        // console.log(item)
        
        const item = {index, file}
        
        if ( !validExtensions.includes(extension_file) ) {
          console.log('Excluido '+alertAboutFiles('warning', item ))

        } else {

             // console.log(shorter_filename)
        // console.log('imagen: ',file)


          console.log(alertAboutFiles('ok', item ))


          // assign different name to file, even to same file uploaded
        const temp_namefile = uuidv4() + '.' + extension_file;

        console.log(index+'. '+file+' > '+` ${temp_namefile}`)

        // const img = await comprimirImagen(file, argv.optimizar )

        } 
      }); // foreach
      
});





