// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js
// Lege array om namen op te slaan
// Lege array om namen op te slaan
/*
    We bewaren alle taken in een array.
    Elke keer de gebruiker een taak toevoegt komt die in deze array terecht.
    Daarna tonen we die taken op het scherm.
*/
// ----------------------
// Hoofdstuk 2: Functions
// Oefening H2-A — Scope Lab
// ----------------------
document.addEventListener('DOMContentLoaded', () => {
    // UI refs
    const btnGlobal = document.getElementById('sc_global');
    const btnLocal  = document.getElementById('sc_local');
    const statusBad = document.getElementById('sc_status');
    const listBox   = document.getElementById('sc_vars');

    // ---------- PURE FUNCTIES (LOGICA) ----------
    // Leveren enkel data (strings) terug, geen DOM manipulatie

    // Simuleer wat zichtbaar is na een blok binnen dezelfde functie
    function globalData() {
        // In een echte demo zou je var/let/const in blokken zetten.
        // Voor het Functions-hoofdstuk volstaat de correcte uitkomst-lijst.
        return [
            'var in functie: zichtbaar',
            'let in functie: zichtbaar',
            'const in functie: zichtbaar',
            'var in blok: zichtbaar',
            'let in blok: niet zichtbaar',
            'const in blok: niet zichtbaar'
        ];
    }

    // Toon dat let/const block-scoped zijn en buiten het blok niet beschikbaar
    function localData() {
        return [
            'var in blok: zichtbaar binnen functie',
            'let in blok: niet zichtbaar buiten blok',
            'const in blok: niet zichtbaar buiten blok'
        ];
    }

    // Hulpfunctie: maak <li> lijst in één HTML-string
    function makeListHTML(items) {
        var html = '';
        for (var i = 0; i < items.length; i++) {
            html += '<li class="list-group-item">' + items[i] + '</li>';
        }
        return html;
    }

    // ---------- IMPURE FUNCTIES (UI) ----------

    function runGlobal() {
        // status badge
        statusBad.className = 'badge text-bg-primary';
        statusBad.textContent = 'global uitgevoerd';

        // lijst vullen
        var items = globalData();
        listBox.innerHTML = makeListHTML(items);
    }

    function runLocal() {
        // status badge
        statusBad.className = 'badge text-bg-info';
        statusBad.textContent = 'local uitgevoerd';

        // lijst vullen
        var items = localData();
        listBox.innerHTML = makeListHTML(items);
    }

    // Events koppelen
    btnGlobal.addEventListener('click', runGlobal);
    btnLocal.addEventListener('click', runLocal);
});

/*
* Wat zie je bij testen

Klik Run global() → badge wordt blauw met “global uitgevoerd” en de lijst bevat 6 regels waarin var ook buiten
* het blok zichtbaar is, let/const niet.

Klik Run local() → badge wordt lichtblauw met “local uitgevoerd” en de lijst verandert naar 3 regels die
* het block-scope verschil benadrukken.

Zo verschillen de lijsten bij beide runs en houd je je netjes aan de Functions-aanpak: pure berekening, impure UI.
* */

function maakGroet(naam){
    return `Hallo ${naam}!`
}

//impure function
function handleGroetClick(){
    const naamInput = document.getElementById('fn_nameInput')
    const output = document.getElementById('fn_output')
    const naam = naamInput.value.trim();

    if(!naam){
        output.className = "alert alert-warning mt-3 mb-0"
        output.textContent = "Geef een naam in!"
        return
    }
    const boodschap = maakGroet(naam)

    output.textContent = boodschap;
    output.className="alert alert-success mt-3 mb-0"
}

//Event koppelen
// document.addEventListener("DOMContentLoaded", () => {
//     document.getElementById('fn_btnGreet')
//         ?.addEventListener("click", handleGroetClick);
// });
document.addEventListener("DOMContentLoaded", () => {
    const btnGreet = document.getElementById('fn_btnGreet')
    btnGreet.addEventListener("click", handleGroetClick);
});

//eigen js
//function naam(parameter){
// return resultaat
//}

// naam(waarde)

// Pure berekening
function berekenVierkant(getal) {
    return getal * getal;
}

// UI handler
function handleVierkant() {
    const inp = document.getElementById('sq_input');
    const out = document.getElementById('sq_output');

    const waarde = Number(inp.value);

    if (!waarde) {
        out.className = "alert alert-warning mt-3 mb-0";
        out.textContent = "⚠️ Geef een getal in!";
        return;
    }

    const resultaat = berekenVierkant(waarde);

    out.className = "alert alert-success mt-3 mb-0";
    out.textContent = `${waarde}² = ${resultaat}`;
}

// Event koppelen
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('sq_btn')
        ?.addEventListener("click", handleVierkant);
});

//eigen js
//function naam(parameter){
// return resultaat
//}

// naam(waarde)

function toonBericht() {
    const binnen = "Ik leef binnen de functie 👀";

    function inner() {
        return `Inner ziet: ${binnen}`;
    }

    return inner();
}

function handleScope() {
    const output = document.getElementById("sc_output");

    //  inner sees outer
    const bericht = toonBericht();

    output.className = "alert alert-success mb-0";
    output.textContent = bericht;

    // try {
    //     // ❌ buiten de functie proberen de variabele te gebruiken
    //     console.log(binnen);
    // } catch (err) {
    //     console.warn("binnen is niet zichtbaar buiten de functie");
    // }
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("sc_btn")
        ?.addEventListener("click", handleScope);
});

//eigen js
//function naam(parameter){
// return resultaat
//}

// naam(waarde)

function geheimBericht() {
    const secret = "Code unlocked 🗝️";

    function leesSecret() {
        return secret;
    }

    return leesSecret();
}

function handleSecret() {
    const out = document.getElementById("sc2_output");
    out.className = "alert alert-success mb-0";
    out.textContent = geheimBericht();
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("sc2_btn")
        ?.addEventListener("click", handleSecret);
});

// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js
//function naam(parameter){
// return resultaat
//}

// naam(waarde)

function bepaalKleurInfo(kleur) {
    const input = kleur.toLowerCase()

    if (input === "rood") return { text: "Je koos rood", color: "red" };
    if (input === "blauw") return { text: "Je koos blauw", color: "blue" };

    return { text: "Onbekende kleur", color: null };
}

// Impure function (DOM)
function toonKleur() {
    const inp = document.getElementById("nf_input");
    const out = document.getElementById("nf_text");
    const box = document.getElementById("nf_box");

    const waarde = inp.value.trim();

    if (!waarde) {
        out.className = "alert alert-warning mb-2";
        out.textContent = "⚠️ Geef een kleur in";
        box.style.background = "#f8f9fa";
        box.textContent = "Geen kleur";
        return;
    }

    const resultaat = bepaalKleurInfo(waarde);

    if (!resultaat.color) {
        out.className = "alert alert-danger mb-2";
        out.textContent = resultaat.text;
        box.style.background = "#f8f9fa";
        box.textContent = "Onbekend";
        return;
    }

    out.className = "alert alert-success mb-2";
    out.textContent = resultaat.text;
    box.style.background = resultaat.color;
    box.textContent = resultaat.color.toUpperCase();
}

// Event koppeling
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("nf_btn")
        ?.addEventListener("click", toonKleur);
});

//eigen js
//function naam(parameter){
// return resultaat
//}

// naam(waarde)

function bepaalFruit(naam) {
    const f = naam.toLowerCase();

    if (f === "appel") return { text: "Je koos appel", emoji: "🍎" };
    if (f === "banaan") return { text: "Je koos banaan", emoji: "🍌" };

    return { text: "Onbekend fruit", emoji: "❓" };
}

function toonFruit() {
    const inp = document.getElementById("fr_input");
    const txt = document.getElementById("fr_text");
    const box = document.getElementById("fr_box");

    const waarde = inp.value.trim();

    if (!waarde) {
        txt.className = "alert alert-warning mb-2";
        txt.textContent = "⚠️ Vul een fruitsoort in!";
        box.textContent = "❓";
        return;
    }

    const res = bepaalFruit(waarde);

    txt.className = "alert alert-success mb-2";
    txt.textContent = res.text;
    box.textContent = res.emoji;
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("fr_btn")
        ?.addEventListener("click", toonFruit);
});


//eigen js
// ----------------------------------
// Hoofdstuk 5: Template Literals
// ----------------------------------

// Pure function
function maakWelkomstZin(naam, leeftijd) {
    return `Welkom ${naam}! Jij bent ${leeftijd} jaar oud.`;
}

// UI handler
function toonWelkomstZin() {
    const naam = document.getElementById("tl_name").value.trim();
    const leeftijd = document.getElementById("tl_age").value.trim();
    const out = document.getElementById("tl_output");

    if (!naam || !leeftijd) {
        out.className = "alert alert-warning mb-0";
        out.textContent = `⚠️ Vul naam en leeftijd in`;
        return;
    }

    const tekst = maakWelkomstZin(naam, leeftijd);

    out.className = "alert alert-success mb-0";
    out.textContent = tekst;
}

// Event
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("tl_btn")
        ?.addEventListener("click", toonWelkomstZin);
});


//eigen js

//
// function optellen(a,b){
//     return a+b
// }
//
// const optellen = optellen(5,7)
//
// //es6
//
// const optellen = (a,b) =>{
//     return a+b
// }
//
// const optellen = (a,b) => a+b
//
// function hallo(){
//     return 'hallo'
// }
//
// const hallo = hallo();
//
// const hallo = () => 'hallo'

//eigen js
const telOp = (a, b) => a + b;

// UI handler (arrow + block body)
const verwerkSom = () => {
    const n1 = Number(document.getElementById("af_num1").value);
    const n2 = Number(document.getElementById("af_num2").value);
    const out = document.getElementById("af_out");

    if (!n1 || !n2) {
        out.className = "alert alert-warning mb-0";
        out.textContent = `⚠️ Vul twee getallen in`;
        return;
    }

    const resultaat = telOp(n1, n2);

    out.className = "alert alert-success mb-0";
    out.textContent = `Resultaat: ${n1} + ${n2} = ${resultaat}`;
};

// Event
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("af_btn")
        ?.addEventListener("click", verwerkSom);
});

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
    //manier 1
    // if (isEven(inp)) {
    //     out.className = "alert alert-success mb-0";
    //     out.textContent = `${inp} is EVEN`;
    // } else {
    //     out.className = "alert alert-danger mb-0";
    //     out.textContent = `${inp} is ONEVEN ❌`;
    // }

    //manier 2
    // const even = isEven(inp);
    //
    // out.className = even
    //     ? "alert alert-success mb-0"
    //     : "alert alert-danger mb-0";
    //
    // out.textContent = even
    //     ? `${inp} is EVEN`
    //     : `${inp} is ONEVEN ❌`

    //manier 3
    const even = isEven(inp);
    ev_out.className = `alert ${even ? "alert-success" : "alert-danger"} mb-0`;
    ev_out.textContent = `${inp} is ${even ? "EVEN" : "ONEVEN ❌"}`;
};

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("ev_btn")
        ?.addEventListener("click", checkEven);
});

