// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

// eigen js
function showBOM() {
    const device = screen.width <= 768;

    const data = [
        `📡 Online: ${navigator.onLine ? "Ja" : "Nee"}`,
        `Is touch device? ${navigator.maxTouchPoints > 0 ? "Ja" : "Nee"}`,
        `Device type: ${device ? "Mobiel" : "Tablet/PC"}`,
        `💬 Browser taal: ${navigator.language}`,
        `OS: ${navigator.userAgent}`
    ];

    document.getElementById("dc_list").innerHTML =
        data.map(item => `<li class="list-group-item">${item}</li>`).join("");
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("dc_btn")
        ?.addEventListener("click", showBOM);
});