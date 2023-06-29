//Metodos de propiedad

const reproductor={
    reproducir: function(id){
        console.log(`Reproduciendo Cancion con el ID:${id}`);
    },
    pausar: function(){
        console.log(`Pausando...`);
    },
    crearPlaylist:function(nombre){
        console.log(`Creando playlist con el nombre ${nombre}`);
        
    }
}


reproductor.borrarCancion=function(id){
    console.log(`Elminando cancion: ${id}`);
    
}

reproductor.reproducir(80)
reproductor.pausar()
reproductor.crearPlaylist("Rock")
reproductor.borrarCancion(12)