let display = document.getElementById("display");
let sebelumnumber = "";
let sesudahnumber = "";
let operation = null;

function appendNumber(number) {
  sebelumnumber += number;
  display.value = sesudahnumber + " " + (operation || "") + " " + sebelumnumber;
}

function chooseOperation(op) {
  if (sebelumnumber === "") return;
  if (sesudahnumber !== "") {
    calculate();
  }
  operation = op;
  sesudahnumber = sebelumnumber;
  sebelumnumber = "";
  display.value = sesudahnumber + " " + operation;
}

function calculate() {
  let computation;
  const prev = parseFloat(sesudahnumber);
  const current = parseFloat(sebelumnumber);
  if (isNaN(prev) || isNaN(current)) return;
  switch (operation) {
    case "+":
      computation = prev + current;
      break;
    case "-":
      computation = prev - current;
      break;
    case "*":
      computation = prev * current;
      break;
    case "/":
      computation = prev / current;
      break;
    default:
      return;
  }
  sebelumnumber = computation;
  operation = undefined;
  sesudahnumber = "";
  display.value = sebelumnumber;
}

function clearDisplay() {
  sebelumnumber = "";
  sesudahnumber = "";
  operation = undefined;
  display.value = "";
}
