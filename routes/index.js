

const Handlers = require('../Handlers');

const lista = [1,2,3];

module.exports = [
    {
        method: 'POST',
        path :'/carro',
        handler:Handlers.carroHandler.agregarCarrosAsyncAwait
    },
    {
        method: 'GET',
        path :'/carro',
        handler:Handlers.carroHandler.listarCarrosAsyncAwait
    },
    {
        method: 'POST',
        path :'/carro/color',
        handler:Handlers.carroHandler.buscarUno
    },
    {
        method: 'GET',
        path :'/lista/{id}',
        handler:function(request, h){
            return {data: lista[request.params.id]};
                 }
    },
    {
    method: 'GET',
    path :'/lista',
    handler:function(request, h){
        return {data: lista};
             }
    },
    {
        method: 'POST',
        path :'/lista',
        handler:function(request, h){
        console.log(request.payload);
            lista.push(request.payload.data);
            return {data: lista};
            }
    },
    {
        method: 'PUT',
        path :'/lista/{index}',
        handler:function(request, h){
            lista[request.params.index]  = request.payload.data;
            return {data: lista};
                 }
     },{
        method: 'DELETE',
        path :'/lista/{index}',
        handler:function(request, h){
            lista.splice[request.params.index];
            return {data: lista};
                 }
     }
]