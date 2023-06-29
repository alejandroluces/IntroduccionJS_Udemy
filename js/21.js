

// Arrow function

const sumar2 =(n1,n2)=>console.log(n1+n2);
sumar2(5,12);

const aprendiendo =(tecnologia) =>console.log(`Aprendiendo ${tecnologia}`);
    
aprendiendo("JavaScript");





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

meses.forEach((mes)=>{
    if(mes=='marzo'){
    console.log('marzo si existe aqui');
    }
});



// some ideal pa arreglo de objetos

resultado= carrito.some(producto=> producto.nombre==='L actop I5');
// Reduce.. Para sumar todos los montos

resultado= carrito.reduce((total,producto)=> total + producto.precio,0);

// Filter se usa para hacer diversos filtro segun
// la necesidad 

resultado = carrito.filter(producto => producto.precio>400)

resultado = carrito.filter(producto=>producto.nombre !=='celular')

console.log(resultado);


