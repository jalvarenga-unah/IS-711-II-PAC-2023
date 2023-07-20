//consumir apis

// fetch("https://fakestoreapi.com/products") // => miPromesa()
//   .then((respuesta) => {
//     if (!respuesta.ok) {
//       //generando una nueva excepción
//       throw new Error("La petición falló");
//     }

//     return respuesta.json();
//   })
//   .then((respuesta) => {
//     console.log(respuesta);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// funcion para obtener los productos de forma asincrona

const getAllProducts = async () => {
  try {
    const respuesta = await fetch("https://fakestoreapi.com/products"); // => miPromesa()

    if (!respuesta.ok) {
      //generando una nueva excepción
      throw new Error("La petición falló");
    }

    const productos = await respuesta.json();

    const lista = document.getElementById("listaProductos");
    let contenidoLista = ''

    productos.map((producto) => {
      const { id, title } = producto;
      contenidoLista += `<li class=''>${id} - ${title}</li>`
    })

    lista.innerHTML = contenidoLista
    // const ol = document.createElement("ul");

    // productos.map((producto) => {
    //   const { id, title } = producto;

    //   const li = document.createElement("li");
    //   li.innerText = `${id} - ${title}`;

    //   ol.appendChild(li);
    // });
    // document.body.appendChild(ol);



  } catch (error) {
    console.log(error);
  }
};

getAllProducts();

const getProductById = async (id = "") => {
  try {
    const respuesta = await fetch(`https://fakestoreapi.com/products/${id}`);

    if (!respuesta.ok) {
      //generando una nueva excepción
      throw new Error("La petición falló");
    }

    const productos = await respuesta.json();
    console.log(productos);
  } catch (error) {
    console.log(error);
  }
};
