let count = 0;

const display = document.getElementById("count");

function updateDisplay() {
    display.textContent = count;
}

function increase() {
    count++;
    updateDisplay();
}

function decrease() {
    count--;
    updateDisplay();
}

function resetCounter() {
    count = 0;
    updateDisplay();
}