// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js
async function loadLocalProducts() {
    const list = document.getElementById("prod_list_local");
    const status = document.getElementById("prod_status_local");

    try {
        status.className = "alert alert-warning mb-0";
        status.textContent = "⏳ Laden...";

        const res = await fetch("./data/products.json");
        if (!res.ok) throw new Error("Load error");

        const items = await res.json();

        list.innerHTML = items
            .map(p => `<li class="list-group-item">💰 ${p.name} — €${p.price}</li>`)
            .join("");

        status.className = "alert alert-success mb-0";
        status.textContent = ` ${items.length} producten geladen`;

    } catch {
        status.className = "alert alert-danger mb-0";
        status.textContent = "❌ Fout bij laden";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("prod_load_btn")
        ?.addEventListener("click", loadLocalProducts);
});

