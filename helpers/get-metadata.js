const sharp = require('sharp')
const path = require('path') // to manage url  (o!o)
const { v4: uuidv4 } = require('uuid')
const fs = require('fs')

const { filesValidator } = require('./files-validator')

const getMD5file = require('./md5-files')
const { directoryManager } = require('./dir-manager')

const getMetadataOfFiles = async(file, source = '', destination = '') => {

  let image_toupdate;

  // directory management
  const { origen } = directoryManager(file, source)

    //  file extension check
    const valid_extension = filesValidator(file, source)
    if (!valid_extension) {
      return {
        msg: 'No aplica para procesar',
        file: ` ${ file}`
      }
    }

  // absolute source path
  const abs_source = path.join(origen, file) // (o!o)

  
  try {


      const metadata = await sharp(abs_source).metadata()

      return {
        'file': {
          'name': file,
          'filepath': abs_source,
        },
        'Metadata': {
        ancho: metadata.width,
        alto: metadata.height,
        formato: metadata.format,
        densidad: metadata.density,
        'progresive': metadata.isProgressive,
        size: metadata.size,
        'exif': metadata.exif,
        'space': metadata.space,
        'orientation': metadata.orientation
        },
      }


  } catch (error) {
    console.log(error)
  }



}// optimizeImage

module.exports = {
  getMetadataOfFiles
}
