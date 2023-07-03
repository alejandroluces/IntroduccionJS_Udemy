const metodoPAgo="cheque"

switch(metodoPAgo){
    case "efectivo":
        console.log("Pago con efectivo realizado");
        break;
    case "tarjeta":
        console.log("Pago con tarjeta realizado");
        break;
    case "cheque":
        console.log("Pago con cheque, validacion pendiente");
        break;

}