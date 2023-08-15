// function obtenerEmpleados () {
    
//     const archivo = '/empleados.json';
//     fetch(archivo)
//         .then( respuesta => respuesta.json())
//         .then( datos => {

//         const {empleados} = datos;
//         console.log(empleados)
//        })

      
// }



async function obtenerEmpleadosAsync () {
    const archivo = '/empleados.json';

    const respuesta = await fetch(archivo);
    const datos = await respuesta.json();
    console.log(datos)
}
obtenerEmpleadosAsync();
