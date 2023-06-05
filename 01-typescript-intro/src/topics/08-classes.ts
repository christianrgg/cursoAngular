export class Persona {
    public name: string;
    public address: string;

    constructor(name:string, address:string ){
        this.name = name;
        this.address = address;
    }
}

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


const ironman = new Persona("Iron Man", "New York");
 console.log(ironman);

 const messi = new Player ("Messi", "Paris", 98)
 console.log(messi);