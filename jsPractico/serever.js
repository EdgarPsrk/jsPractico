
const express= require('express');
const app = express();
const path = require('path');

app.listen('/', ()=>
{
    console.log('Servidor escuchando en el puerto 3000');
})

app.get('/', (request, response)=>
{
    respons.sendFile(path.resolve(__dirname, 'indexhtml'));
})



// var http = require('http');
// var path = require('path');
// http.createServer((request, respuesta) => 
// {
//     respuesta.writeHead(200, {'Content-Type': 'text/plain'});
//     respuesta.write('Hola mundo');
//     respuesta.end()
// }).listen(3000, 'localhost')

// http.get('/', (request, respons) => 
// {
//     respons.sendFile(path.resolve(__dirname, 'indexhtml'))

// })
// console.log('El servidor esta en http://localhost:3000');