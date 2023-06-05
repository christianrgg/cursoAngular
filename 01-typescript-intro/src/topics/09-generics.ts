//Usar el tipo de dato any no es recomendable
//Los genericos en typescript son

//Funciones genericas
//Para decir que acuerdo al tipo de dato recibido es el tipo de dato con el que trabajará y retornará la funcion.
//Se empieza por la letra T
//export function whatsMyType(argument:any):any{
export function whatsMyType<T>(argument:T):T{
    return argument;
}

let amIString = whatsMyType<string>("Hola Mundo");
let amINumber = whatsMyType<number>(100);
let amIArray = whatsMyType<number[]>([1,2,3,4,5]);

console.log(amIString.split(""));
console.log(amINumber.toFixed());
console.log(amIArray.join("-"));