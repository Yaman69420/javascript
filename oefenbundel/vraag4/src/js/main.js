// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

// Eigen JS

// Elements
const baseInput= document.querySelector('#sh_base');
const runBtn= document.querySelector('#sh_run');
const out= document.querySelector('#sh_out');

runBtn.addEventListener('click', () => {
    const raw = baseInput.value.trim();
    const base = raw === '' || Number.isNaN(Number(raw)) ? 10 : Number(raw);

    let x = base;

    const lines = [];
    lines.push(`buiten block: x = ${x}`);

    {
        let x = base + 5;
        lines.push(`binnen block: x = ${x}`);
    }

    lines.push(`na block: x = ${x}`);

    out.innerHTML = lines
        .map(txt => `<li class="list-group-item">${txt}</li>`)
        .join('');
});