// const yargs = require('yargs');
// const argv = require('../config/yargs');
const colors = require('colors')
const fs = require('fs')
const path = require('path')
const { v4: uuidv4 } = require('uuid')
const alert = require('cli-alerts')
const { argv } = require('yargs')

const {
  formatCLI,
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
  terminal,
} = require('../helpers/colors-formatting-cli')

const getMD5file = require('../helpers/md5-files')

const { filesValidator } = require('../helpers/files-validator')

const { optimizeImage } = require('../helpers/img-optimizer')
const { getMetadataOfFiles } = require('../helpers/get-metadata')
const { directoryManager } = require('../helpers/dir-manager')

/* const validExtensions = ['png','jpg','jpeg'];

const destination = './nuevas-imagenes-para-web' */

function showDir(dir) {
  return colors.brightCyan(dir)
}

const menuItem = (item, content = '') => {
  let c

  c = ' ' + content.toString().padStart(5, ' ')
  return item.padEnd(57, '.') + c
}

let item = 0

/*  options:

    info      - Inspeccionar metadata
    optimize  - Optimizar imágenss

*/

const imageProcessing = (
          source,
          quality = 25,
          destination,
          show,
          info,
          optimize  ) => {
  // Requirements
  if (!info && !optimize) {
    return console.log(`Debe indicar
            -s, --origen     <directorio>   
            -i, --info       Mostrar información de la foto 
            -o, --optimizar  Optimizar archivos de imágenes `)
  }

  // return console.log(`I: ${info} -- O: ${optimize} `)

  if (!source) {
    return console.log(formatCLI('warning', 'Debe indicar el directorio'))
  }

  console.log(notice('--  Parámetros --'))
  console.log(menuItem('Directorio de imágenes: ', source))
  console.log(menuItem('% de optimización: ', quality))
  console.log(
    menuItem('Directorio destinado para imágenes procesadas: ', destination),
  )
  console.log(
    menuItem('Mostrar el procesado en consola: ', `${show ? 'Sí' : 'No'}`),
  )

    try {

      const pwd =
        path.dirname(source) === '.' ? showDir('Actual') : showDir(source)

      fs.readdir(source, (err, files) => {
        files.forEach((file, index) => {
          /*  
            // validate type
            const fv =  filesValidator(file, undefined, false)
            // console.log(fv)
            if (fv) { 
              item++
              console.log(`${item}. ${file}`)
          } */

          
          let total = 0

          if (optimize) {
            // resize images
            const objImageInfo = optimizeImage(file, source, destination)
            .then((img) => {
              total++
              console.log('image_info:', img)
            })
            .catch((err) => console.log(err))

          } // optimize

          if (info) {
            // List metadata
            const objImageInfo = getMetadataOfFiles(file, source, destination)
            .then((img) => {
              console.log('image_info:', img)
            })
            .catch((err) => console.log(err))

          } // info: see metadata


        }) // foreach
      })
    } catch (err) {
      throw err
    }
  
} // optimizarImage

module.exports = { imageProcessing }
