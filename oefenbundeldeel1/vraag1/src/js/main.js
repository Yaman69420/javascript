// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

// Eigen JS
const telOp = (n1, n2) => n1 + n2;


// UI handler (arrow + block body)
const verwerkSom = () => {
    const n1 = Number(document.getElementById("m1_a").value);
    const n2 = Number(document.getElementById("m1_b").value);
    const out = document.getElementById("m1_out");

    if (!n1 || !n2){
        out.className = "alert alert-warning mb-0";
        out.textContent = `⚠️ Vul twee getallen in`;
        return;
    }

    const resultaat = telOp(n1, n2);
    out.className = "alert alert-success mb-0";
    out.textContent = (`${n1} + ${n2} = ${resultaat}`)
};

// Event
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("m1_btn").addEventListener("click", verwerkSom);});