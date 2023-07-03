//Programacion orientada a objetos(POO)

/* Objec Literal */
const producto={
    nombre:"Tablet",
    precio:500
}

//Object Constructor

function Producto(nombre,precio, diponibilidad){
    this.nombre=nombre
    this.precio=precio
    this.diponibilidad=diponibilidad

}

const producto2=new Producto("Monitor Curvo de 49",800,true)
const producto3=new Producto("Notebook",300,false)
const producto4=new Producto("Teclado",100,false)
const producto5=new Producto("Tablet",300,true)


console.log(producto2);
console.log(producto3);
console.log(producto4);
console.log(producto5);
