const boton= document.querySelector('#boton');
boton.addEventListener('click',function(){
    Notification.requestPermission()
    .then(resultado => console.log(`El resultado es ${resultado}`))
});

// Path: js\32.js

if (Notification.permission == 'granted'){
    new Notification('Esta es una notificacion',{
        icon: '/css/img11.jpg',
        body: 'Codigo con Juan, los mejores tutoriales'
    })
}

