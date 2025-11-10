// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js
const isEven = num => num % 2 === 0;

const checkEven = () => {
    const inp = Number(document.getElementById("ev_input").value);
    const out = document.getElementById("ev_out");

    if (!inp) {
        out.className = "alert alert-warning mb-0";
        out.textContent = `⚠️ Vul een getal in`;
        return;
    }

    const resultaat = isEven(inp)
        ? `${inp} is EVEN `
        : `${inp} is ONEVEN ❌`;

    out.className = "alert alert-success mb-0";
    out.className = "alert alert-danger mb-0";

    out.textContent = resultaat;
};

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("ev_btn")
        ?.addEventListener("click", checkEven);
});
