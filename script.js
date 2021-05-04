//Hola mundo
console.log('hola mundo');


//constantes

const PI = 3.1416;
const COLOR_BLANCO = '#FFFFFFF';

//tipos de datos
let x;
x = 25;
x = "Hola";
x = true;

//tipo de dato numbre
let n = 4;
n = 4.2526;

let num = n;
num = 5;
console.log(n);
console.log(num);

//valores numericos especiales: Infinity, NaN
console.log(1/0);
console.log("hola"/2);

//tipo de dato  BigInt
num = 14456689014567898014567890n;
console.log(num);

//tipo de dato boleano
let verdadero =  true;
let falso = false;

// valor null
num = null;


//valor undefined
//significa no asignado
let prueba;
console.log(prueba);

//typeof
console.log(typeof(num));
num = null;
console.log(typeof(num));

//conversion de datos
let cadena ="123";
let conversion = Number(typeof(cadena));
conversion =  Number(NaN);
console.log(`El valor ${conversion} es de tipo ${typeof(conversion)}`);

//conversiones numericas ocurren automaticamente enfunciones matematicas y expresiones
conversion = '6' / 2;
conversion = '6' * 2;
conversion = '6' * '2';
console.log(`El valor ${conversion} es de tipo ${typeof(conversion)}`);

//conversion a boleano
conversion  =Boolean('Hola');
console.log(`El valor ${conversion} es de tipo ${typeof(conversion)}`);

//comparaciones
//al comparar valores de diferentes tipos, js primero convierte los valores a numeros.
// toda comparacion con NaN es false
console.log(2 > true);


// sentencia if
/*if(condicion){

}else if(condicion){

}else{

}
*/

//operador ternario
let edad;
let resultado = edad > 18 ? 20 : 30;

//bucle while y for
let i = 1;
while(i<=10){
    i++;
}

//ciclo for
/*for(comienzo,condicion,inremento)
*/

