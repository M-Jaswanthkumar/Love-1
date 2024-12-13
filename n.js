document.getElementById('openButton').addEventListener('click', function() {
    const postcard = document.getElementById('postcard');
    postcard.classList.add('open');
    showNextLetter();
});

document.getElementById('closeButton').addEventListener('click', function() {
    const postcard = document.getElementById('postcard');
    postcard.classList.remove('open');
});

let currentLetter = 0;
const letters = document.querySelectorAll('.letter');

function showNextLetter() {
    if (currentLetter < letters.length) {
        letters[currentLetter].style.display = 'block';
        currentLetter++;
    }
}
