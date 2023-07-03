const puntaje=1000

if(puntaje!==1000){
    console.log(`no es igual`);
    
}else{
    console.log("igual");
    
}




const rol = 'EDITOR';


if (rol === 'ADMINISTRADOR') {
console.log('Acceso a todo el sistema')
}else if(rol=== 'EDITOR') {
console.log('Eres editor, puedes entrar pero no puedes hacer mucho')
}	else {
console.log('No tienes acceso')
}