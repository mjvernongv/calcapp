function appendValue(value) {
  document.getElementById('display').value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function calculateResult() {
  try {
    const result = eval(document.getElementById('display').value);
    document.getElementById('display').value = result;

    // Trigger fireworks
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 }
    });
  } catch {
    document.getElementById('display').value = 'Error';
  }
}