//eigen js
// Lege array om namen op te slaan
const namen = [];

// Pure functie -> maakt lijst HTML
function maakLijstHTML(items) {
    return items.map(item => `<li class="list-group-item">${item}</li>`).join("");
}

// UI handler
function voegNaamToe() {
    const inp = document.getElementById("arr_name");
    const lijst = document.getElementById("arr_list");
    const count = document.getElementById("arr_count");

    const naam = inp.value.trim();

    if (!naam) {
        alert("⚠️ Geef een naam in!");
        return;
    }

    // voeg toe aan array
    namen.push(naam);

    // UI updaten
    lijst.innerHTML = maakLijstHTML(namen);
    count.textContent = namen.length;

    // veld leegmaken
    inp.value = "";
}

// Event listener
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("arr_btn")
        ?.addEventListener("click", voegNaamToe);
});

//eigen js
// Lege array om namen op te slaan
// Lege array om namen op te slaan
/*
    We bewaren alle taken in een array.
    Elke keer de gebruiker een taak toevoegt komt die in deze array terecht.
    Daarna tonen we die taken op het scherm.
*/
const taken = [];

// Pure functie -> maakt lijst HTML
function maakLijstHTML(items) {
//     <p className="badge bg-primary py-2 px-3">taak 1</p>
    return items.map(item => `<p class="badge bg-primary py-2 px-3 me-1">${item}</p>`).join("");
}

// UI handler
function voegTaakToe() {
    const inp = document.getElementById("arr_taak");
    const lijst = document.getElementById("arr_list");
    const count = document.querySelector(".arr_count");

    const taak = inp.value.trim();

    if (!taak) {
        alert("⚠️ Geef een taak in!");
        return;
    }

    // voeg toe aan array
    taken.push(taak);

    // UI updaten
    lijst.innerHTML = maakLijstHTML(taken);
    count.textContent = taken.length;

    // veld leegmaken
    inp.value = "";
}

// Event listener
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("arr_btn")
        ?.addEventListener("click", voegTaakToe);
});

//eigen js
// Lege array om namen op te slaan
// Lege array om namen op te slaan
/*
    We bewaren alle taken in een array.
    Elke keer de gebruiker een taak toevoegt komt die in deze array terecht.
    Daarna tonen we die taken op het scherm.
*/
// ----------------------------------
// Hoofdstuk 8: Root Nodes
// ----------------------------------

function plaatsBerichtInBody() {
    // selecteer de body
    const bodyNode = document.body;

    // maak een nieuw element
    const p = document.createElement("p");
    p.textContent = "Bericht toegevoegd via root node! ";
    p.className = "text-center mt-2 text-success fw-bold";

    // voeg toe aan body
    bodyNode.appendChild(p);
}

function veranderAchtergrond() {
    const htmlNode = document.documentElement; // <html>

    // lichte highlight
    htmlNode.style.background = "#e6f3ff";
}

function toonFeedback(tekst) {
    const out = document.getElementById("rn_output");
    out.className = "alert alert-success mb-0";
    out.textContent = tekst;
}

// Event listeners
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("rn_btnMessage")
        ?.addEventListener("click", () => {
            plaatsBerichtInBody();
            toonFeedback("Bericht toegevoegd aan body ");
        });

    document.getElementById("rn_btnColor")
        ?.addEventListener("click", () => {
            veranderAchtergrond();
            toonFeedback("Achtergrond aangepast via <html> node 🎨");
        });
});

//eigen js
// Lege array om namen op te slaan
// Lege array om namen op te slaan
/*
    We bewaren alle taken in een array.
    Elke keer de gebruiker een taak toevoegt komt die in deze array terecht.
    Daarna tonen we die taken op het scherm.
*/
// ----------------------------------
// Hoofdstuk 8: Root Nodes
// ----------------------------------

function activeerDarkMode() {
    document.body.style.background = "#222";
    document.body.style.color = "#fff";
}

function activeerLightMode() {
    document.body.style.background = "#fff";
    document.body.style.color = "#000";
}

function toonStatus(msg) {
    const out = document.getElementById("dm_status");
    out.className = "alert alert-success mb-0";
    out.textContent = msg;
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("dm_on")
        ?.addEventListener("click", () => {
            activeerDarkMode();
            toonStatus("Dark mode actief 🌙");
        });

    document.getElementById("dm_off")
        ?.addEventListener("click", () => {
            activeerLightMode();
            toonStatus("Light mode actief ☀️");
        });
});

//eigen js
// --------------------------------------
// Hoofdstuk 12: DOM Selectors
// --------------------------------------

function filterNamen() {
    const value = document.getElementById("sel_input").value.toLowerCase();
    const items = document.querySelectorAll(".naam-item"); // NodeList

    items.forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(value) ? "block" : "none";
    });
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("sel_input")
        ?.addEventListener("keyup", filterNamen);
});

//eigen js
// --------------------------------------
// Hoofdstuk 12: DOM Selectors
// --------------------------------------
function setColor(color) {
    const boxes = document.querySelectorAll(".kleur-box");
    boxes.forEach(box => box.style.background = color);
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("ks_red")?.addEventListener("click", () => setColor("red"));
    document.getElementById("ks_blue")?.addEventListener("click", () => setColor("blue"));
    document.getElementById("ks_green")?.addEventListener("click", () => setColor("green"));
});
//eigen js
// --------------------------------------
// Hoofdstuk 12: DOM Selectors
// --------------------------------------
function updateChildCount() {
    const container = document.querySelector(".card-body");
    const count = container.children.length;
    document.getElementById("d13_count").textContent = count;
}

// Event binding
document.addEventListener("DOMContentLoaded", () => {
    updateChildCount();

    document.getElementById("d13_focusName")
        ?.addEventListener("click", () => {
            document.getElementById("d13_name").focus();
        });

    document.getElementById("d13_focusEmail")
        ?.addEventListener("click", () => {
            document.getElementById("d13_email").focus();
        });
});


//eigen js
function updateFTCount() {
    const body = document.getElementById("ft_body");
    document.getElementById("ft_count").textContent = body.children.length;
}

document.addEventListener("DOMContentLoaded", () => {
    const inp = document.getElementById("ft_input");

    updateFTCount();

    inp.addEventListener("focus", () => {
        inp.style.border = "2px solid blue";
    });

    inp.addEventListener("blur", () => {
        inp.style.border = "1px solid #ccc";
    });

    document.getElementById("ft_btn")?.addEventListener("click", () => {
        inp.focus();
    });
});


//eigen js
function toggleHighlight() {
    const boxes = document.querySelectorAll(".cl-box");
    boxes.forEach(box => box.classList.toggle("x"));
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("cl_toggle")
        ?.addEventListener("click", toggleHighlight);
});


//eigen js
function toggleDarkMode() {
    const body = document.body;
    const btn = document.getElementById("dm2_btn");
    const status = document.getElementById("dm2_status");

    const isDark = body.classList.toggle("dark-mode");

    if (isDark) {
        btn.textContent = "Light mode ☀️";
        status.className = "alert alert-success mb-0";
        status.textContent = "Dark mode actief 🌙";
    } else {
        btn.textContent = "Dark mode 🌙";
        status.className = "alert alert-secondary mb-0";
        status.textContent = "Light mode actief ☀️";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("dm2_btn")
        ?.addEventListener("click", toggleDarkMode);
});



//eigen js
function updatePreview() {
    const name = document.getElementById("ev_name").value;
    const preview = document.getElementById("ev_preview");

    if (name.trim() === "") {
        preview.className = "alert alert-secondary mb-2";
        preview.textContent = "Wacht op input…";
    } else {
        preview.className = "alert alert-info mb-2";
        preview.textContent = `Hallo ${name}! 👋`;
    }
}

function handleSubmit(event) {
    event.preventDefault(); // stop page reload

    const name = document.getElementById("ev_name").value.trim();
    const status = document.getElementById("ev_status");


    if (!name) {
        status.className = "alert alert-danger mb-0 mt-3";
        status.textContent = "❌ Vul een naam in";
        return;
    }

    status.className = "alert alert-success mb-0 mt-3";
    status.textContent = ` Formulier verstuurd voor ${name}`;
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("ev_name")?.addEventListener("input", updatePreview);
    document.getElementById("ev_form")?.addEventListener("submit", handleSubmit);
});



//eigen js
function isValidEmail(email) {
    return email.includes("@") && email.includes(".") && !email.includes(" ");
}

function updateEmailPreview() {
    const value = document.getElementById("em_input").value;
    const preview = document.getElementById("em_preview");

    if (isValidEmail(value)) {
        preview.className = "alert alert-success mb-2";
        preview.textContent = " Geldig emailadres";
    } else {
        preview.className = "alert alert-warning mb-2";
        preview.textContent = "⚠️ Ongeldig emailadres";
    }
}

function handleEmailSubmit(e) {
    e.preventDefault();

    const val = document.getElementById("em_input").value;
    const status = document.getElementById("em_status");

    if (!isValidEmail(val)) {
        status.className = "alert alert-danger mb-0 mt-3";
        status.textContent = "❌ Emailadres ongeldig";
        return;
    }

    status.className = "alert alert-success mb-0 mt-3";
    status.textContent = `Email geaccepteerd: ${val}`;
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("em_input")?.addEventListener("input", updateEmailPreview);
    document.getElementById("em_form")?.addEventListener("submit", handleEmailSubmit);
});

//eigen js
document.addEventListener("DOMContentLoaded", () => {

    // 1) Link blokkeren
    document.getElementById("ev_link")
        ?.addEventListener("click", (e) => {
            e.preventDefault();
            document.getElementById("ev_msg2").textContent =
                "🚫 Navigatie geblokkeerd door JS";
        });

    // 2) Hover effects
    const box = document.getElementById("ev_box");

    box.addEventListener("mouseover", () => {
        box.classList.add("bg-warning");
        box.textContent = "Hover actief!";
    });

    box.addEventListener("mouseleave", () => {
        box.classList.remove("bg-warning");
        box.textContent = "Hover over mij 🖱️";
    });

    // 3) Form prevent + feedback
    document.getElementById("ev_form2")
        ?.addEventListener("submit", (e) => {
            e.preventDefault();

            const name = document.getElementById("ev_input2").value.trim();
            const msg = document.getElementById("ev_msg2");

            if (!name) {
                msg.className = "alert alert-danger mt-3 mb-0";
                msg.textContent = "❌ Vul je naam in";
                return;
            }

            msg.className = "alert alert-success mt-3 mb-0";
            msg.textContent = ` Form verzonden voor ${name} (zonder reload!)`;
        });
});

