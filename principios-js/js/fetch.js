//consumir apis

fetch("https://fakestoreapi.com/products") // => miPromesa()
  .then((respuesta) => {
    if (!respuesta.ok) {
      //generando una nueva excepción
      throw new Error("La petición falló");
    }

    return respuesta.json();
  })
  .then((respuesta) => {
    console.log(respuesta);
  })
  .catch((error) => {
    console.log(error);
  });
