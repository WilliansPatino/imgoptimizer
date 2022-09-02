const md5File = require('md5-file')


const getMD5file = (file, source_dir='') => {


    /* Async usa|ge */
    const md5 =  md5File.sync(file)
    /* .
    then((hash) => md5 )
    .catch (err => 
    console.log(`Un error ocurrió durante el procesamiento: ${err}`)
      ) */

      try {
        return md5 
  
      } catch (error) {
        console.log(error)
        throw new Error
  
      }


  }

module.exports = getMD5file;



/* Sync usage */
/* const hash = md5File.sync(file.name)
console.log(`The MD5 sum of LICENSE.md is: ${hash}`) */

/***  for testing 
 * 
 * 
 * file = { name: 'LA.jpg',
        source: '~/444-images/',
        destination: 'imagenes-optimizadas',
        optimizacion: 30
} 
 * 
 * 
getMD5file(file.name)
.then((md5) => {
    console.log(md5)
})
.catch (err => console.log(err)) * 
 * 
 * 
 * 
 */
