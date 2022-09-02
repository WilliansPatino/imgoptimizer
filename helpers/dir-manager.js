const path = require('path') // to manage url  (o!o)
const fs = require('fs')


const directoryManager = (file, source = '', destination = '', verbose = false) => {

  let target_dir_new_images = destination;

  let images_source_dir = source;


    // images source directory
    if (source.length === 0 || typeof source === undefined) {
      (verbose) ? 
      console.log('El directorio fuente de imágenes no ha sido fijado') 
      : ' ';

     images_source_dir = process.cwd() // por defecto el directorio actual

      (verbose) 
      ? console.log(`Por defecto, las imágenes se leerán en: ${images_source_dir}`)
      : ''
    } else {
      (verbose)
      ? console.log('Las imágenes se leerán en:', images_source_dir)
      : ''
    }
  
    // optimized images destination
    if (destination.length === 0 || typeof destination === undefined) {
      (verbose) 
      ? console.log('El directorio destino no ha sido fijado') 
      : ''
  
      target_dir_new_images = path.join(images_source_dir, 'imagenes-optimizadas');

      (verbose) 
      ? console.log(`Por omisión, las imágenes seran procesadas en: ${target_dir_new_images}`)
      : ''

    } else {
       target_dir_new_images = path.join(images_source_dir, destination)
      (verbose)
      ? console.log(`Las imágenes procesadas se copiarán en : ${target_dir_new_images}`)
      : ''
    }

    return { 'origen':images_source_dir, 
            'target': target_dir_new_images 
    }

    
          }

module.exports = { 
  directoryManager
}