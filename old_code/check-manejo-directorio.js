const { directoryManager } = require("./helpers/dir-manager")

let file = { name: 'hover1.png',
        source: '~/444-images/',
        destination: 'imagenes-optimizadas',
        optimizacion: 30
} 


directoryManager(file.name, 'fotos/')