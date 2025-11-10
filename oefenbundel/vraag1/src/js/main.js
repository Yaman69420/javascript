// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

// Eigen JS
const telOp = (a, b) => a + b;
const trekAf = (a, b) => a - b;
const vermenigvuldig = (a, b) => a * b;
const deel = (a, b) => a / b;

// UI handler (arrow + block body)
const verwerkSom = (bewerking, teken) => {
    const n1 = Number(document.getElementById("mt_a").value);
    const n2 = Number(document.getElementById("mt_b").value);
    const out = document.getElementById("mt_out");

    if (!n1 || !n2){
        out.className = "alert alert-warning mb-0";
        out.textContent = `⚠️ Vul twee getallen in`;
        return;
    }

    const resultaat = bewerking(n1, n2);

    out.className = "alert alert-success mb-0";
    out.textContent = `Resultaat: ${n1} ${teken} ${n2} = ${resultaat}`;
};

// Event
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("mt_add").addEventListener("click", () => verwerkSom(telOp, '+'));
    document.getElementById("mt_sub").addEventListener("click", () => verwerkSom(trekAf, '−'));
    document.getElementById("mt_mul").addEventListener("click", () => verwerkSom(vermenigvuldig, '×'));
    document.getElementById("mt_div").addEventListener("click", () => verwerkSom(deel, '÷'));
});