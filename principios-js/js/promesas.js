const miPromesa = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const random = Math.random();
      if (random < 0.5) {
        resolve("La promesa se resolvió exitosamente");
      } else {
        reject("La promesa fallo");
      }
    }, 2000);
  });
};

new Promise( function (resolve, reject){} )

//una funcion "async"
const resolviendoTarea = async () => {
  try {
    console.log("iniciando la promesa");

    const respuesta = await miPromesa();

    console.log(respuesta);
    console.log("promesa finalizada");
  } catch (error) {
    alert(error);
  }
};
console.log("iniciando la promesa");
resolviendoTarea2();
console.log("promesa finalizada");
// !esto no se puede hacer:
// await miPromesa()

async function resolviendoTarea2() {}

// console.log("iniciando la promesa");
miPromesa()
  .then((respuesta) => {
    console.log(respuesta);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("finalizando la promesa");
  });
// console.log("promesa finalizada");
