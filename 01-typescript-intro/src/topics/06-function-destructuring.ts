//INTERFACES
interface Product {
    description: string;
    price: number;
}

interface TaxCalculationOptions {
    products: Product[];
    tax: number;
}


//PRODUCTOS
const phone: Product = {
    description: "Nokia A1",
    price: 150.00
}

const tablet: Product = {
    description: "iPad Air",
    price: 250.00
}


//FUNCION
//Recibe en option todos los productos para calcular los totales con la interface TaxCalculationOptions
function taxCalculation(options: TaxCalculationOptions): [number, number]{
    
    //Se inicia total
    let total = 0;

    options.products.forEach(({price}) => {
        //Acumula totales para cada producto
        total += price;
    });

    return [total, total * options.tax];
}


//Productos que lleva el carrito y se pasaran a products
const shoppingCart = [phone, tablet];

//Valor de impuesto
const tax = 0.15;


//Insercion de datos a la funcion con la interface TaxCalculationOptions
// const result = taxCalculation({
//     products: shoppingCart,
//     tax: tax
// });

//DESESTRUCTURACION DE ARGUMENTOS (Misma funcion de arriba)
const [total, taxTotal] = taxCalculation({
    products: shoppingCart,
    tax: tax
});


//Muestra resultado del arreglo de la funcion con los valores 0 y 1
console.log(`Total:`, total);
console.log(`Tax:`, taxTotal);








export {}