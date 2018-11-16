

const Mongoose = require('mongoose');

const uri = `mongodb://${process.env.MIP}:${process.env.MPORT}/${process.env.MBDNAME}`;

Mongoose.connect(uri,{useNewUrlParser:true});

const db = Mongoose.connection;

db.on('error: ',console.error.bind(console,"Conexion error"));

db.once('open', () =>{
    console.log('Conexion  correcta a Mongodb');
});

module.exports.db;