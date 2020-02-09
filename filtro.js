// A partir de la siguiente lista de productos, 
// hacer una web siguiendo el maquetado de ejemplo. 

// Al escribir en el input el color o el tipo de un producto, 
// se deben filtrar los productos. 
// Funciona tanto apretando enter como haciendo clic en el boton. 

/*
#### CONSIGNA ####

- Maquetar una web siguiendo la imagen de ejemplo
- El objeto ya esta creado en el archivo .js
- Esta prohibido usar for. Para recorrer el objeto, debemos usar forEach, map, filter, o cualquier otro método  de arrays. Para recorrer colecciones de HTML (por ejemplo, las que nos devuelve document.getElementsByClassName) si necesitaremos for.
- El filtro debe funcionar tanto cuando el usuario aprieta enter, como cuando aprieta el boton de "filtrar".
- El filtro debe funcionar por color o por tipo, no es necesario que funcione con ambos a la vez.
- Si el campo está vacío, se deben devolver todos los productos.
- Si ningun producto cumple la busqueda (por ejemplo "verde") no se debe mostrar ningun producto.
- No pasen mucho tiempo en el maquetado, dediquense a javascript.
- Al final de la clase, subirlo a github y mandarme link O LAS PERSEGUIRE UNA POR UNA PARA QUE LO HAGAN

*/
const productos = [
  {
    nombre: 'Zapato negro',
    tipo: 'zapato',
    color: 'negro',
    img: './img/taco-negro.jpg',
  },
  {
    nombre: 'Zapato azul',
    tipo: 'zapato',
    color: 'azul',
    img: './img/taco-azul.jpg',
  },
  {
    nombre: 'Bota negra',
    tipo: 'bota',
    color: 'negro',
    img: './img/bota-negra.jpg',
  },
  { nombre: 'Bota azul', tipo: 'bota', color: 'azul', img: './img/bota-azul.jpg' },
  {
    nombre: 'Zapato rojo',
    tipo: 'zapato',
    color: 'rojo',
    img: './img/zapato-rojo.jpg',
  },
];

