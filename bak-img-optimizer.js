const sharp = require('sharp')
const path = require('path') // to manage url  (o!o)
const { v4: uuidv4 } = require('uuid')
const fs = require('fs')

const { filesValidator } = require('./files-validator')

const getMD5file = require('./md5-files')
const { directoryManager } = require('./dir-manager')

const getMetadataOneFile = async (file) => {
  // const { name } = file
  // console.log('Nombre', name)

  try {
    const valid_extension = filesValidator(file, true)
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

const optimizeImage = async(file, source = '', destination = '') => {
  // let images_newdir = destination

  let image_toupdate;

  // directory management
  const { origen, target } = directoryManager(file, source, destination)

  // absolute  target path
  const abs_target = path.join(target, file) // (o!o)

  // absolute source path
  const abs_source = path.join(origen, file) // (o!o)

  //  file extension check
  const valid_extension = filesValidator(file, source, destination)
  if (!valid_extension) {
    return {
      msg: 'No aplica para procesar',
      file: ` ${ file}`
    }
  }

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

    
  // --- testing 
/*   console.log('1) IMG SOURCE: ', origen)
  console.log('2) IMG DST: ', target)
  console.log('3) ABSOLUTE SRC: ', abs_source)
  console.log('4) ABSOLUTE DST: ', abs_target)
  console.log('5) NEW IMG FILENAME: ', md5_imgname)
  console.log('6) LOCATION NEW IMG: ', abspath_newimg)
 */
  

  if (!fs.existsSync(target)) {
    // check exiting new location
    fs.mkdirSync(target, {recursive: true});
    console.log('No exite directorio destino. Creado!!')
  }

  if (fs.existsSync(abspath_newimg)) {
    // verify exist image file on the path
    fs.unlinkSync(abspath_newimg)
  }



  
  try {
    const optimizedImage = await sharp(abs_source)
      .resize({
        width: 1000,
        // height: 97
      })
      .toFormat('jpg', { mozjpeg: true })
      .toFile(abspath_newimg);

      return {
        'file': file,
        'abs_source': abs_source,
        'abs_target': abs_target,
        'md5_imgname': md5_imgname,
        'abspath_newimg': abspath_newimg,
        'optimizeImage': optimizeImage
      }
        


  } catch (error) {
    console.log(error)
  }



}// optimizeImage

module.exports = {
  getMetadataOneFile,
  optimizeImage,
}
