
/* 
const sumar =(n1,n2) =>{

    return n1+n2

}

const result=sumar(5,5)

console.log(result  );

*/

let total=0;

const addCar =(price) =>{
 return total += price ;
}

function calcTax(total){
    return 1.19*total;
}
total=addCar(350)
total=addCar(150)
total=addCar(400);

console.log(total);

const totalPay=calcTax(total);
console.log(`El total a pagar con IVA es $${totalPay}`);

