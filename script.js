let currentDisplay = '';

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#input-box').value = currentDisplay;
});

// Helper functions for calculator operations
function clearDisplay() {
  currentDisplay = '';
  document.querySelector('#input-box').value = currentDisplay;
}

function appendToDisplay(value) {
  currentDisplay += value;
  document.querySelector('#input-box').value = currentDisplay;
}

function calculateResult() {
  try {
    currentDisplay = eval(currentDisplay).toString();
    document.querySelector('#input-box').value = currentDisplay;
  } catch (error) {
    currentDisplay = '';
    document.querySelector('#input-box').value = 'Error';
  }
}