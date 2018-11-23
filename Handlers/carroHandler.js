
const Carro = require('../Models/Carro');


module.exports.agregarCarrosPromise = (req, h) =>{
    /*const carro = new Carro(req.payload.data);*/
    /*Carro.create(req.payload.data)*/
    return Carro.create(req.payload.data)
    .then((res) =>{
        console.log('Then create', res);
        let documento =res;
        documento.color = 'verde';
        return Carro.update({_id:res._id},documento);
    })
    .then(res2 =>{
        console.log('Then update', res2);
        return h.response(res2);
    })
    .catch((err)=>{
        console.log(err);
        return err;
    })
}


module.exports.agregarCarrosCB = (req,h)  => {
    
    const carro = new Carro(req.payload.data);

    return new Promise((resolve, reject)=>{
        carro.save((err, carro)=>{
            if(err){
                return reject(err);
               }



           return resolve(carro);
           console.log(carro);
        });
    });
} 


module.exports.agregarCarrosAsyncAwait = async(req, h)=>{
    try{

        const{preTokenVal} = req.pre;

        if((preTokenVal) === -1){
            return h.response({error: 'No tiene token'});
        }


        const carroAgregado = await Carro.create(req.payload.data);
        console.log('Async/Wait', carroAgregado);
        console.log(await fAsync());
        return h.response(carroAgregado);

    }catch(error){
        return h.response(error);
    }
}

const fAsync = async() =>{
    return 'Hola mundo';
}

module.exports.listarCarrosAsyncAwait = async (req, h)=>{
    try{
        console.log(req.pre);

        const{preTokenVal} = req.pre;

        if((preTokenVal) === -1){
            return h.response({error: 'No tiene token'});
        }

        if(!req.query.id){
            return await Carro.find();
        }
        return  await Carro.findById({_id: req.query.id});
    }catch(error){
        return h.response(error);
    }
}

module.exports.buscarUno = async (req , h) =>{
    try{
       return await Carro.findOne(req.payload.data);
    }catch(error){
        return h.response(error);
    }
}

module.exports.buscarCarrosAsyncAwait = async (req, h)=>{
    try{
       
        console.log('Query', req.query);

        const carroEncontrado = await Carro.findById({id: req.params.id});

        return h.response(carroEncontrado);

        console.log(lcarros);

        return lcarros;

        
    }catch(error){
        return h.response(error);
    }
}



module.exports.actualizarCarrosAsyncAwait = async (req, h)=>{
    try{

        const{preTokenVal} = req.pre;

        if((preTokenVal) === -1){
            return h.response({error: 'No tiene token'});
        }


        const carroActualizado = await Carro.findByIdAndUpdate(req.params.index, req.payload.data);

        return h.response(carroActualizado);

    }catch(error){
        return h.response(error);
    }
}


module.exports.borrarCarroAsyncAwait = async (req, h)=>{
    try{

        const{preTokenVal} = req.pre;

        if((preTokenVal) === -1){
            return h.response({error: 'No tiene token'});
        }


        const carroeliminado = await Carro.findByIdAndDelete(req.params.index, req.payload.data);

        return h.response(carroeliminado);

    }catch(error){
        return h.response(error);
    }
}