// Import our custom CSS
import '../scss/styles.scss'
import * as bootstrap from 'bootstrap'

// Eigen JS

const baseInput = document.querySelector('#em_input');
const out = document.querySelector('#em_preview');
const form = document.querySelector('#em_form');
const status = document.querySelector('#em_status');

function preview(title) {
    const email = title.trim();

    if (email.length === 0) {
        out.className = "alert alert-secondary mb-2";
        return 'Typ een email...';
    }

    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (isValid) {
        out.className = "alert alert-success mb-2";
        return `Geldig email`;
    } else {
        out.className = "alert alert-danger mb-2";
        return `Ongeldig email`;
    }
}

baseInput.addEventListener('input', () => {
    const resultaat = preview(baseInput.value);
    out.textContent = resultaat;
});

form.addEventListener('submit', (Event) => {
    Event.preventDefault();
    const email = baseInput.value.trim();
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (isValid) {
        status.className = "alert alert-success mt-3 mb-0";
        status.textContent = `${email} is geldig!`;
    } else {
        status.className = "alert alert-danger mt-3 mb-0";
        status.textContent = `Ongeldig e-mailadres`;
    }
});