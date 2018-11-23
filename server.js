

require('dotenv').config();
const Hapi = require('hapi');
const rutas=  require('./routes')
const db = require('./Config/dtabase').db;

//Crear un servidor



const server = Hapi.server({ 
    host: 'localhost',
    port: '8000'
});

//Agregar la ruta
server.route(rutas);


async function start(){
    try{
        await server.start();

   }catch(err){
    console.log(err);
    process.exit(1);
   }
   console.log('Server running at:', server.info.uri);
}

start();