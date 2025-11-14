// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js

const dagen = ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"];
function berekenLeeftijd(dag, maand, jaar) {
    const vandaag = new Date();
    const datum = new Date(jaar, maand - 1, dag);

    let leeftijd = vandaag.getFullYear() - datum.getFullYear();
    const maandVerschil = vandaag.getMonth() - datum.getMonth();

    if (maandVerschil < 0 || (maandVerschil === 0 && vandaag.getDate() < geboortedatum.getDate())) {
        leeftijd--;
    }
        const weekdag = datum.getDay();
    return {
        leeftijd,weekdag
    };
}


function toonLeeftijd(e) {
    e.preventDefault();

    const dag = document.getElementById("dob_day").value.trim();
    const maand = document.getElementById("dob_month").value.trim();
    const jaar = document.getElementById("dob_year").value.trim();
    const out = document.getElementById("dob_out");

    if (!dag || !maand || !jaar || isNaN(dag) || isNaN(maand) || isNaN(jaar)) {
        out.className = "alert alert-danger mb-0";
        out.textContent = "Geef een geldige datum in (dag, maand, jaar)";
        return;
    }

    const resultaat = berekenLeeftijd(Number(dag), Number(maand), Number(jaar));

    out.className = "alert alert-success mb-0";
    out.textContent = `Je bent ${resultaat.leeftijd} jaar, geboren op een ${dagen[resultaat.weekdag]}.`;
}
    document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("dob_btn")?.addEventListener("click", toonLeeftijd);
});