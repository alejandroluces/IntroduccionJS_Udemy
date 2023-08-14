//Programacion orientada a objetos(POO)

/* Objec Literal */
const producto={
    nombre:"Tablet",
    precio:500
}

//Object Constructor
function Cliente(nombre,apellido){
    this.nombre=nombre
    this.apellido=apellido
}

Cliente.prototype.formatearCliente=function(){
    return `El producto ${this.nombre} tiene un precio de: ${this.apellido}`
}

function Producto(nombre,precio){
    this.nombre=nombre
    this.precio=precio
    
}

const producto2=new Producto("Monitor Curvo de 49",800,true)
const producto3=new Producto("Notebook",300,false)
const producto4=new Producto("Teclado",100,false)
const producto5=new Producto("Tablet",300,true)

const formatearProducto=(producto)=>{
    return `El producto ${producto.nombre} tiene un precio de: ${producto.precio}`
}

console.log(formatearProducto(producto2));
const cliente=new Cliente("Juan","De la torre")

console.log(cliente);



console.log(producto2);
console.log(producto3);

// Crear funciones que solo se utilizan en un objeto en especifico
Producto.prototype.formatearProducto=function(producto){
    return `El producto ${this.nombre} tiene un precio de: ${this.precio}`
}

console.log(producto2)

console.log(producto2.formatearProducto());
console.log(producto3.formatearProducto());