//eigen js
document.addEventListener("DOMContentLoaded", () => {
    const box = document.getElementById("rb_box");
    const msg = document.getElementById("rb_msg");

    // Hover
    box.addEventListener("mouseover", () => {
        box.classList.remove("bg-light");
        box.style.setProperty("background-color", "lightgreen", "important");
        msg.textContent = "👋 Hallo!";
    });

    // Verlaten
    box.addEventListener("mouseleave", () => {
        box.classList.add("bg-light");
        box.style.removeProperty("background-color");
        msg.textContent = "😭 Kom terug!";
    });

    // Klik
    box.addEventListener("click", () => {
        box.style.setProperty("border", "3px solid black", "important");
        msg.textContent = "🖱️ Je klikt!";
    });

    // Dubbelklik
    box.addEventListener("dblclick", () => {
        box.style.setProperty("border", "3px solid red", "important");
        msg.textContent = "⚡ Dubbelklik wow!";
    });
});


//eigen js
const taken2 = [];

function renderTodos() {
    const list = document.getElementById("todo_list2");

    list.innerHTML = taken2
        .map((task, index) => `
      <li class="list-group-item d-flex justify-content-between align-items-center ${task.done ? "todo-done" : ""}">
        <span class="todo-text" data-idx="${index}">
           ${task.text}
        </span>
        <button class="btn btn-sm btn-danger todo-del" data-idx="${index}">X</button>
      </li>
    `)
        .join("");

}

function addTodo(e) {
    e.preventDefault();

    const inp = document.getElementById("todo_input2");
    const msg = document.getElementById("todo_msg2");
    const text = inp.value.trim();

    if (!text) {
        msg.className = "alert alert-danger mb-3";
        msg.textContent = "❌ Vul een taak in";
        return;
    }

    taken2.push({ text, done: false });

    msg.className = "alert alert-success mb-3";
    msg.textContent = ` Taak toegevoegd: ${text}`;

    inp.value = "";
    renderTodos();
}

function handleTodoClick(e) {
    console.log(e)
    const idx = e.target.dataset.idx;

    // Toggle done
    if (e.target.classList.contains("todo-text")) {

        taken2[idx].done = !taken2[idx].done;
        renderTodos();
        return;
    }

    // Delete
    if (e.target.classList.contains("todo-del")) {
        taken2.splice(idx, 1);
        renderTodos();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("todo_form2")?.addEventListener("submit", addTodo);
    document.getElementById("todo_list2")?.addEventListener("click", handleTodoClick);
});

// eigen js
// ---------------------------------------------
// Todo App – data & state
// ---------------------------------------------
// We bewaren alle taken in een array 'taken2'.
// Elke taak is een object met 2 eigenschappen:
// - text: de taakbeschrijving
// - done: of de taak al voltooid is (true/false)
// Daarnaast houden we ook bij welke filter actief is:
// - 'all', 'open' of 'done'
const taken2 = []
let currentFilter2 = 'all'

// ---------------------------------------------
// Helpers – functies die de UI updaten
// ---------------------------------------------

// updateFilterButtons()
// Zorgt ervoor dat de juiste filterknop actief (btn-primary) is
// en de andere knoppen 'outline' blijven (btn-outline-primary).

//Object.entries() maakt van een object een array van arrays,
// waarin elk binnenste array bestaat uit twee waarden:
// [key, value].
// Bijvoorbeeld:
// Object.entries({ a: 10, b: 20 })
// geeft:
// [ ["a", 10], ["b", 20] ]
// In ons geval:
// Object.entries(map)
// geeft:
// [
//   ["all", btnAll],
//   ["open", btnOpen],
//   ["done", btnDone]
// ]
function updateFilterButtons() {
    const btnAll = document.getElementById('todo_filter_all')
    const btnOpen = document.getElementById('todo_filter_open')
    const btnDone = document.getElementById('todo_filter_done')

    const map = { all: btnAll, open: btnOpen, done: btnDone }

    Object.entries(map).forEach(([key, btn]) => {
        if (!btn) return
        btn.classList.remove('btn-primary', 'btn-outline-primary')

        if (key === currentFilter2) {
            btn.classList.add('btn-primary')          // actieve knop
        } else {
            btn.classList.add('btn-outline-primary')  // niet-actief
        }
    })
}

// renderTodos()
// Hertekent de lijst met taken in de <ul>.
// Toont enkel taken die passen bij de gekozen filter
// (alle, open of voltooid) en werkt ook de teller bij.
function renderTodos() {
    const list = document.getElementById('todo_list2')
    const countSpan = document.getElementById('todo_count_open')

    if (!list) return

    // Aantal open taken berekenen
    const openCount = taken2.filter(t => !t.done).length
    if (countSpan) {
        countSpan.textContent = openCount
    }

    // Lijst opbouwen op basis van huidige filter
    const rows = []
    taken2.forEach((task, index) => {
        if (currentFilter2 === 'open' && task.done) return
        if (currentFilter2 === 'done' && !task.done) return

        rows.push(`
      <li class="list-group-item d-flex justify-content-between align-items-center ${task.done ? 'todo-done' : ''}">
        <span class="todo-text" data-idx="${index}">
          ${task.text}
        </span>
        <button class="btn btn-sm btn-danger todo-del" data-idx="${index}">X</button>
      </li>
    `)
    })

    list.innerHTML = rows.join('')
}

// ---------------------------------------------
// Event handlers – reageren op acties van de gebruiker
// ---------------------------------------------

// addTodo()
// Wordt uitgevoerd wanneer het formulier wordt verzonden.
// Controleert of er tekst is ingevuld, maakt een nieuwe taak aan
// en toont feedback in de alertbox.
function addTodo(e) {
    e.preventDefault()

    const inp = document.getElementById('todo_input2')
    const msg = document.getElementById('todo_msg2')
    if (!inp || !msg) return

    const text = inp.value.trim()

    if (!text) {
        msg.className = 'alert alert-danger mb-3'
        msg.textContent = '❌ Vul een taak in'
        return
    }

    // Nieuwe taak toevoegen aan array
    taken2.push({ text, done: false })

    msg.className = 'alert alert-success mb-3'
    msg.textContent = `Taak toegevoegd: ${text}`

    inp.value = ''
    renderTodos()
}

// handleTodoClick()
// Luistert naar clicks in de lijst met taken.
// - Als je op de tekst klikt: taak toggelen (done ↔ niet done)
// - Als je op de X-knop klikt: taak verwijderen
function handleTodoClick(e) {
    const target = e.target
    const idx = target.dataset.idx

    if (idx === undefined) return

    // Klik op tekst → togglen
    if (target.classList.contains('todo-text')) {
        taken2[idx].done = !taken2[idx].done
        renderTodos()
        return
    }

    // Klik op X → taak verwijderen
    if (target.classList.contains('todo-del')) {
        taken2.splice(idx, 1)
        renderTodos()
    }
}

// clearDone()
// Verwijdert alle taken die voltooid zijn (done = true)
// uit de array en hertekent daarna de lijst.
function clearDone() {
    for (let i = taken2.length - 1; i >= 0; i--) {
        if (taken2[i].done) {
            taken2.splice(i, 1)
        }
    }
    renderTodos()
}

// ---------------------------------------------
// Init – start alles op bij DOMContentLoaded
// ---------------------------------------------
// Zodra het document geladen is, koppelen we alle eventlisteners:
// - formulier → addTodo()
// - lijst → handleTodoClick()
// - filterknoppen → filter aanpassen
// - clear-knop → clearDone()
// en we tekenen meteen de initiële UI.
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('todo_form2')?.addEventListener('submit', addTodo)
    document.getElementById('todo_list2')?.addEventListener('click', handleTodoClick)

    // Filterknoppen
    document.getElementById('todo_filter_all')?.addEventListener('click', () => {
        currentFilter2 = 'all'
        updateFilterButtons()
        renderTodos()
    })

    document.getElementById('todo_filter_open')?.addEventListener('click', () => {
        currentFilter2 = 'open'
        updateFilterButtons()
        renderTodos()
    })

    document.getElementById('todo_filter_done')?.addEventListener('click', () => {
        currentFilter2 = 'done'
        updateFilterButtons()
        renderTodos()
    })

    // Clear-done knop
    document.getElementById('todo_clear_done')?.addEventListener('click', clearDone)

    // Starttoestand tonen
    updateFilterButtons()
    renderTodos()
});
//eigen js
function berekenLeeftijd(jaar) {
    const huidigJaar = new Date().getFullYear();
    return huidigJaar - jaar;
}

function toonLeeftijd(e) {
    e.preventDefault();

    const input = document.getElementById("age_input").value.trim();
    const out = document.getElementById("age_output");

    if (!input || isNaN(input)) {
        out.className = "alert alert-danger mb-0";
        out.textContent = "❌ Geef een geldig jaar in";
        return;
    }

    const leeftijd = berekenLeeftijd(Number(input));

    const gebruiker = {
        geboorteJaar: Number(input),
        leeftijd: leeftijd
    };

    out.className = "alert alert-success mb-0";
    out.textContent = ` Je bent ongeveer ${gebruiker.leeftijd} jaar oud (geboren in ${gebruiker.geboorteJaar})`;
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("age_form")?.addEventListener("submit", toonLeeftijd);
});

//eigen js
function berekenLeeftijdJaar(datum) {
    const nu = new Date();
    let leeftijd = nu.getFullYear() - datum.getFullYear();

    const isVoorVerjaardag =
        nu.getMonth() < datum.getMonth() ||
        (nu.getMonth() === datum.getMonth() && nu.getDate() < datum.getDate());

    if (isVoorVerjaardag) leeftijd--;

    return leeftijd;
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("dob_btn")?.addEventListener("click", () => {
        const d = Number(document.getElementById("dob_day").value);
        const m = Number(document.getElementById("dob_month").value);
        const y = Number(document.getElementById("dob_year").value);
        const out = document.getElementById("dob_out");

        if (!d || !m || !y) {
            out.className = "alert alert-danger mb-0";
            out.textContent = "❌ Vul dag, maand en jaar in";
            return;
        }

        const datum = new Date(y, m - 1, d);
        const dagen = ["Zondag","Maandag","Dinsdag","Woensdag","Donderdag","Vrijdag","Zaterdag"];
        const weekday = dagen[datum.getDay()];
        const age = berekenLeeftijdJaar(datum);

        out.className = "alert alert-success mb-0";
        out.textContent = `🎂 Je bent ongeveer ${age} jaar oud en geboren op een ${weekday}`;
    });
});

//eigen js
const users = [];

function User(name, age) {
    this.name = name;
    this.age = age;
    this.info = function() {
        return `${this.name} (${this.age} jaar)`;
    };
}

function addUser() {
    const name = document.getElementById("uc_name").value.trim();
    const age = document.getElementById("uc_age").value.trim();
    const list = document.getElementById("uc_list");

    if (!name || !age) return;

    const user = new User(name, Number(age));
    users.push(user);

    list.innerHTML = users
        .map(u => `<li class="list-group-item">${u.info()}</li>`)
        .join("");
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("uc_btn")
        ?.addEventListener("click", addUser);
});

//eigen js
function Product(name, price) {
    this.name = name;
    this.price = price;
    this.label = function() {
        return `${this.name} — €${this.price.toFixed(2)}`;
    };
}

