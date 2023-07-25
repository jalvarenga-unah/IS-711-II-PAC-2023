// asincrono y sincrono
// asincrono: se resuelve en un hilo diferente de ejecución
// sincrono: se resuelve en el mismo hilo de ejecución,
//  se detiene hasta que se reseeulve la promesa

function peticion2() {
  console.log("antes de la peticion");

  fetch("https://fakestoreapi.com/products")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });

  console.log("despues de la peticion");
}

const peticion = async () => {
  console.log("antes de la peticion");

  //Response
  const response = await fetch("https://fakestoreapi.com/products");

  const productos = await response.json();

  const lista = document.getElementById("lista");

  //   for (let a = 0; a < productos.length; a++) {
  //     const {title} = productos[a];
  //     lista.innerHTML += ` <li> ${title} </li>`;
  //   }

  // productos.map((producto) => {
  //   lista.innerHTML += ` <li> ${producto.title} </li>`;
  //   console.log(producto.title);
  // });

  lista.innerHTML = productos
    .map((producto) => {
      const { title, price, category } = producto;

      return `<li> ${title} <br>
                <span style="color:green"> ${price} - ${category} </span>            
            </li>`;
    })
    .join("");

  console.log("despues de la peticion");
};

// peticion();

peticion();
