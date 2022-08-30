const comprimirImagen = (imagenComoArchivo, porcentajeCalidad) => {
  /*
    https://parzibyte.me/blog
  */
  return new Promise((resolve, reject) => {
    // const $canvas = document.createElement("canvas");
    const imagen = new Image();
    imagen.onload = () => {
      $canvas.width = imagen.width;
      $canvas.height = imagen.height;
      $canvas.getContext("2d").drawImage(imagen, 0, 0);
      $canvas.toBlob(
        (blob) => {
          if (blob === null) {
            return reject(blob);
          } else {
            resolve(blob);
          }
        },
        "image/jpeg",
        porcentajeCalidad / 100
      );
    };
    imagen.src = URL.createObjectURL(imagenComoArchivo);
  });
};

module.exports = {
  comprimirImagen
}
