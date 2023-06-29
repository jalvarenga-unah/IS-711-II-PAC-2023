let lista = [1, 2, 3, 4, 5];
// let copia = lista

// for(let i = 0; i < lista.length; i++){
//     console.log( lista[i] );
// }

// while( true ){
// }


// lista.forEach(function (elemento) {
//   console.log(elemento);
// });

// lista.forEach((elemento) => {
//   console.log(`forEach con funcion de flecha ${elemento} `);
// });

// let copia = lista.map((elemento) => {
//     return elemento * 2
// });


//permite hacer copias integras de una lista
let copia = [ ...lista ] // desestructuracion de arreglos


lista.push(4);

console.log('lista original:',lista);
console.log('copia:',copia);
