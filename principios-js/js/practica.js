// Ejercicio 1: Contar la cantidad de palabras en un texto
// Implementa la función 'contarPalabras' que reciba un texto y devuelva la cantidad de palabras que contiene.
// Considera que las palabras están separadas por espacios.

let parrafo = "lorem impsum dolor algo otra cosa";

function contarPalabras(texto) {
  const palabras = texto.split(" ");
  const cantidadPalabras = palabras.length;

  return `El parrafo tiene ${cantidadPalabras} palabras`;
}

const result = contarPalabras(parrafo); //ejecutando la funcion
console.log(result);

// Ejercicio 2: Calcular el promedio de notas
// Implementa la función 'calcularPromedioNotas' que reciba un arreglo de
// objetos que representan estudiantes.
// Cada estudiante tiene una propiedad 'nombre' (string) y 'notas' (arreglo de números).
// La función debe devolver un nuevo objeto que contenga el nombre del estudiante
// y el promedio de sus notas.

// EJEMPLO:
const estudiantes = [
  { nombre: "Juan", notas: [98, 96, 87, 88] },
  { nombre: "María", notas: [94, 95, 86, 87] },
];
// Valor de Retorno
// [{nombre: "Juan", promedio: 92.25},{nombre: "María", promedio: 90.5}]

function calcularPromedioNotas(estudiantes) {
  let resultados = []; //el valor de retorno

  for (let i = 0; i < estudiantes.length; i++) {
    let { nombre, notas } = estudiantes[i]; // obtener la info de cada estudiante
    // let nombre = estudiantes[i].nombre
    // let notas = estudiantes[i].notas

    let promedio = 0; // control para calcular el promedio

    //sumar las notas
    for (let j = 0; j < notas.length; j++) {
      promedio += notas[j];
    }

    // let suma = notas.reduce( ( sum, act ) => sum + act )

    const { length } = notas;

    //calculo del promedio
    promedio = promedio / length;

    // crear el objeto y agregarlo a la lista de retorno
    resultados.push({ nombre: nombre, promedio: promedio });
  }

  return resultados;
}

const notas = calcularPromedioNotas(estudiantes); // ejecución de la función
console.log(notas);
// Ejercicio 3: Encontrar duplicados
// Implementa la función 'encontrarDuplicados' que reciba un arreglo de números y devuelva un nuevo arreglo
// con los números que se repiten en el arreglo original.

const numeros = [1, 2, 3, 1, 2, 3, 3, 4];

function encontrarDuplicados(numeros) {
  let duplicados = [];

  for (let i = 0; i < numeros.length; i++) {
    for (let j = i; j < numeros.length; j++) {
      if (numeros.indexOf(numeros[j], i + 1) > -1) {
        if (duplicados.indexOf(numeros[i]) === -1) {
          duplicados.push(numeros[i]);
        }
      }
    }
  }
  return duplicados;
}

const duplicados = encontrarDuplicados(numeros);

console.log("original:", numeros);
console.log("duplicados:", duplicados);