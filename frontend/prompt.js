//alert("Hola 2826502")
//let nombre = prompt("Por favor ingrese su nombre")
//document.querySelector("div").innerText = nombre
const nombreProducto = new String("Lenovo V4");
console.log(`El producto es: ${nombreProducto}`); 

const precioProducto = 23;
const precioProductoStr = "23";

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

console.log(producto1); 

producto1.getModelo();

nombresito = producto1.nombre;
console.log(nombresito)

const { descripcion, precio } = producto1;
console.log(descripcion, precio)

const Producto = function(nombre, color, precio){
    this.nombre = nombre,
    this.color = color, 
    this.precio = precio
}

const p1 = new Producto("Lapiz HB Berol", "Azul", 5000);
console.log(p1);

producto1
const medidas = {
    "peso" : "50kg",
    "altura" : "1m",
    "largo" : "50cm"
}

const nuevoProducto = { ...producto1, ...medidas };
console.log(nuevoProducto);