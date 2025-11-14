// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

// Eigen JS
// Pure function (Calculation)
// Calculates the new price. This function does NOT interact with the DOM [2].
const berekenNieuwePrijs = (prijs, korting) => {
    // Formula: Nieuwe prijs = prijs × (1 − korting / 100) [3]
    return prijs * (1 - korting / 100);
};

// Impure function (UI Handler, Validation, and Output) [2]
const verwerkKorting = () => {
    const prijs = Number(document.getElementById("price").value);
    const korting = Number(document.getElementById("discount").value);
    const out = document.getElementById("discount_out");

    // 1. Validation Check [1]
    if (isNaN(prijs) || isNaN(korting) || prijs <= 0 || korting < 0 || korting > 100) {
        // Error state: Yellow alert and required text [1]
        out.className = "alert alert-warning mb-0";
        out.textContent = "Vul een geldige prijs en korting in (0–100%)";
        return;
    }

    // 2. Calculation (using the Pure Function)
    const nieuwePrijs = berekenNieuwePrijs(prijs, korting);

    // 3. Formatting and Output [3]
    // Round result to two decimals [3]. We use toFixed(2) [8].
    // Note: In European notation (required for "€85,00"), the decimal separator is a comma.
    const prijsTekst = nieuwePrijs.toFixed(2).replace('.', ',');

    // Success state: Green alert [3]
    out.className = "alert alert-success mb-0";

    // Output required format using Template Literals [3, 9]
    out.textContent = `Nieuwe prijs: €${prijsTekst} (Korting: ${korting}%)`;
};

// Event binding (Impure Function, must run after DOM is fully loaded) [4, 10]
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("discount_btn")?.addEventListener("click", verwerkKorting);
});
