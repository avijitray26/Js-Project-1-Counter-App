let count = 0;
const counter = document.getElementById('counter');

function updateCounter() {
    counter.textContent = count;
}

function increment() {
    count++;
    updateCounter();
}

function decrement() {
    count--;
    updateCounter();
}

function reset() {
    count = 0;
    updateCounter();
}
