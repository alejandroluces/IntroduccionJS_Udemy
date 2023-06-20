// Arreglo o Arrays // Ejemplos de carritos de compras Video 18 Arrais
//Los arreglos se identifican ya que por lo gneral los contiene los corchetes [] y los objetos por llaves{}

const numeros=[10,20,30,40,50];





// const arreglo = ["Hola", 10, true, "si" , null, {Nombre: "Alejandro", Trabajo: "Programador"}, [1,2,3]];

// console.log(arreglo);

// Acceder a los valores de un arreglo
// En este caso aacedimos a la posicion 4 cuyo vaor es 50

// console.log(numeros[0]);
// console.log(numeros[1]);
// console.log(numeros[2]);
// console.log(numeros[3]);
// console.log(numeros[4]);

// Conocer la extension de un arreglo

// console.log(meses.length);
// meses.forEach(function(mes) { console.log(mes);

// })

// aqui agregamos una posicion al arreglo
// numeros[5] = 60;
// se usa poco
numeros.push(60,70,80) // estas posicion se agrega al final del arreglo

numeros.unshift(-10,-20,-30) // estas posicion se agrega al inicio del arreglo

console.table(numeros);

const meses=['enero', 'febrero', 'marzo', 'abril', 'mayo'];

// meses.pop() // este elimina el ultimo elemento del arreglo(mayo)
// meses.shift() //Elimina el primer elemento del arreglo(enero)

// meses.splice(2, 1);
// console.table(meses);

// Rest Operator o Spread Operator
const nuevoArreglo =["junio", ...meses];
console.log(nuevoArreglo);




