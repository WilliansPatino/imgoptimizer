const sharp = require('sharp')
const path = require('path') // to manage url  (o!o)
const { v4: uuidv4 } = require('uuid')
const fs = require('fs')

const { filesValidator } = require('./files-validator')

const getMD5file = require('./md5-files')

const getMetadata = async (file) => {
  // const { name } = file
  // console.log('Nombre', name)

  try {
    const valid_extension = filesValidator(file)
    if (!valid_extension) {
      return false
    }

    // console.log('--- Metadata --')
    console.log('Archivo: ', file)
    const metadata = await sharp(file).metadata()

    return {
      msg: ' Metadata actual ',
      ancho: metadata.width,
      alto: metadata.height,
      formato: metadata.format,
      densidad: metadata.density,
      'imagen-progresiva': metadata.isProgressive,
    }
  } catch (error) {
    console.log(`An error occurred during processing: ${error}`)
  }
}

const optimizeImage = async (file, source = '', destination = '') => {
  let images_newdir = destination

  let image_toupdate

  // images source directory
  if (source.length === 0 || typeof source === undefined) {
    console.log('El directorio de imágenes no ha sido fijado')
    source = process.cwd() // por defecto el directorio actual
    console.log(
      'Por omisión, las imágenes seran leidas de este directorio:',
      source,
    )
  } else {
    console.log('Las imágenes seran leidas en este directorio:', source)
  }

  // optimized images destination
  if (destination.length === 0 || typeof destination === undefined) {
    console.log('El directorio destino no ha sido fijado')

    images_newdir = path.join(source, 'imagenes-optimizadas')
    console.log(
      'Por omisión, las imágenes procesadas seran almacenadas en: ',
      images_newdir,
    )
  } else {
    images_newdir = path.join(source, destination)

    console.log('Las imágenes procesadas seran almacenadas en: ', images_newdir)
  }

  const valid_extension = filesValidator(file)
  if (!valid_extension) {
    return false
  }

  // file
  const shorter_filename = file.split('.')
  const extension_file = shorter_filename[shorter_filename.length - 1]

  // uuid hash of the file
  // const temp_namefile = uuidv4() + '.' + extension_file;

  // md5 hash of the file
  const md5hash_file = getMD5file(file)

  const temp_namefile = md5hash_file + '.' + extension_file

  // directory
  if (!fs.existsSync(images_newdir)) {
    fs.mkdirSync(images_newdir)
  }

  // location new image
  const upload_path = path.join(images_newdir, temp_namefile) // (o!o)

  // clean old images
  /*  if ( temp_namefile ) {
    // remove imagen at server
    const image_path = path.join(__dirname, '../uploads/', collection, modelToUpdate.img );  // (o!o)

    */

  if (fs.existsSync(upload_path)) {
    // verify exist image file on the path
    fs.unlinkSync(upload_path)
  }
  // }

  // test the ouput
  /*    return { images_newdir,
            temp_namefile,
            upload_path
             } 
     
 */

  try {
    const optimizedImage = await sharp(file)
      .resize({
        width: 1000,
        // height: 97
      })
      .toFormat('jpg', { mozjpeg: true })
      .toFile(upload_path);

    return { optimizedImage, upload_path, images_newdir }

  } catch (error) {
    console.log(error)
  }
}



module.exports = {
  getMetadata,
  optimizeImage
}
