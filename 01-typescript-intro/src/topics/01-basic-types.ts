// Solo usar const cuando uno sepa que a variable no cambiara 
const name = `Strider`;

// Para colocar dos tipos de datos usar caracter tuberia
let hpPoint: number | string = 95;
const isAlive: boolean = true;

console.log({
    name, hpPoint, isAlive
});


export {}