const reservacion={
    nombre:"Alejandro",
    apellido:"Luces",
    total:2500,
    pagado:false,
    informacion: function(){
        console.log(`El cliente ${this.nombre} reservo y su cantidad a pagar es de ${this.total}`);
        
    }
}


const reservacion2={
    nombre:"Pedro",
    apellido:"Gonzalez",
    total:5500,
    pagado:false,
    informacion: function(){
        console.log(`El cliente ${this.nombre} reservo y su cantidad a pagar es de ${this.total}`);
    }

}
reservacion.informacion()
reservacion2.informacion()