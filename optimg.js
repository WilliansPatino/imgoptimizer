const sharp = require('sharp');
const path = require('path'); // to manage url  (o!o)
const { filesValidator, extValidator } = require('./helpers/files-validator');
const { getMetadata, 
  optimizeImage, 
  } = require('./helpers/img-optimizer');


console.clear()


const input = './austin-distel-wD1LRb9OeEo-unsplash.jpg'
let file;

// const input = './1.jpg'
/* sharp(inputBuffer)
  .resize(1000)
  .jpeg({mozjpeg: true})
  .toFile('output', (err, info) => { console.log(info) }); */





  // const upload_path = path.join(__dirname, '../uploads/', destfolder, temp_namefile );  // (o!o)

/*   async function resizeImage(file) {
    try {
      await sharp(file)
        .resize({
          width: 1000
          // height: 97
        })
        .toFormat("jpg", { mozjpeg: true })
        .toFile(generateImageName(file));
        // .toFile("sammy-resized.png");

  
    } catch (error) {
      console.log(error);
    }
  }
*/
  

/* const loadFiles = async(file) => {

  // console.log('req.files >>>', req.files); // eslint-disable-line

  try {

    // by default image files
    // const full_pathname = await uploadFiles(req.files,['md','txt'], 'documentos');
    const full_pathname = await uploadFiles(file, undefined, 'images');
  
    return full_pathname

  } catch (err) {
      console.log(err) 
  }

} */


let newImage;

/* filesValidator(file, undefined)
.then ( newImage => {
  console.log(newImage) 
  file.name = newImage
})
.catch (err => console.log(err));  
/*   resizeImage(file)
*/ 


/*
.then (imgMetadata => console.log(imgMetadata))
.catch (err => console.log(err))

*/

/* const img = filesValidator(file.name)
if ( img ) {
  console.log('el tipo es IMAGEN',img)
}
 */
/* async function getMetadata(file) {
  try {
    const metadata = await sharp(file).metadata();
    console.log(metadata);
  } catch (error) {
    console.log(`An error occurred during processing: ${error}`);
  }
} */


const imageMetadata = (f) => {
  const metadata = sharp(f).metadata()

  return (metadata)
}

/* getMetadata(file.name)
// imageMetadata(file.name)
.then (optimizedImg => console.log(optimizedImg))
.catch (err => console.log(err))  */


file = { name: 'hover1.png',
        source: '~/444-images/',
        destination: 'imagenes-optimizadas',
        optimizacion: 30
} 


const img = optimizeImage(file.name)
.then((optimizedImg) => {

  if ( optimizedImg ) {
    console.log(optimizedImg)
  }
})
.catch (err => console.log(err)) 