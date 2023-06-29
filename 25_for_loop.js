// for Loop____________________-

/* 
for(let i=1;i<=100;i++){
    if(i%2===0){
        console.log(`El numero ${i} es par`);

    } else {
        console.log(`El numero ${i} es Impar`);

    }

}

*/

const carrito= [
    {nombre: 'Monitor 20 Pulgadas', precio: 120},
    {nombre: 'Monitor 32 Pulgadas', precio: 150},
    {nombre: 'Audifonos Sony RP200', precio: 190},
    {nombre: 'Tanlet 15 pulgadas', precio: 210},
    {nombre: 'celular', precio: 250},
    {nombre: 'TV 55 Pulgadas', precio: 300},
    {nombre: 'Lactop I5', precio: 450},
    {nombre: 'Lactop Intel ', precio: 600},
    
];

for(let i=0;i <carrito.length;i++){
    console.log(carrito[i]);
    

}
