// Array Methods

const meses=['enero', 'febrero', 'marzo', 'abril', 'mayo'];

const carrito= [
    {nombre: 'Monitor 20 Pulgadas', precio: 120},
    {nombre: 'Monitor 32 Pulgadas', precio: 150},
    {nombre: 'Audifonos Sony RP200', precio: 190},
    {nombre: 'Tanlet 15 pulgadas', precio: 210},
    {nombre: 'celular', precio: 250},
    {nombre: 'TV 55 Pulgadas', precio: 300},
    {nombre: 'Lactop I5', precio: 450},
    {nombre: 'Lactop Intel ', precio: 600},
    
]

// forEach para consultar si marzo existe

// meses.forEach(function(mes){
//     if(mes=='marzo'){
//     console.log('marzo si existe aqui');
//     }
// });


// console.log(meses);

// Includes ***para consultar si marzo existe******
let resultado= meses.includes('enero');

// some ideal pa arreglo de objetos

resultado= carrito.some(function(producto){
    return producto.nombre==='L actop I5'
})

// Reduce.. Para sumar todos los montos

resultado= carrito.reduce(function(total,producto){
    return total + producto.precio
},0);


// Filter se usa para hacer diversos filtro segun
// la necesidad 

resultado = carrito.filter(function(producto){
    return producto.precio>400
})

resultado = carrito.filter(function(producto){
    // Con este filter busca los que son diferente 
        // a celular
    return producto.nombre !=='celular'
})


console.log(resultado);
