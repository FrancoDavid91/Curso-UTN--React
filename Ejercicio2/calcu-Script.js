function calculate(operator) {
    var operand1 = parseFloat(document.getElementById('operand1').value);
    var operand2 = parseFloat(document.getElementById('operand2').value);
  
    if (isNaN(operand1) || isNaN(operand2)) {
      alert('Por favor, ingrese números válidos.');
      return;
    }
  
    var result;
  
    switch (operator) {
      case '+':
        result = operand1 + operand2;
        break;
      case '-':
        result = operand1 - operand2;
        break;
      case '*':
        result = operand1 * operand2;
        break;
      case '/':
        if (operand2 === 0) {
          alert('No se puede dividir por cero.');
          return;
        }
        result = operand1 / operand2;
        break;
      default:
        alert('Operador no válido.');
        return;
    }
  
    document.getElementById('result').value = result;
  }

  function resetCalculator() {
    document.getElementById('operand1').value = '';
    document.getElementById('operand2').value = '';
    document.getElementById('result').value = '';
  }
  