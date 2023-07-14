//referencia al formulario
const formulario = document.getElementById("formUser");
//TODO: PARA INVESTIGAR
// const formulario = document.getElementsByName
// const formulario = document.getElementsByTagName
// const formulario = document.querySelector
// const formulario = document.querySelectorAll

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  //debo obtenr la data del formulario
  const formData = new FormData(formulario);

  //convertir a un objeto las entradas del formulario
  const data = Object.fromEntries(formData.entries());

  //ese objeto lo envio a una funcion para validar
  validarFormuario(data);
});

const validarFormuario = ({ nombre, telefono, correo }) => {
  if (nombre.length === 0 || telefono.length === 0 || correo.length === 0) {
    alert("todos los campos son obligatorios");
    return;
  }

  if (correo.indexOf("@") === -1) {
    alert("el correo no es valido");
    return;
  }

  if (telefono.length !== 8) {
    alert("el telefono no es valido");
    return;
  }

  const data = {
    nombre,
    telefono,
    correo,
  };

  alert("Formualrio enviado");
  console.log(data);
};
