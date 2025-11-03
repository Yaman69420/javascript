// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js
//function naam(parameter){
// return resultaat
//}

// naam(waarde)

function bepaalfruitInfo(fruit) {
    const input = fruit.toLowerCase()

    if (input === "appel") return { text: "Je koos appel", emoji: "🍎" };
    if (input === "banaan") return { text: "Je koos banaan", emoji: "🍌" };

    return { text: "Onbekende fruit", emoji: '❓' };
}

// Impure function (DOM)
function toonfruit() {
    const inp = document.getElementById("nf_input");
    const out = document.getElementById("nf_text");
    const box = document.getElementById("nf_box");

    const waarde = inp.value.trim();

    if (!waarde) {
        out.className = "alert alert-warning mb-2";
        out.textContent = "⚠️ Geef een fruit in";
        box.style.background = "#f8f9fa";
        box.textContent = "Geen fruit";
        return;
    }

    const resultaat = bepaalfruitInfo(waarde);

    if (!resultaat.emoji) {
        out.className = "alert alert-danger mb-2";
        out.textContent = resultaat.text;
        box.style.background = "#f8f9fa";
        box.textContent = "Onbekend";
        return;
    }

    out.className = "alert alert-success mb-2";
    out.textContent = resultaat.text;
    box.style.background = resultaat.emoji;
    box.textContent = resultaat.emoji.toUpperCase();
}

// Event koppeling
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("nf_btn")
        ?.addEventListener("click", toonfruit);
});