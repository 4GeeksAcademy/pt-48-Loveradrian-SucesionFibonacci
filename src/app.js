const buttonGenerateFib = document.getElementById("generateFib");
const inputNumber = document.getElementById("inputNumber");
const resultNumbers = document.getElementById("resultNumbers");

buttonGenerateFib.addEventListener("click", () => {
  let number = /^[0-9]+$/;
  number = parseInt(inputNumber.value);
  const newFibonacciNumber = fib(number);
  resultNumbers.innerHTML = "";
  newFibonacciNumber.forEach(num => {
    const listItem = document.createElement("li");
    listItem.textContent = num;
    resultNumbers.appendChild(listItem);
  });
});

const fib = (number, numFibInicio = [0, 1]) => {
  if (number <= numFibInicio.length) {
    return numFibInicio;
  }

  const nextValue =
    numFibInicio[numFibInicio.length - 1] +
    numFibInicio[numFibInicio.length - 2];
  numFibInicio.push(nextValue);
  return fib(number, numFibInicio);
};
