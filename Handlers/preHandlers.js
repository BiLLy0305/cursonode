
module.exports.preValidar = (request)=>{
    const {headers} = request;
    if(headers.token){
        return 1
    }
    return -1;
}

