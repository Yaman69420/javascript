// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

// Eigen JS
const telOp = (kg, m) => kg / (m * m); // BMI = gewicht / (m × m)
// UI handler (arrow + block body)
const verwerkSom = () => {
    const kg = Number(document.getElementById("bmi_w").value);
    const cm = Number(document.getElementById("bmi_h").value);
    const out = document.getElementById("bmi_out");
    const m = cm / 100
    if (!kg || !m){
        out.className = "alert alert-warning mb-0";
        out.textContent = `⚠️ Vul geldige waarden in`;
        return;
    }

    const resultaat = telOp(kg, m);

    if(resultaat < 18.5) {
        out.className = "alert alert-primary mb-0";
        out.textContent = `BMI = ${resultaat.toFixed(2)} -- Categorie: Ondergewicht`;
    }
    else if(resultaat >= 30) {
        out.className = "alert alert-danger mb-0";
        out.textContent = `BMI = ${resultaat.toFixed(2)} -- Categorie: Overgewicht`;
    }
    else {
        out.className = "alert alert-success mb-0";
        out.textContent = `BMI = ${resultaat.toFixed(2)} -- Categorie: Gezond gewicht`;
    }

};

// Event
    document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("bmi_btn").addEventListener("click", verwerkSom);});