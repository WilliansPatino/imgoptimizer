//  Genera el nuevo nombre de la imagen
const { v4: uuidv4 } = require('uuid');
const path = require('path'); // to manage url  (o!o)


const allowedExtensions =  ['png','jpg','jpeg','gif','svg','webp']

const filesValidatorx = ( file = ' ', 
      validExtensions = allowedExtensions, destfolder = '' ) => {

    return new Promise( (resolve, reject) => { 
      
    // from request
    const { name  } = file;

      console.log('Archivo >>> ', file)
  
      // reemplazar el nombre del archivo
      const shorter_filename = file.name.split('.');
      // const shorter_filename = fupload.name.split('.');
      const extension_file = shorter_filename[ shorter_filename.length -1 ];
  
      console.log(shorter_filename);
      
      // console.log('validExtensions >>> ',validExtensions);
      console.log('Archivo de imagen válido ? >>> ', validExtensions.includes(extension_file));
      
      if ( !validExtensions.includes(extension_file) ) {
          return reject(`Extensión <.${extension_file}>  no válida - Archivos permitidos: ${validExtensions} `);
      } 

       // assign different name to file, even to same file uploaded
      //  const temp_namefile = uuidv4() + '.' + extension_file;

      resolve( true );
    });

 
}

const extValidator = (file, validExtensions = allowedExtensions) => {
  
  const shorter_filename = file.name.split('.');
  const extension_file = shorter_filename[ shorter_filename.length -1 ];

  const validExt =   (validExtensions.includes(extension_file));


  console.log('Archivo', file)
  console.log(shorter_filename);
  
  // console.log('validExtensions >>> ',validExtensions);
  console.log('Archivo de imagen válido ? >>> ', validExtensions.includes(extension_file));
  

  if ( !validExt ) {
      throw new Error (`Extensión <.${extension_file}>  no válida - Archivos permitidos: ${validExtensions} `);
  }

  return true;

}
  

module.exports = {
