//Definir un arreglo de 
//nombre de producto 
const nombres = [ "Lapiz HB", "Resaltador", "Borrador de nata"];
console.table(nombres);

//agregar elementos al arreglo:
nombres[3] = "Micropunta"
console.table(nombres);
console.table(nombres[0])
//agregar elemento al final: 
nombres.push("Corrector");
console.table(nombres);
//agregar elementos al principio: 
nombres.unshift("Borrador miga de pan")
console.table(nombres);
//eliminar elementos de un arreglo:
delete nombres[3];
console.table(nombres);
//eliminar ultimos elementos 
nombres.pop()
console.table(nombres);
//eliminar elementos del principio:
nombres.shift()
console.table(nombres);

for( let i=0 ; i<nombres.length ; i++ ){
    console.log(nombres[i])
}

//Operador spread con arreglos:
const nombres2 = ["Transportador", "Regla 30 cm"]

const productos = [ ...nombres, ...nombres2 ]
console.table(productos)