const checksum = require('checksum')

file = { name: 'LA.jpg',
        source: '~/444-images/',
        destination: 'imagenes-optimizadas',
        optimizacion: 30
} 

cs = checksum(file.name)
console.log(cs)


checksum.file(file.name, function (err, sum) {
  if (cs === '4e06cd0d35629ec561c985035945f3b1ed90fd16') {
    console.log('yay yay')
  }
})