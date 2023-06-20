// Unir dos objetos con SpreadOperator
const producto = {
    nombreProducto: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
    cantidad: 9,

}

const medidas = {
    peso: "300kg",
    medida: "1mts",
    

}
// Conesto unimos dos objetos Producto+medidas y al consultar el nuevo producto se refleja esa union 
const nuevoProducto={...producto,...medidas};


console.log(producto);
console.log(nuevoProducto);
