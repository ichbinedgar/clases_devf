const miConstante= 20;
let miVariable = 30;

console.log(miVariable);
miVariable = 'mascota';
console.log(miVariable);

// OPERADORES
let suma = 2+3;
let resta = 2-3;
let operacionLogica = 1 === 1;
// ...

// CICLOS

const nombreAlumnos = ["Edgar","Gabriela","Claudio","Juan"]

nombreAlumnos.forEach

/* callbacks */

const sumarNumeros = (numeroInicial,numeroFinal,callback) => {
    const resultado = numeroFinal + numeroInicial;
    callback(resultado)
}

const imprimirResultado = (resultado) => {
    console.log(resultado)
}

sumarNumeros(1,1,(resultado) => {
    console.log(resultado)
})

// PROMISES
const miPromesa = new Promise((resolve, reject) => {
    if(true){
        resolve("todo bien")
    }
    else {
        reject("todo mal")
    }
})

miPromesa
.then((res) => {
    console.log(res)
})
.catch((err) => {
    console.log(err)
})

// CLASS

class Animal {
    constructor(){

    }
    metodo(){
        
    }
}
