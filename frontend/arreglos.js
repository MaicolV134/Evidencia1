const nombres = [ "Lapiz HB", "Resaltador", "Borrador de nata"];

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
//eliminar ultimos elementos:
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

let productos = [ ...nombres, ...nombres2 ]
const elemento ="compas"
productos = [...productos, elemento]
const Transportador = "transportador"
productos =[ ...productos , Transportador ]


console.table(productos1)