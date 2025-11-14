// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js
// ---------------------------------------------
// Hoofdstuk 20: ES6 Classes + extends + super
// ---------------------------------------------

class Dier {
    constructor(name, soort) {
        this.name = name;
        this.soort = soort;
    }

    speak() {
        return `${this.name} is een ${this.soort}`;
    }
}


const clsDieren = [];

function addClassDier() {
    const name = document.getElementById("cls_name").value.trim();
    const soort = document.getElementById("cls_soort").value.trim();
    const list = document.getElementById("cls_list");

    if (!name || !soort) return;

    clsDieren.push(new Dier(name, soort));

    list.innerHTML = clsDieren
        .map(d => `<li class="list-group-item">${d.speak()}</li>`)
        .join("");
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("cls_btn")
        ?.addEventListener("keydown", (e) => {
            if(e.key === "Enter") {
                addClassDier()
            }
        });
});