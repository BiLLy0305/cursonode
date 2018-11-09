const PI = 3.1416;

function sumar(x1, x2){
    return x1 + x2;
}

function restar(x1, x2){
    return x1 - x2;
}

function dividir(x1,x2){

    if(x2 == 0){
        errorDivision();
    }else{
        return x1/x2;
    }
}

function errorDivision(){
    console.log('No puede dividirse entre 0');
}

exports.sumar = sumar;
exports.restar = restar;
exports.dividir = dividir;
exports.PI = PI