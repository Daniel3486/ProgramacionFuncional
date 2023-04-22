const producto = require('./producto.js');

const añadirProducto = (clave, descripcion, precio, clasificacion, cantidad, exisMin, exisMax) => new producto(clave, descripcion, precio, clasificacion, cantidad, exisMin, exisMax);

module.exports = añadirProducto;
