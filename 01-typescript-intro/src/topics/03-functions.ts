
//Los argumentos de las funciones deben llevar el tipo de datos que aceptaran, en caso de no saber cual agregar colocar any ejemplo a:any. 
//Si se desea que el tipado de TypeScript sea muy estricto cambiar la configuración del archivo tsconfig.json
function addNumbers (a:number, b:number){
    return a + b;
}
const result: number = addNumbers(1,2);
// console.log({result});

//FUNCIONES DE FLECHA =>
// Se puede colocar el tipo de dato que la función regresa agregandolo despues de los argumentos.
const addNumbersArrow = (a:number, b:number):string => {
    //Dentro de las comillas inversas se puede hacer la función toString();
    return `${a+b}`;
}
const result2: String = addNumbersArrow(1,2);
// console.log({result2});


//En las siguiente función el primer caracter es obligatorio, el segundo por signo de interrogación se hace opcional y el tercer valo se hace opcional pero con valor por defecto. Se aconseja seguir ese orden. 
function multiply(firstNumber:number, secondNumber?:number, base:number=2){
    return firstNumber * base;
}

const multiplyResult: number = multiply(5);
// console.log({multiplyResult});

interface Character {
    name: string;
    hp: number;
    //Para definir un metodo en una interface hay que colocar el nombre, dos puntos, funcion de flech y el valor que regresará
    showHp: () => void;
}


const healCharacter = (character:Character, amount:number) => {
    
    character.hp += amount;

}

const strider: Character = {
    name: "Strider",
    hp: 50,
    showHp() {
        console.log(`Puntos de vida ${this.hp}`);
    },
}
healCharacter(strider,10)
healCharacter(strider,660)
strider.showHp();






export {

}