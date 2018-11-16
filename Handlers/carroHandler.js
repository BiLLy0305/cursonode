
const Carro = require('../Models/Carro');

module.exports.agregarCarros = (req,h)  => {
    
    const carro = new Carro(req.payload.data);
    carro.save((err,data)=>{
          if(err){
            console.log('Error');
            return h.response(err);
        }
          console.log('Agregado');
          return h.respo('Agregado');
    });
    return h.response(req.payload.data);
}


