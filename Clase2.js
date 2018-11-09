
var numero1=1;
var numero2=1;
var resultado = numero1 + numero2;

/*console.log(resultado);*/


let num1 = 1;
let num2 = 2;

let res = num1 + num2;

if(true){
    var resultado = numero1 + numero2;
    console.log(res);
    console.log(`Resultado var:,${resultado},Resultado let: ${res}`);
}

let arreglo = [1,2,3,4,5];

let  objeto = {
    att: 'hola mundo',
    att2: 'hola mundo2'
}

console.log(arreglo,objeto);

process.argv.forEach((value,index) =>{
    console.log(`indice: ${index} ,value: ${value}`);
})

for (let i = 0; i<process.argv.length;i++){
    console.log(`indice: ${i} ,value: ${process.argv[i]}`);    
}

let funcion = (param1, param2)=>
     param1 + param2;


console.log(`funcion: ${funcion(5,5)}`);