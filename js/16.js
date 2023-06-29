// Declarade una funcion

const sumar  = () =>{
    console.log(10+10);
    
}
sumar();

// Ecpresion de la funcion

const sumar2 = function(){
    console.log(3+3);

}
sumar2();

//IIFE__ Este tipo de funcion evita que ciertas variable que 
// compartes un mismo nombre en otro archivo no se mezclen o generen conflicto

(function (){
    console.log("esto es una funcion");
    
})();