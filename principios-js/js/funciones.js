// let saludo = 'Hola mundo desde la variable'

// saludo() //es permitido

function saludo() {
  console.log("Hola desde funciones.js");
}

// saludo2() // no es válido, solo se puede ejecutar despues de su declaración
const saludo2 = () => {
  console.log("Hola desde una funcion como variable");
};

const mascotaPosicional = (apodo, nombre, peso, raza) => {
  if (!nombre) {
    alert("Debe ingresar el nombre de su mascota");
    return;
  }
  alert(` Hola ${nombre}, raza: ${raza} `);
  console.log(` Hola ${nombre}, raza: ${raza} `);
};

// mascotaPosicional('Polar', null, 'Chihuaha', 'Polarcin')

const mascota = ({ apodo, nombre, peso, raza }) => {
  if (!nombre) {
    alert("Debe ingresar el nombre de su mascota");
    return;
  }
  alert(` Hola ${nombre}, raza: ${raza} `);
  console.log(` Hola ${nombre}, raza: ${raza} `);
};

// const nombreMascota = prompt("Ingrese el nombre de su mascota");
// const razaMascota = prompt("Ingrese la raza de su mascota");

const infoMascota = {
  raza: "Terrier",
  nombre: "Apolo",
  peso: 10,
  apodo: "Aplito",
  color: "negro",
};

const nombre = "Juan Alvarenga";

// desestructuracion
// const { nombre: nombreMascota, raza } = infoMascota;

infoMascota["nombre"] = "nuevo valor";
delete infoMascota.apodo;

let nombreMascota = infoMascota.nombre;
let raza = infoMascota.raza;

const lista = [1, 2, 3, 4, 5];

raza = "Poddole";

const [n1, ...resto] = lista;

console.log(nombreMascota);
console.log(raza);
console.log(infoMascota);
// console.log(color)
// console.log(peso)
// console.log(apodo)

// mascota(infoMascota);

// saludo();

const calcularArea = ({ d, y, a, b, c = 1 }) => {
  return a * c;
};

const calcularArea2 = (data) => {
  let { a, c } = data;
  return a * c;
};

const infoArea = {
  a: 2,
  c: 5,
};

console.log(calcularArea2(infoArea));
