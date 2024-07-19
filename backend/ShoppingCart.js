// Definición de productos
const producto1 = {
  nombre: "Laptop",
  descripcion: "Laptop de alta gama",
  tipoDeProducto: "Electrónica",
  modelo: "XPS 15",
  precio: {
    deCompra: 1000,
    precioMinimoDeVenta: 1200
  },
  caracteristicas: {
    dimensiones: {
      alto: 2,
      ancho: 30,
      largo: 20
    },
    fabricacion: {
      pais: "China",
      fecha: "2023-01-15"
    }
  },
  ObtenerPrecioCompra() {
    return this.precio.deCompra;
  }
};

const producto2 = {
  nombre: "Smartphone",
  descripcion: "Smartphone con cámara de alta resolución",
  tipoDeProducto: "Electrónica",
  modelo: "Galaxy S21",
  precio: {
    deCompra: 800,
    precioMinimoDeVenta: 1000
  },
  caracteristicas: {
    dimensiones: {
      alto: 0.8,
      ancho: 7,
      largo: 15
    },
    fabricacion: {
      pais: "Corea del Sur",
      fecha: "2023-03-10"
    }
  },
  ObtenerPrecioCompra() {
    return this.precio.deCompra;
  }
};

const producto3 = {
  nombre: "Televisor",
  descripcion: "Televisor 4K de 55 pulgadas",
  tipoDeProducto: "Electrónica",
  modelo: "OLED55",
  precio: {
    deCompra: 1500,
    precioMinimoDeVenta: 1800
  },
  caracteristicas: {
    dimensiones: {
      alto: 70,
      ancho: 5,
      largo: 122
    },
    fabricacion: {
      pais: "Japón",
      fecha: "2023-02-20"
    }
  },
  ObtenerPrecioCompra() {
    return this.precio.deCompra;
  }
};

const producto4 = {
  nombre: "Reloj Inteligente",
  descripcion: "Reloj inteligente con monitor de actividad",
  tipoDeProducto: "Electrónica",
  modelo: "FitWatch",
  precio: {
    deCompra: 200,
    precioMinimoDeVenta: 250
  },
  caracteristicas: {
    dimensiones: {
      alto: 1,
      ancho: 4,
      largo: 4
    },
    fabricacion: {
      pais: "Estados Unidos",
      fecha: "2023-04-05"
    }
  },
  ObtenerPrecioCompra() {
    return this.precio.deCompra;
  }
};

const producto5 = {
  nombre: "Tablet",
  descripcion: "Tablet con pantalla de 10 pulgadas",
  tipoDeProducto: "Electrónica",
  modelo: "iPad",
  precio: {
    deCompra: 600,
    precioMinimoDeVenta: 750
  },
  caracteristicas: {
    dimensiones: {
      alto: 0.7,
      ancho: 18,
      largo: 25
    },
    fabricacion: {
      pais: "China",
      fecha: "2023-05-18"
    }
  },
  ObtenerPrecioCompra() {
    return this.precio.deCompra;
  }
};

const producto6 = {
  nombre: "motocicleta",
  descripcion: "motocicleta para ir mas rapido",
  tipoDeProducto: "automovilistico",
  modelo: "ns200",
  precio: {
    deCompra: 700,
    precioMinimoDeVenta: 900
  },
  caracteristicas: {
    dimensiones: {
      alto: 1.190,
      ancho: 795,
      largo: 2.090
    },
    fabricacion: {
      pais: "japon",
      fecha: "2024-08-26"
    }
  },
  ObtenerPrecioCompra() {
    return this.precio.deCompra;
  }
};
// Carrito vacío
let cart = [];
// Agregar productos al carrito con el  operador Spread
cart = [...cart, producto1, producto2, producto3, producto4, producto5, producto6];

// Acumulador para el costo total de adquisición
let costoTotalAdquisicion = 0;

// Recorrer el arreglo y desestructurar usando for...of
for (const producto of cart) {
  const { nombre, tipoDeProducto, modelo, caracteristicas: { dimensiones: { largo }, fabricacion: { pais } } } = producto;
  console.log(`Nombre: ${nombre}, Tipo de Producto: ${tipoDeProducto}, Modelo: ${modelo}, Largo: ${largo}, País de Fabricación: ${pais}`);
 
  // Acumular el precio de compra
  costoTotalAdquisicion += producto.ObtenerPrecioCompra();
}

// Mostrar el costo total de adquisición
console.log(`Costo Total de Adquisición: ${costoTotalAdquisicion}`);

// Consultas
// 7.1. Consultar productos que vengan de China usando un ciclo for
const productosDeChina = [];
for (const producto of cart) {
  if (producto.caracteristicas.fabricacion.pais === "China") {
    productosDeChina.push(producto);
  }
}
console.log("Productos que vienen de China:", productosDeChina);

// 7.2. Consultar productos que tengan más de dos metros de alto
const productosAltos = cart.filter(producto => producto.caracteristicas.dimensiones.alto > 2);
console.log("Productos que tienen más de dos metros de alto:", productosAltos);

// 7.3. Consultar productos que tengan un precio mínimo de venta inferior a COP 10000
const productosBaratos = cart.filter(producto => producto.precio.precioMinimoDeVenta < 10000);
console.log("Productos con precio mínimo de venta inferior a COP 10000:", productosBaratos);

