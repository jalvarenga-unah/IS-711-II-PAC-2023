const numero1 = document.getElementById("n1");
const numero2 = document.getElementById("n2");
const lblResultado = document.getElementById("resultado");
const btnResta = document.getElementById("btnResta");

//la función suma
const suma = () => {
  let num1 = Number(numero1.value);
  let num2 = Number(numero2.value);

  let resulatdo = num1 + num2;

  //alert(`El resulatdo es: ${resulatdo}`);

  //diubujar el resultado en el html
  lblResultado.innerHTML = `El resultado es: ${resulatdo}`;
};

const resta = () => {
  let num1 = Number(numero1.value);
  let num2 = Number(numero2.value);

  let resulatdo = num1 - num2;

  lblResultado.innerHTML = `El resultado es: ${resulatdo}`;
};

const multi = () => {
  let num1 = Number(numero1.value);
  let num2 = Number(numero2.value);

  let resulatdo = num1 * num2;

  lblResultado.innerHTML = `El resultado es: ${resulatdo}`;
};

btnResta.addEventListener("dblclick", resta);

const operaciones = ({ tipo, num1, num2 }) => {
  let resultado = 0;

  // switch (tipo) {
  //   case "suma":
  //     resultado = num1 + num2;
  //     break;
  //   case "resta":
  //     resultado = num1 - num2;
  //     break;
  //   case "multi":
  //     resultado = num1 * num2;
  //     break;
  //   case "divi":
  //     resultado = num1 / num2;
  //     break;
  // }

  // if (tipo === "suma") {
  //   resultado = num1 + num2;
  // } else if (tipo === "resta") {
  //   resultado = num1 - num2;
  // } else if (tipo === "multi") {
  //   resultado = num1 * num2;
  // } else if (tipo === "divi") {
  //   resultado = num1 / num2;
  // }

  const acciones = {
    suma: () => num1 + num2,
    resta: num1 - num2,
    multi: num1 * num2,
    divi: num1 / num2 ?? 1,
  };

  return acciones[tipo];
};
