const fs = require('fs')
const { directoryManager } = require('./dir-manager')


const allowedExtensions =  ['png','jpg','jpeg','gif','svg','webp']


const filesValidator = (file = '', 
        source_dir = '',
        target_dir = '',
        validExtensions = allowedExtensions, 
        verbose = false) => {

  
  
  try {

    if (file.length === 0) {
      throw ('No se recibió el nombre del archivo') 
    }


  
  const shorter_filename = file.split('.');
  const extension_file = shorter_filename[ shorter_filename.length -1 ];
  
  const validExt =   (validExtensions.includes(extension_file));
  
  if ( !validExt) {
    throw (`<.${extension_file}> no es procesable de tipo: (${validExtensions})`)
  }
  // console.log(shorter_filename);

  (verbose)
  ?  console.log(`>> ${file} (${allowedExtensions}): `, validExtensions.includes(extension_file) ? 'tipo válido' : 'N/A' )
  : ''



  return true;

} catch (err) {
  console.log(err)
}
/*   if ( file === '' ) {
    throw Error ('no fue recibido el nombre del archivo')
  }  */ 
  


}
  

module.exports = {
  filesValidator
}