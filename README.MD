# Optimizador de imágenes - Visor de metadata

Desarrollado como una solución para optimizar las imágenes antes de subirlas
a los servidores.

*  He servido para aprender sobre las promesas y async/await de Node JS.


##  Optimizar imágenes > Inicio

```
❯ node optimize-image.js 
Options:
      --help        Show help                                          [boolean]
      --version     Show version number                                [boolean]
  -s, --origen      Directorio origen de las imagenes                   [string]
  -p, --porcentaje  Porcentaje de optimización            [number] [default: 25]
  -d, --destino     Directorio destino                                  [string]
  -l, --listar      Mostrar el resultado en consola   [boolean] [default: false]

El directorio de imagenes es requerido

 ```

### Optimizar imágenes > Ejecución

``` 
--  Parámetros --
Directorio de imágenes: ................................. /home/wp/444-images/no-image/
% de optimización: ......................................    25
Directorio destinado para imágenes procesadas: ..........      
Mostrar el procesado en consola: ........................    No
INFO: No existe directorio destino. Creado!!
image_info: {
  file: 'no-image.jpg',
  abs_source: '/home/wp/444-images/no-image/no-image.jpg',
  abs_target: '/home/wp/444-images/no-image/imagenes-optimizadas/no-image.jpg',
  md5_imgname: '9d6effa3cf2851c6de57db9aaa28ea55.jpg',
  abspath_newimg: '/home/wp/444-images/no-image/imagenes-optimizadas/9d6effa3cf2851c6de57db9aaa28ea55.jpg',
  optimizeImage: [AsyncFunction: optimizeImage],
  metadata: { isProgresive: true, ancho: 275, dpi: 72 }
}

```



## Listar metadata de las imágenes > Inicio

```
❯ node info-image.js 
Options:
      --help       Show help                                           [boolean]
      --version    Show version number                                 [boolean]
  -s, --origen     Directorio origen de las imagenes                    [string]
  -i, --info       Mostrar información de la foto     [boolean] [default: false]
  -o, --optimizar  Optimizar archivos de imágenes     [boolean] [default: false]

El directorio de imagenes es requerido

```

## Listar metadata > Ejecución

``` --  Parámetros --
Directorio de imágenes: ................................. /home/wp/444-images/no-image/imagenes-optimizadas/
% de optimización: ......................................    25
Directorio destinado para imágenes procesadas: ..........      
Mostrar el procesado en consola: ........................    Sí
image_info: {
  file: {
    name: '9d6effa3cf2851c6de57db9aaa28ea55.jpg',
    filepath: '/home/wp/444-images/no-image/imagenes-optimizadas/9d6effa3cf2851c6de57db9aaa28ea55.jpg'
  },
  Metadata: {
    ancho: 1000,
    alto: 1000,
    formato: 'jpeg',
    densidad: 72,
    progresive: true,
    size: undefined,
    exif: undefined,
    space: 'srgb',
    orientation: undefined
  }
}


```




