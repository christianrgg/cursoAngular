//Liga documentación oficial typescript -----> https://www.typescriptlang.org/docs/handbook/decorators.html

//DECORADORES SON FUNCIONES QUE MUEDEN MODIFICAR EL COMPORTAMIENTO DE CLASES Y METODOS
function classDecorator(constructor: any){
    return class extends constructor {
        newProperty = "New Property";
        hello = "override";
    }
}



@classDecorator
export class SuperClass {
    
    public myProperty:string = "ABC123";

    
    print (){
        console.log("Hola Mundo");
    }
}

//Definición de la clase
console.log(SuperClass);

//Definición de la instacia de la clase

const myClass = new SuperClass();
console.log(myClass);