/*
    ===== Código de TypeScript =====
*/

interface SuperHero {
    name: string;
    age: number;
    address: Address;
    showAddress:() => string;
}

//Si hay un objeto dentro de otro objeto se recomienda separarlos en pequeños objetos.


interface Address {
    street: string;
    country: string;
    city: string;
}

//Para renombrar una variable presionar [fn + f2] (En nuestra hp clic derecho opción cambiar el nombre del simbolo)
const superHeroe: SuperHero = {
    name: 'Spiderman',
    age: 30,
    address: {
        street: 'Main St',
        country: 'USA',
        city: 'NY'
    },
    showAddress() {
        return this.name + ', ' + this.address.city + ', ' + this.address.country;
    }
}


const address = superHeroe.showAddress();
console.log( address );




export {};