const products = [];

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("prod_btn")?.addEventListener("click", () => {
        const name = document.getElementById("prod_name").value.trim();
        const price = Number(document.getElementById("prod_price").value);

        if (!name || !price) return;

        const item = new Product(name, price);
        products.push(item);

        document.getElementById("prod_list").innerHTML = products
            .map(p => `<li class="list-group-item">${p.label()}</li>`)
            .join("");
    });
});

//eigen js
// ---------------------------------------------
// Hoofdstuk 20: ES6 Classes + extends + super
// ---------------------------------------------

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    info() {
        return `${this.name} (${this.age} jaar)`;
    }
}

class Admin extends User {
    constructor(name, age) {
        super(name, age);
        this.role = "Admin";
    }

    info() {
        return `[ADMIN] ${super.info()}`;
    }
}

const clsUsers = [];

function addClassUser() {
    const name = document.getElementById("cls_name").value.trim();
    const age = Number(document.getElementById("cls_age").value);
    const role = document.getElementById("cls_role").value;
    const list = document.getElementById("cls_list");

    if (!name || !age) return;

    const user = role === "admin"
        ? new Admin(name, age)
        : new User(name, age);

    clsUsers.push(user);

    list.innerHTML = clsUsers
        .map(u => `<li class="list-group-item">${u.info()}</li>`)
        .join("");
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("cls_btn")
        ?.addEventListener("click", addClassUser);
});

//eigen js
// ---------------------------------------------
// Mini-opdracht: Animal base + Dog child (bonus: Cat)
// ---------------------------------------------
class Animal {
    constructor(name, soort) {
        this.name = name;
        this.soort = soort;
    }
    speak() {
        return `🐾 ${this.name} is een ${this.soort}`;
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name, "hond");
    }
    speak() {
        return `🐶 ${this.name} blaft!`;
    }
}

// Bonus (emoji per dier)
class Cat extends Animal {
    constructor(name) {
        super(name, "kat");
    }
    speak() {
        return `🐱 ${this.name} miauwt!`;
    }
}

const pets = [];

function addPet() {
    const name = document.getElementById("pet_name").value.trim();
    const type = document.getElementById("pet_type").value;
    const list = document.getElementById("pet_list");
    if (!name) return;

    let pet;
    if (type === "hond") pet = new Dog(name);
    else if (type === "kat") pet = new Cat(name);
    else pet = new Animal(name, type);

    pets.push(pet);

    list.innerHTML = pets
        .map(p => `<li class="list-group-item">${p.speak()}</li>`)
        .join("");

    document.getElementById("pet_name").value = "";
    document.getElementById("pet_name").focus();
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("pet_btn")?.addEventListener("click", addPet);
    document.getElementById("pet_name")?.addEventListener("keydown", (e) => {
        if (e.key === "Enter") addPet();
    });
});

//eigen js
// Lege array om namen op te slaan
// Lege array om namen op te slaan
/*
    We bewaren alle taken in een array.
    Elke keer de gebruiker een taak toevoegt komt die in deze array terecht.
    Daarna tonen we die taken op het scherm.
*/
// Pure functions
document.addEventListener('DOMContentLoaded', () => {
    // Elements
    const inpA   = document.getElementById('mt_a');
    const inpB   = document.getElementById('mt_b');
    const out    = document.getElementById('mt_out');

    const btnAdd = document.getElementById('mt_add');
    const btnSub = document.getElementById('mt_sub');
    const btnMul = document.getElementById('mt_mul');
    const btnDiv = document.getElementById('mt_div');

    // Kleine helper binnen deze scope: placeholder weg + tekst tonen
    function show(text) {
        out.className = 'mt-2';         // placeholder-glow vervangen door platte tekst
        out.textContent = text;
    }

    // Validatie: inputs moeten ingevuld zijn (type="number" zorgt al voor numeric)
    function hasEmpty(aVal, bVal) {
        return aVal.trim() === '' || bVal.trim() === '';
    }

    // Ronden tot max 6 decimalen
    function round6(x) {
        return Math.round(x * 1000000) / 1000000;
    }

    // A + B
    btnAdd.addEventListener('click', () => {
        const aVal = inpA.value;
        const bVal = inpB.value;
        if (hasEmpty(aVal, bVal)) {
            show('Ongeldige invoer (vul beide getallen in)');
            return;
        }
        const a = Number(aVal);
        const b = Number(bVal);
        const res = a + b;
        show('Resultaat: ' + round6(res));
    });

    // A − B
    btnSub.addEventListener('click', () => {
        const aVal = inpA.value;
        const bVal = inpB.value;
        if (hasEmpty(aVal, bVal)) {
            show('Ongeldige invoer (vul beide getallen in)');
            return;
        }
        const a = Number(aVal);
        const b = Number(bVal);
        const res = a - b;
        show('Resultaat: ' + round6(res));
    });

    // A × B
    btnMul.addEventListener('click', () => {
        const aVal = inpA.value;
        const bVal = inpB.value;
        if (hasEmpty(aVal, bVal)) {
            show('Ongeldige invoer (vul beide getallen in)');
            return;
        }
        const a = Number(aVal);
        const b = Number(bVal);
        const res = a * b;
        show('Resultaat: ' + round6(res));
    });

    // A ÷ B
    btnDiv.addEventListener('click', () => {
        const aVal = inpA.value;
        const bVal = inpB.value;
        if (hasEmpty(aVal, bVal)) {
            show('Ongeldige invoer (vul beide getallen in)');
            return;
        }
        const a = Number(aVal);
        const b = Number(bVal);
        if (b === 0) {
            show('Delen door 0 kan niet');
            return;
        }
        const res = a / b;
        show('Resultaat: ' + round6(res));
    });
});


//eigen js
// Lege array om namen op te slaan
// Lege array om namen op te slaan
/*
    We bewaren alle taken in een array.
    Elke keer de gebruiker een taak toevoegt komt die in deze array terecht.
    Daarna tonen we die taken op het scherm.
*/
document.addEventListener('DOMContentLoaded', () => {
    const inpCm = document.getElementById('uc_cm');
    const btnToM = document.getElementById('uc_to_m');
    const btnToIn = document.getElementById('uc_to_in');
    const badgeM = document.getElementById('uc_m');
    const badgeIn = document.getElementById('uc_in');

    function invalid() {
        badgeM.textContent = 'ongeldig';
        badgeIn.textContent = 'ongeldig';
    }

    btnToM.addEventListener('click', () => {
        const cmVal = inpCm.value.trim();
        if (cmVal === '') {
            invalid();
            return;
        }

        const cm = Number(cmVal);
        if (cm < 0) {
            invalid();
            return;
        }

        const meter = Number((cm / 100).toFixed(2));
        badgeM.textContent = meter;
    });

    btnToIn.addEventListener('click', () => {
        const cmVal = inpCm.value.trim();
        if (cmVal === '') {
            invalid();
            return;
        }

        const cm = Number(cmVal);
        if (cm < 0) {
            invalid();
            return;
        }

        const inch = Number((cm / 2.54).toFixed(2));
        badgeIn.textContent = inch;
    });
});

//eigen js
// Lege array om namen op te slaan
// Lege array om namen op te slaan
/*
    We bewaren alle taken in een array.
    Elke keer de gebruiker een taak toevoegt komt die in deze array terecht.
    Daarna tonen we die taken op het scherm.
*/
// ----------------------
// Hoofdstuk 2: Functions
// Oefening H2-A — Scope Lab
// ----------------------
document.addEventListener('DOMContentLoaded', () => {
    // UI refs
    const btnGlobal = document.getElementById('sc_global');
    const btnLocal  = document.getElementById('sc_local');
    const statusBad = document.getElementById('sc_status');
    const listBox   = document.getElementById('sc_vars');

    // ---------- PURE FUNCTIES (LOGICA) ----------
    // Leveren enkel data (strings) terug, geen DOM manipulatie

    // Simuleer wat zichtbaar is na een blok binnen dezelfde functie
    function globalData() {
        // In een echte demo zou je var/let/const in blokken zetten.
        // Voor het Functions-hoofdstuk volstaat de correcte uitkomst-lijst.
        return [
            'var in functie: zichtbaar',
            'let in functie: zichtbaar',
            'const in functie: zichtbaar',
            'var in blok: zichtbaar',
            'let in blok: niet zichtbaar',
            'const in blok: niet zichtbaar'
        ];
    }

    // Toon dat let/const block-scoped zijn en buiten het blok niet beschikbaar
    function localData() {
        return [
            'var in blok: zichtbaar binnen functie',
            'let in blok: niet zichtbaar buiten blok',
            'const in blok: niet zichtbaar buiten blok'
        ];
    }

    // Hulpfunctie: maak <li> lijst in één HTML-string
    function makeListHTML(items) {
        var html = '';
        for (var i = 0; i < items.length; i++) {
            html += '<li class="list-group-item">' + items[i] + '</li>';
        }
        return html;
    }

    // ---------- IMPURE FUNCTIES (UI) ----------

    function runGlobal() {
        // status badge
        statusBad.className = 'badge text-bg-primary';
        statusBad.textContent = 'global uitgevoerd';

        // lijst vullen
        var items = globalData();
        listBox.innerHTML = makeListHTML(items);
    }

    function runLocal() {
        // status badge
        statusBad.className = 'badge text-bg-info';
        statusBad.textContent = 'local uitgevoerd';

        // lijst vullen
        var items = localData();
        listBox.innerHTML = makeListHTML(items);
    }

    // Events koppelen
    btnGlobal.addEventListener('click', runGlobal);
    btnLocal.addEventListener('click', runLocal);
});

/*
* Wat zie je bij testen

Klik Run global() → badge wordt blauw met “global uitgevoerd” en de lijst bevat 6 regels waarin var ook buiten
* het blok zichtbaar is, let/const niet.

Klik Run local() → badge wordt lichtblauw met “local uitgevoerd” en de lijst verandert naar 3 regels die
* het block-scope verschil benadrukken.

Zo verschillen de lijsten bij beide runs en houd je je netjes aan de Functions-aanpak: pure berekening, impure UI.
* */

