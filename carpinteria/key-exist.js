function keyExistsInObject(_object = '', _key='') {

 
  try {

    if ( _object.length === 0 ) {
      return console.log(`El argumento de tipo {objeto} no fue recibido!`)
    }

    if ( _key.length === 0 ) {
      return console.log('No se recibió la clave {key:valor}')
    }

    console.log('tipo de dato recibido: '+typeof _object)

    if ( !isTypeObject(_object ) ) {
      return console.log('El argumento recibido como objeto no corresponde a su tipo')
    } else {
      console.log('Se recibió ',_object)
    }

    if(_key in _object)
      return true
    
    else{
      return console.log(`La clave ${_key} no existe en el objeto o se recibió erradamente`)
    }

  } catch (err) {
    console.log(err)
  }
} // keyExistsInObject

function isArguments(value) {
  return !!value || typeof value == 'object' 
  // && Object.prototype.hasOwnProperty.call(value, 'callee') 
  // && !Object.prototype.propertyIsEnumerable.call(value, 'callee');
}
//usage
let apparels = {type:"pants", colour:"red", material:"cotton"};
apparels = 'file'




// keyExists(apparels, 'quantity'); */

function isTypeObject(item) {
  
  if (typeof(item) === 'object') {
    return true 

  } else { 
    return typeof(item) 
  }
  
}

obj = { name: 'LA.doc',
        source: __dirname,
        destination: 'imagenes-optimizadas',
        optimizacion: 30
} 




/* 
if ( o ) {
   console.log('Si es objeto',o)
   k_exist = keyExistsInObject(obj,'ana')
}  */
// console.log(isArguments(obj))

k_exist = keyExistsInObject(obj,'name')
if (k_exist) { console.log('Encontrada/Existe')}

