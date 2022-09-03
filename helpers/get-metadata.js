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


  /*  TODO ELIMINAR ESTE MODULO. NO APLICA A ESTE
  //  file extension check
  const valid_extension = filesValidator(file, source, destination)
  if (!valid_extension) {
    return {
      msg: 'No aplica para procesar',
      file: ` ${ file}`
    }
  }
  */

  /*
  //  TODO   ELIMINAR ESTE BLOQUE
  // target filename management
  const shorter_filename = file.split('.')
  const extension_file = shorter_filename[shorter_filename.length - 1]

  // uuid hash of the file
  // const md5_imgname = uuidv4() + '.' + extension_file;

  // md5 hash of the file
  const md5hash_file = getMD5file(abs_source)

  const md5_imgname = md5hash_file + '.' + extension_file
  // const md5_imgname = md5hash_file + '.' + extension_file

  // location new image
  const abspath_newimg = path.join(target, md5_imgname) // (o!o)

*/



    
  // --- testing 
/*   console.log('1) IMG SOURCE: ', origen)
  console.log('2) IMG DST: ', target)
  console.log('3) ABSOLUTE SRC: ', abs_source)
  console.log('4) ABSOLUTE DST: ', abs_target)
  console.log('5) NEW IMG FILENAME: ', md5_imgname)
  console.log('6) LOCATION NEW IMG: ', abspath_newimg)
 */
  
  /*
  // TODO  eliminar este bloue
  if (!fs.existsSync(target)) {
    // check exiting new location
    fs.mkdirSync(target, {recursive: true});
    console.log('No exite directorio destino. Creado!!')
  }

  if (fs.existsSync(abspath_newimg)) {
    // verify exist image file on the path
    fs.unlinkSync(abspath_newimg)
  }

  */

  // TODO  SUSPENDER TEMPOral
  
  try {


      const metadata = await sharp(abs_source).metadata()

      return {
        'Metadata': {
        ancho: metadata.width,
        alto: metadata.height,
        formato: metadata.format,
        densidad: metadata.density,
        'imagen-progresiva': metadata.isProgressive
        },
        'file': {
          'name': file,
          'Destination': abs_source,
          'Absolute path': path.join(process.cwd(), abs_source)
        }
      }


  } catch (error) {
    console.log(error)
  }



}// optimizeImage

module.exports = {
  getMetadataOfFiles
}