//eigen js
// Lege array om namen op te slaan
// Lege array om namen op te slaan
/*
    We bewaren alle taken in een array.
    Elke keer de gebruiker een taak toevoegt komt die in deze array terecht.
    Daarna tonen we die taken op het scherm.
*/
// ----------------------
// Hoofdstuk 2: Functions
// Oefening H2-B — Shadowing Demo
// ----------------------
document.addEventListener("DOMContentLoaded", () => {

    const inpBase = document.getElementById("sh_base");
    const btnRun  = document.getElementById("sh_run");
    const outList = document.getElementById("sh_out");

    // Pure functie: geeft array van strings terug
    function shadowInfo(base) {
        let x = base;               // buiten block

        {
            let x = base + 5;         // shadow: nieuwe x
            return [
                `buiten block: x = ${base}`,
                `binnen block: x = ${x}`,
                `na block: x = ${base}`
            ];
        }
    }

    // Impure: UI
    function handleShadow() {
        const raw = inpBase.value.trim();
        const base = raw === '' ? 10 : Number(raw);

        const items = shadowInfo(base);

        let html = "";
        for (let i = 0; i < items.length; i++) {
            html += `<li class="list-group-item">${items[i]}</li>`;
        }
        outList.innerHTML = html; // overschrijven
    }

    btnRun.addEventListener("click", handleShadow);
});
//eigen js
// Lege array om namen op te slaan
// Lege array om namen op te slaan
/*
    We bewaren alle taken in een array.
    Elke keer de gebruiker een taak toevoegt komt die in deze array terecht.
    Daarna tonen we die taken op het scherm.
*/
// ------------------------------
// Hoofdstuk 3: Function Scoping
// Oefening H3-A — Formatter Station
// ------------------------------
document.addEventListener('DOMContentLoaded', () => {

    const inp   = document.getElementById('fs_text');
    const btnUp = document.getElementById('fs_upper');
    const btnLo = document.getElementById('fs_lower');
    const btnCa = document.getElementById('fs_cap');
    const list  = document.getElementById('fs_results');

    // Pure: Capitalize
    function capitalize(str) {
        const t = str.trim();
        if (t === '') return '';
        const first = t.charAt(0).toUpperCase();    // eerste letter groot
        const rest  = t.slice(1).toLowerCase();     // rest kleine letters
        return first + rest;
    }

    // UI helper: voeg item toe (max 5)
    function prependItem(text) {
        if (text.trim() === '') return;

        list.innerHTML =
            `<li class="list-group-item">${text}</li>` + list.innerHTML;

        while (list.children.length > 5) {
            list.removeChild(list.lastElementChild);
        }
    }

    // Click handlers
    btnUp.addEventListener('click', () => {
        const v = inp.value;
        if (v.trim() === '') return;
        prependItem(v.toUpperCase());
    });

    btnLo.addEventListener('click', () => {
        const v = inp.value;
        if (v.trim() === '') return;
        prependItem(v.toLowerCase());
    });

    btnCa.addEventListener('click', () => {
        const v = inp.value;
        const c = capitalize(v);
        if (c === '') return;
        prependItem(c);
    });

});

//eigen js

// ------------------------------
// Hoofdstuk 3: Function Scoping
// Oefening H3-B — Slug Maker
// ------------------------------
document.addEventListener('DOMContentLoaded', () => {

    const inp  = document.getElementById('sm_title');
    const slug = document.getElementById('sm_slug');

    // Pure functie: maakt slug van titel
    function makeSlug(title) {
        // lowercase
        let t = title.toLowerCase();

        // trim spaties
        t = t.trim();

        // vervang spaties en underscores door koppeltekens
        t = t.replace(/[\s_]+/g, '-');

        // verwijder alles wat geen letter, cijfer of - is
        t = t.replace(/[^a-z0-9-]/g, '');

        // meerdere - na elkaar -> één -
        t = t.replace(/-+/g, '-');

        // trim koppeltekens aan begin/einde
        t = t.replace(/^-+|-+$/g, '');

        return t;
    }

    // UI handler
    function handleInput() {
        const text = inp.value;
        const s = makeSlug(text);
        slug.textContent = s || '-';
    }

    // Live update
    inp.addEventListener('input', handleInput);
});

//eigen js

// ----------------------------------
// Hoofdstuk 4: Named Functions
// Oefening H4-A — Template Previewer
// ----------------------------------
document.addEventListener('DOMContentLoaded', initTemplatePreviewer);

// ========== IMPURE: entrypoint ==========
function initTemplatePreviewer() {
    // UI refs
    const inpFirst  = document.getElementById('tp_first');
    const inpLast   = document.getElementById('tp_last');
    const inpCity   = document.getElementById('tp_city');
    const pillP1    = document.getElementById('tp_p1');
    const pillP2    = document.getElementById('tp_p2');
    const previewEl = document.getElementById('tp_preview');

    // State
    let currentTpl = 'p1'; // 'p1' | 'p2'

    // Koppelingen
    inpFirst.addEventListener('input', handleInputChange);
    inpLast .addEventListener('input', handleInputChange);
    inpCity .addEventListener('input', handleInputChange);

    pillP1.addEventListener('click', () => handlePillClick('p1'));
    pillP2.addEventListener('click', () => handlePillClick('p2'));

    // Eerste render
    render();

    // ======== IMPURE HANDLERS ========
    function handleInputChange() {
        render();
    }

    function handlePillClick(which) {
        currentTpl = which;
        setActivePill(pillP1, pillP2, which);
        render();
    }

    // ======== IMPURE RENDER ========
    function render() {
        const values = readValues(inpFirst, inpLast, inpCity);
        const msg = makeMessage(currentTpl, values);

        // placeholder weg, platte tekst erin
        previewEl.className = ''; // verwijder placeholder-klassen
        previewEl.textContent = msg;
    }
}

// ========== PURE: logica ==========
function readValues(inpFirst, inpLast, inpCity) {
    // leest DOM (impure in strikte zin), maar behoudt hier voor compactheid van handlers
    return {
        first: inpFirst.value.trim(),
        last:  inpLast.value.trim(),
        city:  inpCity.value.trim()
    };
}

function isComplete(values) {
    return values.first !== '' && values.last !== '' && values.city !== '';
}

function tmplP1(values) {
    // P1: korte zin
    return `Hallo ${values.first} ${values.last} uit ${values.city}!`;
}

function tmplP2(values) {
    // P2: langere zin
    return `${values.first} ${values.last} woont in ${values.city}. Fijn dat je er bent, ${values.first}!`;
}

function makeMessage(templateKey, values) {
    if (!isComplete(values)) return 'Vul alle velden in';

    if (templateKey === 'p1') return tmplP1(values);
    if (templateKey === 'p2') return tmplP2(values);

    return 'Onbekende template';
}

// ========== IMPURE: UI helpers ==========
function setActivePill(p1Btn, p2Btn, which) {
    // active class beheren zoals Bootstrap pills
    if (which === 'p1') {
        p1Btn.className = 'nav-link active';
        p2Btn.className = 'nav-link';
    } else {
        p1Btn.className = 'nav-link';
        p2Btn.className = 'nav-link active';
    }
}
/*
* Een pure functie en een impure functie verschillen doordat ze een ander doel hebben in je code.

---

Pure functie

Doet een berekening, raakt niets anders aan.

| Kenmerk             | Betekenis                                                                        |
| ------------------- | -------------------------------------------------------------------------------- |
| Heeft alleen input  | Gebruikt enkel wat je meegeeft (parameters)                                      |
| Geeft alleen output | Return van een resultaat                                                         |
| Geen bijwerkingen   | Verandert niets in de UI, console, netwerk, database, variabelen buiten zichzelf |
| Altijd voorspelbaar | Met dezelfde input komt altijd dezelfde output                                   |

**Voorbeeld**

function dubbel(x) {
  return x * 2;
}

Zelfde input → zelfde output, altijd.

---

Impure functie

Doet iets met de buitenwereld (bijwerking).

| Kenmerk                             | Betekenis                         |
| ----------------------------------- | --------------------------------- |
| Past dingen aan buiten zichzelf aan | DOM, console, netwerk, opslag…    |
| Geen vaste output nodig             | Hoeft geen return te hebben       |
| Kan onverwachte gevolgen hebben     | Verandering hangt af van omgeving |

Voorbeeld

function toon(tekst) {
  document.getElementById("box").textContent = tekst;
}

Dit verandert de UI, dus dit is impure.

Eenvoudige manier om te onthouden

| Pure                | Impure                     |
| ------------------- | -------------------------- |
| Denkt               | Doet                       |
| Rekent              | Verandert dingen           |
| Returnt             | Update UI / console / data |
| Altijd voorspelbaar | Afhankelijk van omgeving   |

Waarom gebruiken we beide?

* Pure functies houden logica helder en testbaar.
* Impure functies verbinden de logica met de echte wereld (UI).

In deze cursus:

> Pure = berekenen
> Impure = DOM & events

* */

//eigen js

// ----------------------------------
// Hoofdstuk 4: Named Functions
// Oefening H4-B — Initialen Generator
// ----------------------------------
document.addEventListener("DOMContentLoaded", initInitialsGenerator);

// startpunt
function initInitialsGenerator() {
    const inp  = document.getElementById("ig_full");
    const btn  = document.getElementById("ig_make");
    const out  = document.getElementById("ig_out");

    btn.addEventListener("click", () => toonInitialen(inp, out));
}

// ---------- PURE FUNCTION ----------
function maakInitialen(naam) {
    // trimmen & splitsen op spaties
    // | Code                     | Betekenis in gewone taal                         |
    // | ------------------------ | ------------------------------------------------ |
    // | `naam.trim()`            | knipt spaties weg aan het begin en einde         |
    // | `.split(" ")`            | knipt de zin in stukjes waar spaties zitten      |
    // | `.filter(d => d !== "")` | gooit lege stukjes weg (bv. bij dubbele spaties) |

    // Voorbeeld Invoer:
    //     " Tom Van Houtte "
    // trim() → "Tom Van Houtte"
    // split(" ") → ["Tom", "", "Van", "", "Houtte"]
    // filter(...) → ["Tom", "Van", "Houtte"]

    const delen = naam.trim().split(" ").filter(d => d !== "");

    // minstens 2 woorden
    if (delen.length < 2) return "onvolledige naam";

    // eerste letter elk deel → uppercase → met punt
    // | Stap | `i` | `delen[i]` | `delen[i].charAt(0)` | `toUpperCase()` | Toevoegen (`res +=`)         |
    // | ---- | --- | ---------- | -------------------- | --------------- | ---------------------------- |
    // | 1    | 0   | `"Tom"`    | `"T"`                | `"T"`           | `"T."`                       |
    // | 2    | 1   | `"Van"`    | `"V"`                | `"V"`           | `"T." + "V."` → `"T.V."`     |
    // | 3    | 2   | `"Houtte"` | `"H"`                | `"H"`           | `"T.V." + "H."` → `"T.V.H."` |
    let res = "";
    for (let i = 0; i < delen.length; i++) {
        const letter = delen[i].charAt(0).toUpperCase();
        res += letter + ".";
    }
    return res;
}

// ---------- IMPURE FUNCTION ----------
function toonInitialen(inputEl, outputEl) {
    const naam = inputEl.value;

    if (!naam.trim()) {
        outputEl.textContent = "onvolledige naam";
        return;
    }

    const result = maakInitialen(naam);
    outputEl.textContent = result;
}

//eigen js

// ----------------------------------
// Hoofdstuk 5: Template Literals
// Oefening H5-A — Counter Console
// ----------------------------------
document.addEventListener('DOMContentLoaded', () => {
    // UI refs
    const btnInc1 = document.getElementById('cc_inc1');
    const btnInc5 = document.getElementById('cc_inc5');
    const btnDec1 = document.getElementById('cc_dec1');
    const btnReset = document.getElementById('cc_reset');

    const badgeVal = document.getElementById('cc_val');
    const bar = document.getElementById('cc_bar');

    // module-scope state
    let count = 0; // 0–100

    // render met template literals
    function render() {
        badgeVal.textContent = `${count}`;
        bar.style.width = `${count}%`;
        bar.setAttribute('aria-valuenow', `${count}`);
        bar.textContent = `${count}%`;
    }

    // controls (arrow functions) + grenzen 0–100
    btnInc1.addEventListener('click', () => { count = Math.min(100, count + 1); render(); });
    btnInc5.addEventListener('click', () => { count = Math.min(100, count + 5); render(); });
    btnDec1.addEventListener('click', () => { count = Math.max(0, count - 1); render(); });
    btnReset.addEventListener('click', () => { count = 0; render(); });

    // init
    render();
});

