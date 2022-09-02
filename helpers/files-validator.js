//  Genera el nuevo nombre de la imagen
const allowedExtensions =  ['png','jpg','jpeg','gif','svg','webp']


const filesValidator = (file = '', validExtensions = allowedExtensions) => {

  
  try {
    
    if (file.length === 0) {
      throw ('No se recibió el nombre del archivo')
    }

  console.log('Archivo >>> ', file)
  
  const shorter_filename = file.split('.');
  const extension_file = shorter_filename[ shorter_filename.length -1 ];
  
  const validExt =   (validExtensions.includes(extension_file));
  
  if ( !validExt ) {
    throw  (`Extensión <.${extension_file}> no es procesable - Archivos permitidos: ${validExtensions} `);
  }
  // console.log(shorter_filename);
  
  // console.log('validExtensions >>> ',validExtensions);
  console.log(`Válido: ${allowedExtensions}: `, validExtensions.includes(extension_file));

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