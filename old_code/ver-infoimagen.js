const sharp = require('sharp');
const path = require('path'); // to manage url  (o!o)
const { filesValidator, extValidator } = require('./helpers/files-validator');
const { getMetadata, resizeImage } = require('./helpers/img-optimizer');


console.clear()


file = './imagenes-optimizadas/f3d74452ac0ee89b46b92f014a1b0ef6.jpg'


getMetadata(file)
// imageMetadata(file.name)
.then((optimizedImg) => {
  if ( optimizedImg ) {
  console.log(optimizedImg) 
  } else {
    console.log('\nError: reintente con un archivo válido')
  }
})
.catch (err => console.log(err)) 

