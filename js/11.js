const producto = {
    nombreProducto: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
    cantidad: 9,

}

// Forma anterior de hacerlo

// const precioProducto = producto.precio;
// const nombreProducto = producto.nombreProducto;


// console.log(precioProducto);
// console.log(nombreProducto);

// Nueva Forma
// Destructuring

const {precio, nombreProducto,disponible,cantidad}=producto;

console.log(precio);
console.log(nombreProducto);
console.log(disponible);
console.log(cantidad);