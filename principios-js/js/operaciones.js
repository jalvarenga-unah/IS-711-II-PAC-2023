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

btnResta.addEventListener("dblclick", resta);
