// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

// Eigen JS

// Elements
const inputCm = document.querySelector("#uc_cm");
const btnToM = document.querySelector("#uc_to_m");
const btnToIn = document.querySelector("#uc_to_in");
const badgeM = document.querySelector("#uc_m");
const badgeIn = document.querySelector("#uc_in");

// Helper function to validate input
function getCmValue() {
    const cm = parseFloat(inputCm.value);

    // Check for invalid input (NaN or < 0)
    if (isNaN(cm) || cm < 0) {
        badgeM.textContent = "ongeldig";
        badgeIn.textContent = "ongeldig";
        return null;
    }

    return cm;
}

btnToM.addEventListener("click",() => {
    const cm = getCmValue();
    if (cm === null) return;

    const meters = (cm / 100).toFixed(2);
    badgeM.textContent = meters;
})

// Convert cm → inch
btnToIn.addEventListener("click", () => {
    const cm = getCmValue();
    if (cm === null) return;

    const inches = (cm / 2.54).toFixed(2);
    badgeIn.textContent = inches;
});