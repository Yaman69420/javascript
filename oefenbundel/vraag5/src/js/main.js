// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

// Eigen JS

// Elements
const baseInput= document.querySelector('#fs_text');
const runUpper= document.querySelector('#fs_upper');
const runLower= document.querySelector('#fs_lower');
const runCap= document.querySelector('#fs_cap');
const out= document.querySelector('#fs_results');

const lines = []

function addLine(str) {
    lines.push(str);
    if (lines.length > 5) lines.shift();
    out.innerHTML = lines
        .map(txt => `<li class="list-group">${txt}</li>`)
        .join('');
}

// function updateOutput(){
//     out.innerHTML = lines
//         .map(txt => `<li class="list-group">${txt}</li>`)
//         .join('');}

runUpper.addEventListener('click', () => {
    addLine(baseInput.value.toUpperCase());
});

    runLower.addEventListener('click', () => {
        addLine(baseInput.value.toLowerCase());
    });

        runCap.addEventListener('click', () => {
            const cap = baseInput.value.toLowerCase()
                .replace(/\b\w/, char => char.toUpperCase());
                addLine(cap);
        });