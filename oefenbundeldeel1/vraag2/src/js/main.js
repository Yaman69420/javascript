// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

// Eigen JS

// Elements
const inputc = document.getElementById("m2_c");
const out = document.getElementById("m2_out");
const btnToM = document.getElementById("m2_btn"); //
function getcValue() {
    const c = parseFloat(inputc.value);

    if (isNaN(c) || c < 0) {
        out.textContent = "ongeldig";
        return null;
    }

    return c;
}

btnToM.addEventListener("click",() => {
    const c = getcValue();
    if (c === null) return;

    const k = (c + 273.15);
    out.textContent = `${c}°C = ${k.toFixed(2)} K`;
});

