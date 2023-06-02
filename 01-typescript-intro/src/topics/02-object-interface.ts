//Para definir el tipo de dato que aceptara un arreglo colocarlo asi "tipo de dato"[]
const skills: string[] = [`Bash`,`Counter`,`Healing`];


//Para definir el tipo de datos que tendram las propiedades de un arreglo usar la palabra reservada interface y definir las propiedades y el tipo de datos.
interface Character {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string;    //El signo de interrogación indica que la propiedad es opcional. 
}

//Para usar la interface en tu objeto declararlo despues del nombre del objeto strider: Character
//Para agregar las propiedades faltantes posicionarse sobre el nombre del arreglo y presionar ctrl + . y seleccionar la opción para arreglar el error. 
const strider: Character = {
    name: "Strider",
    hp: 100,
    skills: [`Bash`, `Counter`],
    hometown: "",
}

strider.hometown = "Merida"

console.table(strider);



export {};