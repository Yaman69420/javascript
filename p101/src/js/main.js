// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

// eigen js

function saveTheme(theme) {
    localStorage.setItem("theme", theme);
}

function renderTheme(theme) {
    const body = document.body;
    const out  = document.getElementById("theme_status");

    if (theme === "dark") {
        body.classList.add("dark-mode");
        out.className = "alert alert-dark mb-0";
        out.textContent = "Huidig thema: dark";
    } else {
        body.classList.remove("dark-mode");
        out.className = "alert alert-secondary mb-0";
        out.textContent = "Huidig thema: light ";
    }
}

function loadTheme() {
    const saved = localStorage.getItem("theme");
    const theme = saved === "dark" ? "dark" : "light";
    renderTheme(theme);
}

document.addEventListener("DOMContentLoaded", () => {
    loadTheme();
    document.getElementById("theme_btn")
        ?.addEventListener("click", () => {
            const isDark = document.body.classList.contains("dark-mode");
            const newTheme = isDark ? "light" : "dark";

            renderTheme(newTheme);
            saveTheme(newTheme);
        });
});