// Asyn / await




function descargarNuevosClientes() {
    return new Promise(resolve => {
        console.log('Descargando clientes... espere...');

        setTimeout(() => {
            resolve('Los clientes fueron descargados');
        }, 5000);
    });
}

// async function app() {
//     try {
//         const respuesta = await descargarNuevosClientes();
//         console.log(respuesta);
//     } catch (error) {
//         console.log(error);
//     }
// }

// app();

// console.log("Este codigo no se bloquea")


function descargarUltimosPedidos() {
    return new Promise(resolve => {
        console.log('Descargando pedidos... espere...');

        setTimeout(() => {
            resolve('Los pedidos fueron descargados');
        }, 3000);
    });
}

async function app() {
    try {
        const respuesta = await Promise.all([descargarNuevosClientes(), descargarUltimosPedidos()]);
        console.log(respuesta[0]);
        console.log(respuesta[1]);
    } catch (error) {
        console.log(error);
    }
}

app();