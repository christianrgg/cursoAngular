export class Persona {
    public name?: string;
    public address?: string;

    constructor(){
        this.name = "Christian";
        this.address = "Mérida"
    }
}

const ironman = new Persona();
 console.log(ironman);