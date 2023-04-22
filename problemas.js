const producto = require('./producto.js');
const DAO = require('./DAO.js');
const fs = require('fs');

const texto = fs.readFileSync("./productos.txt", "utf-8");
const filas = texto.split("\n").filter(fila => fila != "");
const Productos = filas.map((fila) => fila.split(", "));

let añadirProductos = () => {
        let productos = [];
        for(let p of Productos) {
                productos.push(DAO(p[0], p[1], p[2], p[3], p[4], p[5], p[6]));
        }
        return productos;
}

let productos = añadirProductos();

function p1() {
	let contador = 0;
	for(let p of productos){
		if(p["precio"] > 20)
			contador += 1;
	}
	return contador;
}

function p2() {
	let contador = 0;
        for(let p of productos){
                if(p["precio"] < 15)
                        contador += 1;
        }
        return contador;
}

const productosClasificacion = () => {
	let productosClasificacion = {};
        for(let p of productos){
                if(productosClasificacion.hasOwnProperty(p["clasificacion"])) {
                        productosClasificacion[p["clasificacion"]].push(p)
                } else {
                        productosClasificacion[p["clasificacion"]] = [p]
                }
	}
	return productosClasificacion;
}

let productoClasificacion = productosClasificacion();

function p3() {
	for(let i in productoClasificacion) {
		console.log(i + ": ");
		for(let j of productoClasificacion[i]) {
			if(j["precio"] > 15.5) {
				console.log(j);
			}
		}
	}
}

function p4() {
	for(let p of productos) {
		if(p["precio"] > 20.3 && p["precio"] < 45) {
			console.log(p);
		}
	}
}

function p5() {
	productoClasificacion;
	let contador = 0;
	for(let i in productoClasificacion) {
		console.log(i + ": ");
		console.log(productoClasificacion[i].length);
	}
}

function main() {
	console.log("Número de productos con existencia mayor a 20.");
	console.log(p1() + "\n");
	console.log("Número de productos con existencia menor a 15.");
	console.log(p2() + "\n");
	console.log("Lista de productos con la misma clasificación y precio mayor a 15.50")
	console.log(p3() + "\n");
	console.log("Lista de productos con precio mayor a 20.30 y menor a 45.00");
	console.log(p4() + "\n");
	console.log("Número de productos agrupados por su clasificación");
	p5();
}

main();
