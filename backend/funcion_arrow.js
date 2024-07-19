//Sintáxis Función =  Arrow-Flecha
//reglas:
// 1.si el bloque de codigo 
//de la funcion flecha solo tiene una linea, no hace falta poner corchetes
// 2. si la funcion tuene un solo parametro, se puede omititr el parentesis de los parametros

const saludo = (nombre) => console.log(`Hola ${nombre} desde una funcion flecha`)

//invocar a la funcion flecha 
console.log(saludo("Yeritson"));