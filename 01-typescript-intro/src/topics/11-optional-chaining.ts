export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: "Christian",
}
const passenger2: Passenger = {
    name: "Saira",
    children: ["Kiwi","Minerva"],
}

const printChildren = (passenger : Passenger) => {
    const howManyChildren = passenger.children?.length || 0;
    // const howManyChildren = passenger.children!.length || 0;   Non-null assertion operator -----> Le dice a typescript "Confia en mi bro, nunca vas a recibir un valor indefinido"
    console.log(passenger.name, howManyChildren);
}

printChildren(passenger1)