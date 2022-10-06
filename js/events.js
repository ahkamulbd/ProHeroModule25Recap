// Option 2: Add onclick function

function makeRed() {
    document.body.style.backgroundColor = 'red';
}

// Option 3(a)

const blueButton = document.getElementById('make-blue');

blueButton.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

// Option 3(b)

const purpleButton = document.getElementById('make-purple');

purpleButton.onclick = function makePurple() {
    document.body.style.backgroundColor = 'purple';
}