const formulario = document.getElementById("form");

// formulario.addEventListener("submit", ( event ) => {
//     //cancela el comportamiento por defecto del formulario
//     event.preventDefault();

//     //construir de un objeto con los datos del formulario
//     const data = new FormData(formulario)
//     const parsedData = Object.fromEntries(data.entries())

//     //enviar al servidor los datos
//     console.log(parsedData)
// });

function sendForm(event) {
//   event.preventDefault();

  const children = formulario.children;
  let data = {};

  for (child of children) {
    if (child.name === "") continue;

    data[child.name] = child.value;
  }

  console.log(data);
}
