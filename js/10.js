// objetos
// esto es lo mismo que lo de abajjo


// const nombreProducto = "Monitor 20 pulgadas";
// const precio = 300;
// const disponible = true;


const producto = {
    nombreProducto: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,

}



// si quiero saber el precio uso la siguiente cod

// console.log(producto.precio);

// mas ejemplo si quiero ver nombre o disponible

// console.log(producto.nombreProducto);
// console.log(producto.disponible);

// esta sintaxis tambien se usa
// console.log(producto["precio"]);

// esto es para agregar nuevas propiedades. que No existen

producto.imagen="imagen.jpg";


// esto es para eliminar  propiedades
delete producto.disponible;



console.log(producto);