//eigen js

// ----------------------------------
// Hoofdstuk 5: Template Literals
// Oefening H5-B — Inline Calculator
// ----------------------------------
document.addEventListener("DOMContentLoaded", () => {
    const inp  = document.getElementById("ic_n");
    const plus = document.getElementById("ic_plus");
    const minus = document.getElementById("ic_minus");

    // helper om te clampen tussen −999 en 999
    // | Deel                  | Betekenis                                                                                          |
    // | --------------------- | -------------------------------------------------------------------------------------------------- |
    // | `Math.min(999, v)`    | pakt de kleinste van 999 en `v` → dus `v` kan **niet hoger worden dan 999**                        |
    // | `Math.max(-999, ...)` | pakt de grootste van -999 en het vorige resultaat → dus `v` kan niet lager worden dan -999         |

    const clamp = v => Math.max(-999, Math.min(999, v));

    plus.addEventListener("click", () => {
        const v = Number(inp.value);
        inp.value = clamp(v + 1);
    });

    minus.addEventListener("click", () => {
        const v = Number(inp.value);
        inp.value = clamp(v - 1);
    });
});

//eigen js

// | Begrip          | Betekenis                                           |
// | --------------- | --------------------------------------------------- |
// | `array`         | lijst met waarden                                   |
// | `trim()`        | spaties rond tekst verwijderen                      |
// | `toLowerCase()` | alles kleine letters (handig voor vergelijken)      |
// | `some()`        | checkt of een lijst een match bevat                 |
// | `map()`         | maakt een nieuwe lijst door elke waarde te bewerken |
// | `join("")`      | plakt lijst weer samen in één string                |
// | `sort()`        | alfabetisch sorteren                                |
// | `reverse()`     | lijst omkeren                                       |
// | `Set()`         | verzameling met alleen unieke waarden               |

// ----------------------------------
// Hoofdstuk 6: Arrow Functions (=>)
// Oefening H6-A — Tags Manager
// ----------------------------------
document.addEventListener('DOMContentLoaded', () => {

    // We halen alle HTML-elementen op zodat we er later mee kunnen werken.
    // Dit doet niets "slims": we steken alleen verwijzingen naar elementen in variabelen.
    const inp     = document.getElementById('tm_input');
    const btnAdd  = document.getElementById('tm_add');
    const btnSort = document.getElementById('tm_sort');
    const btnRev  = document.getElementById('tm_rev');
    const btnClr  = document.getElementById('tm_clear');

    const list    = document.getElementById('tm_list');
    const elCount = document.getElementById('tm_count');
    const elUniq  = document.getElementById('tm_unique');

    // Hier bewaren we al onze tags in een array (lijst).
    // Een array is een verzameling waarden in volgorde, bv: ["JS", "HTML", "CSS"]
    let tags = [];

    // -------------------------------------------------------
    // Kleine hulpfuncties (arrow functions)
    // -------------------------------------------------------

    // trim() verwijdert spaties voor en na een tekst:
    // "  hallo  " → "hallo"
    const clean = v => v.trim();

    // toLowerCase() maakt tekst altijd kleine letters:
    // "JS" → "js"
    // Dit gebruiken we om "JS" en "js" als dezelfde tag te zien (case-insensitive)
    const lower = v => v.toLowerCase();

    // some() kijkt of er minstens één element in de array voldoet aan een test
    // bv: ["hi","yo"].some(w => w==="yo") → true
    //
    // Hier gebruiken we het om te checken of een tag al bestaat.
    const isDuplicate = (arr, value) => {
        const val = lower(value);
        return arr.some(t => lower(t) === val);
    };

    // -------------------------------------------------------
    // RENDER: bouw de volledige UI opnieuw op
    // -------------------------------------------------------
    const render = () => {
        // map() gaat door elke waarde van de array en geeft een nieuwe array terug
        // Hier bouwen we HTML-regels voor elke tag
        //
        // daarna gebruiken we join("") om de array van HTML-stukjes samen te voegen tot 1 string
        list.innerHTML = tags
            .map((t, i) =>
                `<li class="list-group-item d-flex justify-content-between align-items-center">
           <span>${t}</span>
           <span class="badge text-bg-secondary rounded-pill">${i}</span>
         </li>`
            )
            .join(""); // join("") plakt alles aan elkaar zonder komma's

        // lengte van array = totaal aantal tags
        elCount.textContent = `${tags.length}`;

        // new Set() maakt een unieke verzameling
        // ["JS","js","JS"] → Set(["js"])
        // daarna meten we hoe groot die Set is (unieke woorden)
        const uniqCount = new Set(tags.map(lower)).size;
        elUniq.textContent = `${uniqCount}`;
    };

    // -------------------------------------------------------
    // Toevoegen van nieuwe tag
    // -------------------------------------------------------
    btnAdd.addEventListener('click', () => {
        const val = clean(inp.value);

        // niets ingevuld → stop
        if (!val) return;

        // als de tag al bestaat → stop
        if (isDuplicate(tags, val)) return;

        // voegen tag toe aan array
        tags.push(val);

        // inputveld leegmaken
        inp.value = "";

        // UI vernieuwen
        render();
    });

    // -------------------------------------------------------
    // Sorteren van A → Z
    // -------------------------------------------------------
    // sort() sorteert alfabetisch
    // localeCompare() vergelijkt twee woorden correct (ook met accenten)
    btnSort.addEventListener('click', () => {
        tags.sort((a, b) => lower(a).localeCompare(lower(b)));
        render();
    });

    // -------------------------------------------------------
    // Omgekeerde volgorde
    // -------------------------------------------------------
    // reverse() keert de hele array om
    btnRev.addEventListener('click', () => {
        tags.reverse();
        render();
    });

    // -------------------------------------------------------
    // Alles leegmaken
    // -------------------------------------------------------
    btnClr.addEventListener('click', () => {
        tags = []; // Array leegmaken
        render();
    });

    // Eerste keer tekenen bij pagina-start
    render();
    document.write("tester");
});
// ----------------------------------
// Hoofdstuk 6: Arrow Functions (=>)
// Oefening H6-B — Shop Categories
// ----------------------------------
document.addEventListener('DOMContentLoaded', () => {
    const crumb   = document.getElementById('sc_crumb');
    const filters = document.getElementById('sc_filters');
    const itemsEl = document.getElementById('sc_items');

    // lokale dataset
    const products = [
        { name: 'MacBook Air 13',      cat: 'Laptops' },
        { name: 'ThinkPad X1 Carbon',  cat: 'Laptops' },
        { name: 'Dell Ultrasharp 27"', cat: 'Monitors' },
        { name: 'LG 34" UltraWide',    cat: 'Monitors' },
        { name: 'USB-C Dock',          cat: 'Accessoires' },
        { name: 'Wireless Mouse',      cat: 'Accessoires' },
    ];

    let current = 'Alle';

    // helpers

    // Deze functie zorgt ervoor dat slechts één filter-item actief is.
    // Eerst verwijdert ze de active-klasse bij alle items,
    // daarna voegt ze active toe aan het item waarop jij geklikt hebt.
    //
    // Dus: eerst alles netjes schoonmaken, dan het juiste element aanzetten.

    // const setActive = li => { ... }
    // We maken een arrow function met de naam setActive
    // Ze krijgt één parameter: li
    // li staat voor het list-item waarop geklikt is
    // Denk: "Deze functie activeert het LI-element dat ik doorgeef."

    // [...filters.children]
    // filters.children geeft een HTMLCollection terug
    // (een soort lijst met alle <li> elementjes binnen #sc_filters)
    // [ ... ] is de spread operator
    // Hiermee maken we een echte array van die lijst
    // Waarom?
    // Omdat een HTMLCollection niet alle array-methodes heeft, maar een array wel.

// .forEach(el => el.classList.remove('active'))
//     We lopen over elk filter-item
//     el = één <li> per ronde
//     Voor elke el roepen we classList.remove('active') op
//     Dus hier zeggen we:
//     "Haal de class active weg bij iedereen."

    // li.classList.add('active')
    // Daarna voegen we active toe aan het aangewezen element (het geklikte li)
    // Hierdoor wordt dat item visueel “actief” (Bootstrap styling)
    const setActive = li => {
        [...filters.children].forEach(el => el.classList.remove('active'));
        li.classList.add('active');
    };

    // Als de gekozen categorie Alle is, toon dan alle producten.
    // Anders, toon alleen de producten waarvan de categorie hetzelfde is als wat de gebruiker koos.
//     current === 'Alle':
//        Kijk of de huidige gekozen filter "Alle" is.
//     ? products:
//        Ja → dan zetten we list gelijk aan de volledige lijst producten.
//     : products.filter(...)
//        Nee → dan filteren we de producten zodat alleen de juiste categorie overblijft.
//        p is een product uit de lijst products. Tijdens de filter doorlopen we dus achtereenvolgens alle producten
//        uit de array

//     list.map(...) maakt een lijst van HTML-stukjes, zoals:
//     [
//         "<li>MacBook Air</li>",
//         "<li>Dell Monitor</li>",
//         "<li>USB-C Hub</li>"
//     ]
//         .join('') plakt die stukjes aan elkaar zonder tussenstuk
//     Resultaat na join:
//         <li>MacBook Air</li><li>Dell Monitor</li><li>USB-C Hub</li>
//     Dit is één string, klaar om in innerHTML te zetten.
//     Waarom is join('') nodig?
//         Omdat .map() een array geeft.
//         innerHTML verwacht een string, niet een array.
//     join('') zorgt ervoor dat:
//         ["<li>1</li>","<li>2</li>"]
//     wordt:
//         "<li>1</li><li>2</li>"
    const render = () => {
        const list = current === 'Alle'
            ? products
            : products.filter(p => p.cat === current);

        itemsEl.innerHTML = list.map(p =>
            `<li class="list-group-item">${p.name}</li>`
        ).join('');
        crumb.textContent = current;
    };

    // event delegation voor alle filter-items
    filters.addEventListener('click', e => {
        const li = e.target.closest('.list-group-item');
        if (!li) return;

        current = li.textContent.trim();
        setActive(li);
        render();
    });

    // init
    // de functie wordt meteen geladen tijdens de start van de pagina om alle gegevens te laden in de pagina.
    render();
});

