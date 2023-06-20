// "use strict"; //correr JS en modo estricto
// objetos

let producto = {
    nombreProducto: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
    cantidad: 9,

}

// Object.freeze(producto)
Object.seal(producto)
// el object freze congela cualquier entrada. No permite ingresar mas datos
// El object seal es caso lo mismo que el freeze las diferecias que este deja modificar
producto.imagen="imagen.jpg"
producto.precio= "NUEVO PRECIO 600"
delete producto.precio;


console.log(Object.isFrozen(producto))
console.log(producto);