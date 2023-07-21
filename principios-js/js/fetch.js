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

// const loader = document.getElementById("loader");
const loader = document.getElementsByClassName("loader")[0];

const getAllProducts = async () => {
  try {
    const respuesta = await fetch("https://fakestoreapi.com/products"); // => miPromesa()

    if (!respuesta.ok) {
      //generando una nueva excepción
      throw new Error("La petición falló");
    }

    const productos = await respuesta.json();

    const lista = document.getElementById("listaProductos");
    let contenidoLista = "";

    productos.map((producto) => {
      const { id, title,image, description } = producto;
      // contenidoLista += `<li class='list-group-item'>${id} - ${title}</li>`;

      const newDescription = description.substring(0, 100);

      contenidoLista += `
      <div class="col-md-4">
        <div class="card" style="width: 18rem;">
          <img src="${image}" class="card-img-top" style='height:200px!important; object-fit: scale-down' alt="${title}">
          <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p class="card-text">${newDescription}</p>
            <button onClick='verDetalle(${id})' class="btn btn-primary">Ver mas</button>
          </div>
        </div>
      </div>
     `;
    });
    console.log(contenidoLista);

    //ocultar le lodaer
    // loader. classList.add('hidden')
    loader.style.display = "none";

    lista.innerHTML = contenidoLista;
    // const ul = document.createElement("ul");

    // productos.map((producto) => {
    //   const { id, title } = producto;

    //   const li = document.createElement("li");
    //   li.innerText = `${id} - ${title}`;

    //   ul.appendChild(li);
    // });
    // document.body.appendChild(ul);
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


function verDetalle(id){

  //redigir a la pagina de detalle
  // window.location.href = `detalle.html?id=${id}`
  
  
  //almancenamiento local
  //setItem: crea una nueva llave con un valor
  localStorage.setItem('id', id)        //es persistente, mantengo la informacion aunque cierre el navegador

  //getItem: obtiene el valor de una llave
  // localStorage.getItem('id')

  // localStorage.removeItem('id')        //elimina la llave

  sessionStorage.setItem('id', id)      //es temporal, se borra cuando se cierra el navegador

  window.location.href = `detalle.html`


}