const pressButton = document.getElementById('pressButton');
const countSpan = document.getElementById('count');

let count = 0;

pressButton.addEventListener('click', () => {
    count++;
    countSpan.textContent = count;

    if (count >= 1000000) {
        alert("Congratulations! You've pressed the button one million times!");
    }
});
