class producto {
	constructor(clave, descripcion, precio, clasificacion, cantidad, exisMin, exisMax){
		this.clave = clave;
		this.descripcion = descripcion;
		this.precio = precio;
		this.clasificacion = clasificacion;
		this.cantidad = cantidad;
		this.exisMin = exisMin;
		this.exisMax = exisMax;
	}
}

module.exports = producto;
