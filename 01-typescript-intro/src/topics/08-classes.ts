import { Player } from './08-classes';
export class Persona {
    public name: string;
    public address: string;

    constructor(name:string, address:string ){
        this.name = name;
        this.address = address;
    }
}
const ironman = new Persona("Iron Man", "New York");
console.log(ironman);

//Ejemplo de clase y constructor resumido

export class Player {
    constructor(
        public name: string,
        public team: string,
        public score: number,
    ){
        this.name = name;
        this.team = team;
        this.score = score
    }
}

// EXTENSIÓN DE CLASE
// export class CareerMode extends Player {
//     constructor(
//         public goals: number,
//         public growth: number,
//     ){
//         super("Messi", "Paris", 98)
//     }
// }

export class CareerMode {
    constructor(
        public goals: number,
        public growth: number,
        public Player: Player,
    ){
    }
}






 const messi = new Player ("Messi", "Paris", 98);
 const messiCareer = new CareerMode (26, 98, messi);

 console.log(messi);
 console.log(messiCareer);