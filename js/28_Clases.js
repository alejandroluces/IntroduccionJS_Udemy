//Clases

//Clase Persona

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    formatearProducto() {
        return `El producto ${this.nombre} tiene un precio de: ${this.precio}`;
    }

   
    obtenerPrecio() {
        console.log(this.precio);
    }
    
}


const producto2 = new Producto('Monitor Curvo de 49"', 800);
const producto3 = new Producto('Laptop', 300);


console.log(producto2);
console.log(producto3);

// Herencia
class Libro extends Producto  {
    constructor(autor, titulo, isbn) {
        super(autor, titulo);
        this.isbn = isbn;
        
    }

    formatearProducto() {
        return `${super.formatearProducto()} y su ISBN es ${this.isbn}`;
    }

    obtenerPrecio() {
        super.obtenerPrecio();
        console.log('Y si hay en existencia');
    }

}

const libro = new Libro('JavaScript la Revolución', 120, '234234234234');

console.log(libro.formatearProducto());
console.log(libro.obtenerPrecio());
console.log(producto2.formatearProducto());

