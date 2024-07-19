console.log("Carrito de compras..")

//Template String:
//Alternativa a la concatenacion
// Permite incrustar un valor dentro de un String 
const nombreProducto = new String("Lenovo V4");
console.log(`El producto es: ${nombreProducto}`); 

const precioProducto = 23;
const precioProductoStr = "23";

console.log(precioProducto);
console.log(precioProductoStr);

console.log(precioProducto == precioProductoStr);

//Objeto Producto:
//Objeto Literal:
const producto1 = {
    nombre : "Lenovo ThinkPad",
    color : `Red`,
    modelo : `IU643`,
    descripcion : `laptop para trabajo liviano`, 
    precio : 2340000.89,
    getModelo : function(){
        console.log(this.modelo);
    }
}

producto1.imagen = "imagen1.jpg"
console.log(producto1)

//acceder a los atributos del objeto 
console.log(producto1); 

//invocar metodo getModelo:
producto1.getModelo();

//sin desestructuracion
nombresito = producto1.nombre;
console.log(nombresito)

//con desestructuracion:
const { descripcion, precio } = producto1;
console.log(descripcion, precio)

//Object contructor:
const Producto = function(nombre, color, precio){
    this.nombre = nombre,
    this.color = color, 
    this.precio = precio
}

//2 instancias de Producto 
const p1 = new Producto("Lapiz HB Berol", "Azul", 5000);
console.log(p1);

//operador spread
producto1
const medidas = {
    "peso" : "50kg",
    "altura" : "1m",
    "largo" : "50cm"
}

const nuevoProducto = { ...producto1, ...medidas };
console.log(nuevoProducto);