// Hoofdstuk 7: ES6 Arrays
// Oefening H7-A — Node Inspector
// ------------------------------
document.addEventListener('DOMContentLoaded', () => {
    // Elementen ophalen
    const box           = document.getElementById('ni_container');
    const btnChildNodes = document.getElementById('ni_count_childNodes');
    const btnChildren   = document.getElementById('ni_count_children');
    const outNodes      = document.getElementById('ni_out_nodes');
    const outChildren   = document.getElementById('ni_out_children');

    // Klik: tel ALLE directe kind-nodes (incl. tekst/whitespace)
    btnChildNodes.addEventListener('click', () => {
        // childNodes is een lijst van nodes (element + tekst + comments)
        const totaal = box.childNodes.length;
        console.log(box.childNodes);// telt ook spaties/line breaks
        outNodes.textContent = totaal;          // enkel getal tonen
    });

    // Klik: tel ENKEL element-kinderen (<div>, <ul>, <li>, ...)
    btnChildren.addEventListener('click', () => {
        // children is een HTMLCollection met alleen element nodes
        const totaal = box.children.length;
        console.log(box.children);
        outChildren.textContent = totaal;       // enkel getal tonen
    });
});

document.addEventListener('DOMContentLoaded', renderTree);

// Pure: maak <li>-lijst uit array van namen
function maakLijstHTML(items) {
    return items.map(n => `<li class="list-group-item">${n}</li>`).join('');
}

// Pure: depth-first element-namen verzamelen (geen textnodes)
function flattenTree(rootEl) {
    const namen = [];

    // recursieve walk
    function walk(el) {
        namen.push(el.nodeName);            // bv. DIV, UL, LI
        const kids = el.children;           // enkel elementnodes
        for (let i = 0; i < kids.length; i++) {
            walk(kids[i]);                    // dieper gaan (depth-first)
        }
    }

    walk(rootEl);
    return namen;
}

// Impure: lezen uit DOM en resultaat tonen
function renderTree() {
    const root = document.getElementById('tf_root');
    const out  = document.getElementById('tf_out');

    const namen = flattenTree(root);
    out.innerHTML = maakLijstHTML(namen); // overschrijft elke run
}
// Hoofdstuk 8: DOM Nodes & Root Nodes
// Oefening H8-A — Document Roots Dashboard
// ----------------------------------
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('rn_refresh');

    // Hulpfunctie: schrijf waardes in 3 badges van één rij
    function vulRij(idName, idChildren, idHas, node) {
        // nodeName: bv. "HTML", "HEAD", "BODY"
        document.getElementById(idName).textContent = node.nodeName;

        // children.length: aantal element-kinderen
        document.getElementById(idChildren).textContent = node.children.length;

        // hasChildNodes(): true/false als string
        document.getElementById(idHas).textContent = node.hasChildNodes() ? 'true' : 'false';
    }

    // Ververs alle root-infos
    function verversRoots() {
        // Root nodes
        const htmlNode = document.documentElement; // <html>
        const headNode = document.head;            // <head>
        const bodyNode = document.body;            // <body>

        // HTML-rij
        vulRij('rn_html_name', 'rn_html_children', 'rn_html_has', htmlNode);

        // HEAD-rij
        vulRij('rn_head_name', 'rn_head_children', 'rn_head_has', headNode);

        // BODY-rij
        vulRij('rn_body_name', 'rn_body_children', 'rn_body_has', bodyNode);
    }

    // Klik op "Verversen"
    btn.addEventListener('click', verversRoots);

    // Initieel één keer meten bij laden
    verversRoots();
});

// ----------------------------------
// Hoofdstuk 8: DOM Nodes & Root Nodes
// Oefening H8-B — Section Pager
// ----------------------------------
document.addEventListener('DOMContentLoaded', () => {
    // Sections en navigatie-elementen
    const sections   = Array.from(document.querySelectorAll('#sp_sections .sp_sec'));
    const btnPrev    = document.getElementById('sp_prev');
    const btnNext    = document.getElementById('sp_next');
    const listNav    = document.getElementById('sp_list');

    // Start op sectie 0
    let index = 0;

    // Toon exact één sectie en update UI-states
    function render() {
        // 1) Sections tonen/verbergen
        sections.forEach((sec, i) => {
            if (i === index) sec.classList.remove('d-none');
            else sec.classList.add('d-none');
        });

        // 2) Pager knoppen (disable aan randen)
        const prevItem = btnPrev.closest('.page-item');
        const nextItem = btnNext.closest('.page-item');

        if (index === 0) prevItem.classList.add('disabled');
        else prevItem.classList.remove('disabled');

        if (index === sections.length - 1) nextItem.classList.add('disabled');
        else nextItem.classList.remove('disabled');

        // 3) Offcanvas lijst active item
        const items = listNav.querySelectorAll('.list-group-item');
        items.forEach((li, i) => li.classList.toggle('active', i === index));
    }

    // Vorige/volgende handlers (niet circuleren)
    btnPrev.addEventListener('click', () => {
        if (index > 0) {
            index -= 1;
            render();
        }
    });

    btnNext.addEventListener('click', () => {
        if (index < sections.length - 1) {
            index += 1;
            render();
        }
    });

    // Offcanvas list: klik op item → ga naar die index
    listNav.addEventListener('click', (e) => {
        const li = e.target.closest('.list-group-item');
        if (!li) return;

        const all = Array.from(listNav.querySelectorAll('.list-group-item'));
        const i = all.indexOf(li);
        if (i !== -1) {
            index = i;
            render();
        }
    });

    // Initial draw
    render();
});

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'
// M1 — Som van twee getallen
function sum(a, b) {
    return a + b; // pure functie: berekent alleen en wijzigt geen UI
}

function handleM1() {
    const aRaw = document.getElementById("m1_a").value.trim();
    const bRaw = document.getElementById("m1_b").value.trim();
    const out   = document.getElementById("m1_out");

    const a = parseFloat(aRaw);
    const b = parseFloat(bRaw);

    if (aRaw === "" || bRaw === "" || Number.isNaN(a) || Number.isNaN(b)) {
        out.className = "alert alert-warning mb-0";
        out.textContent = "Vul twee geldige getallen in";
        return;
    }

    const result = sum(a, b);
    out.className = "alert alert-success mb-0";
    out.textContent = `${a} + ${b} = ${result}`;
}

// Event-koppeling
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("m1_btn")?.addEventListener("click", handleM1);
});

// M1 — Som van twee getallen
// M2 — Celsius → Kelvin
function cToK(c) {
    return c + 273.15; // formule: K = C + 273.15
}

function handleM2() {
    const raw = document.getElementById("m2_c").value.trim();
    const out = document.getElementById("m2_out");
    const c = parseFloat(raw);

    if (raw === "" || Number.isNaN(c)) {
        out.className = "alert alert-warning mb-0";
        out.textContent = "Vul een geldig getal in";
        return;
    }

    const k = cToK(c);
    out.className = "alert alert-success mb-0";
    out.textContent = `${c}°C = ${k} K`;
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("m2_btn")?.addEventListener("click", handleM2);
});

// M3 — BMI-berekening
function calcBmi(kg, cm) {
    const m = cm / 100;          // omzetting cm → m
    return kg / (m * m);         // formule: BMI = kg / (m^2)
}

function handleM3() {
    const wRaw = document.getElementById("bmi_w").value.trim();
    const hRaw = document.getElementById("bmi_h").value.trim();
    const out  = document.getElementById("bmi_out");

    const w = parseFloat(wRaw);
    const h = parseFloat(hRaw);

    // Validatie: beide velden moeten getallen bevatten en lengte > 0
    if (wRaw === "" || hRaw === "" || Number.isNaN(w) || Number.isNaN(h) || h <= 0) {
        out.className = "alert alert-warning mb-0";
        out.textContent = "Vul geldige waarden in";
        return;
    }

    const bmi = calcBmi(w, h);
    out.className = "alert alert-success mb-0";
    out.textContent = `BMI = ${bmi.toFixed(2)}`;
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("bmi_btn")?.addEventListener("click", handleM3);
});

// M4 — BMI met categorie en kleur

// 1) BMI berekenen (zoals bij M3)
function calcBmi(kg, cm) {
    const m = cm / 100;
    return kg / (m * m); // BMI = gewicht / (lengte in meter)^2
}

// 2) Categorie bepalen + bijhorende Bootstrap alert-klasse kiezen
function categorizeBmi(bmi) {
    // Standaard WHO-drempels
    if (bmi < 18.5) {
        return { label: "Ondergewicht", klass: "alert alert-info mb-0" };       // blauwachtig
    }
    if (bmi < 25) {
        return { label: "Gezond gewicht", klass: "alert alert-success mb-0" };  // groen
    }
    if (bmi < 30) {
        return { label: "Overgewicht", klass: "alert alert-warning mb-0" };     // geel
    }
    return { label: "Obesitas", klass: "alert alert-danger mb-0" };           // rood
}

function handleM4() {
    const wRaw = document.getElementById("bmi2_w").value.trim();
    const hRaw = document.getElementById("bmi2_h").value.trim();
    const out  = document.getElementById("bmi2_out");

    const w = parseFloat(wRaw);
    const h = parseFloat(hRaw);

    // Validatie: beide velden vereist, getallen, en lengte > 0
    if (wRaw === "" || hRaw === "" || Number.isNaN(w) || Number.isNaN(h) || h <= 0) {
        out.className = "alert alert-warning mb-0";
        out.textContent = "Vul geldige waarden in";
        return;
    }

    // Berekening + categorie
    const bmi = calcBmi(w, h);
    const { label, klass } = categorizeBmi(bmi);

    // Output met kleur per categorie
    out.className = klass;
    out.textContent = `BMI = ${bmi.toFixed(2)} — Categorie: ${label}`;
}

// Event-koppeling
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("bmi2_btn")?.addEventListener("click", handleM4);
});

// M4 — BMI met categorie en kleur

// 1) BMI berekenen (zoals bij M3)
function calcBmi(kg, cm) {
    const m = cm / 100;
    return kg / (m * m); // BMI = gewicht / (lengte in meter)^2
}

// 2) Categorie bepalen + bijhorende Bootstrap alert-klasse kiezen
function categorizeBmi(bmi) {
    // Standaard WHO-drempels
    if (bmi < 18.5) {
        return { label: "Ondergewicht", klass: "alert alert-info mb-0" };       // blauwachtig
    }
    if (bmi < 25) {
        return { label: "Gezond gewicht", klass: "alert alert-success mb-0" };  // groen
    }
    if (bmi < 30) {
        return { label: "Overgewicht", klass: "alert alert-warning mb-0" };     // geel
    }
    return { label: "Obesitas", klass: "alert alert-danger mb-0" };           // rood
}

function handleM4() {
    const wRaw = document.getElementById("bmi2_w").value.trim();
    const hRaw = document.getElementById("bmi2_h").value.trim();
    const out  = document.getElementById("bmi2_out");

    const w = parseFloat(wRaw);
    const h = parseFloat(hRaw);

    // Validatie: beide velden vereist, getallen, en lengte > 0
    if (wRaw === "" || hRaw === "" || Number.isNaN(w) || Number.isNaN(h) || h <= 0) {
        out.className = "alert alert-warning mb-0";
        out.textContent = "Vul geldige waarden in";
        return;
    }

    // Berekening + categorie
    const bmi = calcBmi(w, h);
    const { label, klass } = categorizeBmi(bmi);

    // Output met kleur per categorie
    out.className = klass;
    out.textContent = `BMI = ${bmi.toFixed(2)} — Categorie: ${label}`;
}

