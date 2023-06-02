function appendToScreen(value) {
  document.getElementById('screen').value += value;
}

function calculate() {
  let expression = document.getElementById('screen').value;
  let result = eval(expression);
  document.getElementById('screen').value = result;
}

function clearScreen() {
  document.getElementById('screen').value = '';
}