// Event-koppeling
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("bmi2_btn")?.addEventListener("click", handleM4);
});

// M5 — Prijs na korting
function calcDiscount(price, pct) {
    // formule: nieuwe prijs = prijs × (1 - pct / 100)
    return price * (1 - pct / 100);
}

function handleDiscount() {
    const pRaw = document.getElementById("price").value.trim();
    const dRaw = document.getElementById("discount").value.trim();
    const out = document.getElementById("discount_out");

    const price = parseFloat(pRaw);
    const discount = parseFloat(dRaw);

    // Validatie: beide velden moeten geldig zijn en percentage tussen 0 en 100
    if (
        pRaw === "" ||
        dRaw === "" ||
        Number.isNaN(price) ||
        Number.isNaN(discount) ||
        discount < 0 ||
        discount > 100
    ) {
        out.className = "alert alert-warning mb-0";
        out.textContent = "Vul een geldige prijs en korting in (0–100%)";
        return;
    }

    // Berekening + afronding op 2 decimalen
    const newPrice = calcDiscount(price, discount);
    out.className = "alert alert-success mb-0";
    out.textContent = `Nieuwe prijs: €${newPrice.toFixed(2)} (Korting: ${discount}%)`;
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("discount_btn")?.addEventListener("click", handleDiscount);
});

function applyBaseDiscount(price, mode, value) {
    if (mode === "pct") {
        // nieuwe prijs = prijs × (1 − value/100)
        return price * (1 - (value / 100));
    }
    // mode === "eur"
    // nieuwe prijs = prijs − value
    return price - value;
}

function applyCoupon(extraPct, currentPrice) {
    // extra korting in procent op de tussenprijs
    // nieuwe prijs = currentPrice × (1 − extraPct/100)
    return currentPrice * (1 - (extraPct / 100));
}

function clampToFloor(price, floor) {
    return price < floor ? floor : price;
}

function euros(n) {
    // eenvoudige formatter voor twee decimalen
    return Number(n).toFixed(2);
}

function handleM6() {
    const out   = document.getElementById("ex_out");
    const pRaw  = document.getElementById("ex_price").value.trim();
    const mVal  = document.getElementById("ex_mode").value;
    const dRaw  = document.getElementById("ex_disc").value.trim();
    const cRaw  = document.getElementById("ex_coupon").value.trim();
    const fRaw  = document.getElementById("ex_floor").value.trim();

    const price = parseFloat(pRaw);
    const disc  = parseFloat(dRaw);
    const floor = parseFloat(fRaw);

    // Validatie basisvelden
    const baseInvalid =
        pRaw === "" || Number.isNaN(price) || price < 0 ||
        dRaw === "" || Number.isNaN(disc)  || disc < 0 ||
        fRaw === "" || Number.isNaN(floor) || floor < 0;

    if (baseInvalid) {
        out.className = "alert alert-warning mb-0";
        out.textContent = "Vul geldige waarden in voor prijs, korting en minimumprijs";
        return;
    }

    // Extra validatie per kortingswijze
    if (mVal === "pct" && (disc > 100)) {
        out.className = "alert alert-warning mb-0";
        out.textContent = "Percentage moet tussen 0 en 100 liggen";
        return;
    }
    if (mVal === "eur" && (disc > price)) {
        out.className = "alert alert-warning mb-0";
        out.textContent = "Vast bedrag mag niet groter zijn dan de prijs";
        return;
    }

    // Stap 1: basis-korting
    const afterBase = applyBaseDiscount(price, mVal, disc);
    const baseReduction = price - afterBase;

    // Stap 2: eventuele coupon
    const hasCoupon = cRaw.toUpperCase() === "SAVE10";
    const afterCoupon = hasCoupon ? applyCoupon(10, afterBase) : afterBase;
    const couponReduction = afterBase - afterCoupon;

    // Stap 3: minimumprijs toepassen
    const finalPrice = clampToFloor(afterCoupon, floor);
    const floorApplied = finalPrice !== afterCoupon;

    // Opbouw van een duidelijk overzicht
    const lines = [
        `Oorspronkelijke prijs:  €${euros(price)}`,
        mVal === "pct"
            ? `Korting (${euros(disc)}%):        −€${euros(baseReduction)}`
            : `Korting (bedrag):        −€${euros(baseReduction)}`,
        hasCoupon
            ? `Extra coupon (10%):      −€${euros(couponReduction)}`
            : `Extra coupon:            geen`,
        `Tussenprijs:             €${euros(afterCoupon)}`,
        `Minimumprijs toegepast:  ${floorApplied ? "ja" : "nee"}`,
        `Eindprijs:               €${euros(finalPrice)}`
    ];

    // Kleurkeuze voor output:
    // - succes als geen floor ingreep en prijs daalt
    // - info als geen korting of geen verandering
    // - warning als floor ingreep nodig was
    let klass = "alert alert-success mb-0";
    if (floorApplied) klass = "alert alert-warning mb-0";
    if (finalPrice === price && !floorApplied) klass = "alert alert-info mb-0";

    out.className = klass;
    out.innerHTML = `<pre class="mb-0" style="white-space:pre-wrap">${lines.join("\n")}</pre>`;
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("ex_btn")?.addEventListener("click", handleM6);
});

// Eindoefening — Rekenmachine (Windows-stijl)
// -----------------------------------------

// Interne toestand
let mem = 0;                 // geheugen
let cur = "0";               // huidige invoer als string (met komma)
let prev = null;             // vorig getal (number)
let op = null;               // huidig bewerkingsteken: "+", "−", "×", "÷"
let justEvaluated = false;   // laatste actie was "=" (om nieuwe invoer te starten)

// Helpers
const $ = (id) => document.getElementById(id);
const display = () => { $("calc_display").textContent = cur; };
const toNumber = (s) => parseFloat(s.replace(",", "."));             // "12,3" -> 12.3
const fromNumber = (n) => String(n).replace(".", ",");               // 12.3  -> "12,3"
const isZero = (s) => s === "0" || s === "-0";

function setCurFromNumber(n) {
    // Beperk op lengte en verwijder onnodige trailing nullen
    if (!Number.isFinite(n)) {
        cur = "Niet gedefinieerd";
        return;
    }
    let s = fromNumber(n);
    if (s.includes(",")) {
        // trim trailing zeros
        s = s.replace(/,?0+$/, (m) => (m.startsWith(",") ? "" : m));
    }
    cur = s;
}

function applyOp(a, b, operator) {
    switch (operator) {
        case "+": return a + b;
        case "−": return a - b;
        case "×": return a * b;
        case "÷": return b === 0 ? NaN : a / b;
        default:  return b;
    }
}

// Invoer: cijfers
function pressDigit(d) {
    if (justEvaluated || (op && isZero(cur))) {
        cur = d;
        justEvaluated = false;
        display();
        return;
    }
    if (cur === "0") cur = d;
    else if (cur === "-0") cur = "-" + d;
    else cur += d;
    display();
}

// Invoer: komma
function pressComma() {
    if (justEvaluated) {
        cur = "0,";
        justEvaluated = false;
        display();
        return;
    }
    if (!cur.includes(",")) {
        cur += ",";
        display();
    }
}

// Tekens: + − × ÷
function setOperator(nextOp) {
    const n = toNumber(cur);
    if (prev === null) {
        prev = n;
    } else if (op && !justEvaluated) {
        prev = applyOp(prev, n, op);
        setCurFromNumber(prev);
    }
    op = nextOp;
    justEvaluated = false;
    display();
    cur = "0";
}

// =
function evaluate() {
    const n = toNumber(cur);
    if (op === null && prev === null) return;

    const a = prev === null ? 0 : prev;
    const result = applyOp(a, n, op);
    setCurFromNumber(result);
    prev = result;
    op = null;
    justEvaluated = true;
    display();
}

// CE (alleen huidige invoer wissen)
function clearEntry() {
    cur = "0";
    display();
}

// C (alles wissen)
function clearAll() {
    cur = "0";
    prev = null;
    op = null;
    justEvaluated = false;
    display();
}

// Backspace
function backspace() {
    if (justEvaluated) return;
    if (cur.length <= 1 || (cur.startsWith("-") && cur.length === 2)) {
        cur = "0";
    } else {
        cur = cur.slice(0, -1);
        if (cur === "-") cur = "0";
    }
    display();
}

// Wissel teken
function toggleSign() {
    if (cur.startsWith("-")) cur = cur.slice(1);
    else if (!isZero(cur)) cur = "-" + cur;
    display();
}

// Percentage (eenvoudig: huidige invoer / 100)
function percent() {
    const n = toNumber(cur);
    setCurFromNumber(n / 100);
    display();
}

// 1/x
function invert() {
    const n = toNumber(cur);
    setCurFromNumber(1 / n);
    prev = null; op = null; justEvaluated = true;
    display();
}

// x²
function pow2() {
    const n = toNumber(cur);
    setCurFromNumber(n * n);
    prev = null; op = null; justEvaluated = true;
    display();
}

// √x
function sqrt() {
    const n = toNumber(cur);
    setCurFromNumber(n < 0 ? NaN : Math.sqrt(n));
    prev = null; op = null; justEvaluated = true;
    display();
}

// Memory
function mClear() { mem = 0; }
function mRecall() { setCurFromNumber(mem); display(); justEvaluated = true; }
function mStore()  { mem = toNumber(cur); }
function mPlus()   { mem += toNumber(cur); }
function mMinus()  { mem -= toNumber(cur); }

// Event-koppelingen
document.addEventListener("DOMContentLoaded", () => {
    // Cijfers
    document.querySelectorAll("[data-digit]").forEach(btn => {
        btn.addEventListener("click", () => pressDigit(btn.getAttribute("data-digit")));
    });
    // Komma en basis
    $("btn_comma").addEventListener("click", pressComma);
    $("btn_ce").addEventListener("click", clearEntry);
    $("btn_c").addEventListener("click", clearAll);
    $("btn_back").addEventListener("click", backspace);
    $("btn_sign").addEventListener("click", toggleSign);
    $("btn_pct").addEventListener("click", percent);
    $("btn_inv").addEventListener("click", invert);
    $("btn_pow2").addEventListener("click", pow2);
    $("btn_sqrt").addEventListener("click", sqrt);
    $("btn_eq").addEventListener("click", evaluate);

    // Operators
    document.querySelectorAll("[data-op]").forEach(btn => {
        btn.addEventListener("click", () => setOperator(btn.getAttribute("data-op")));
    });

    // Memory
    $("calc_mc").addEventListener("click", mClear);
    $("calc_mr").addEventListener("click", mRecall);
    $("calc_ms").addEventListener("click", mStore);
    $("calc_mplus").addEventListener("click", mPlus);
    $("calc_mminus").addEventListener("click", mMinus);

    // Init
    display();
});
