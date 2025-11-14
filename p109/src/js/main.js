// // Import our custom CSS
// import '../scss/styles.scss'
//
// // Import all of Bootstrap’s JS
// import * as bootstrap from 'bootstrap'
//
//
// async function loadPokemons() {
//     const status = document.getElementById("prod_status_local");
//     const list = document.getElementById("prod_list_local");
//
//     try {
//         status.className = "alert alert-warning mb-0";
//         status.textContent = "⏳ JSON laden...";
//
//         const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
//         if (!res.ok) throw new Error("Fout bij laden JSON");
//
//         const data = await res.json();
//         const items = data.results;
//
//         // Fetch full details for each Pokémon
//         const detailPromises = items.map(p => fetch(p.url).then(r => r.json()));
//         const pokemons = await Promise.all(detailPromises);
//
//         list.innerHTML = pokemons
//             .map(p => `
//                 <div class="col">
//                     <div class="card shadow-sm h-100 border-0">
//                         <div class="card-header bg-primary text-white text-center text-capitalize">
//                             ${p.name}
//                         </div>
//                         <img
//                             src="${p.sprites.front_default}"
//                             class="card-img-top mx-auto d-block p-3"
//                             alt="${p.name}"
//                             style="width: 200px; height: 200px; image-rendering: pixelated;"
//                         >
//                         <div class="card-body">
//                             <p class="card-text mb-1">
//                                 <strong>Type:</strong>
//                                 ${p.types.map(t => t.type.name).join(", ")}
//                             </p>
//                             <p class="card-text mb-1">
//                                 <strong>Hoogte:</strong> ${p.height}
//                             </p>
//                             <p class="card-text mb-0">
//                                 <strong>Gewicht:</strong> ${p.weight/10}
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             `)
//             .join("");
//
//         status.className = "alert alert-success mb-0";
//         status.textContent = `${pokemons.length} Pokémon geladen`;
//
//     } catch (err) {
//         status.className = "alert alert-danger mb-0";
//         status.textContent = "❌ Kon JSON niet laden";
//     }
// }document.addEventListener("DOMContentLoaded", () => {
//     document.getElementById("prod_load_btn")
//         ?.addEventListener("click", loadPokemons);
// });

// Import our custom CSS
// import '../scss/styles.scss'
//
// // Import all of Bootstrap’s JS
// import * as bootstrap from 'bootstrap'
//
// // Helper: haal ID uit de SWAPI URL, bv. "https://swapi.dev/api/people/1/"
// function getCharacterId(url) {
//     const match = url.match(/people\/(\d+)\//);
//     return match ? match[1] : null;
// }
//
// async function loadPeople() {
//     const status = document.getElementById("prod_status_local");
//     const list = document.getElementById("prod_list_local");
//
//     try {
//         status.className = "alert alert-warning mb-0";
//         status.textContent = "⏳ Loading Star Wars...";
//
//         const res = await fetch("https://swapi.dev/api/people/?page=1");
//         if (!res.ok) throw new Error("Failed to load SWAPI");
//
//         const data = await res.json();
//         const items = data.results; // ← these are your characters
//
//         list.innerHTML = items
//             .map(p => `
//         <div class="col">
//             <div class="card shadow-sm h-100 border-0">
//                 <div class="card-header bg-dark text-white text-center">
//                     ${p.name}
//                 </div>
//                 <div class="card-body">
//                     <ul class="list-group list-group-flush small">
//                         <li class="list-group-item">
//                             <strong>Height:</strong> ${p.height} cm
//                         </li>
//                         <li class="list-group-item">
//                             <strong>Mass:</strong> ${p.mass} kg
//                         </li>
//                         <li class="list-group-item">
//                             <strong>Birth year:</strong> ${p.birth_year}
//                         </li>
//                         <li class="list-group-item">
//                             <strong>Gender:</strong> ${p.gender}
//                         </li>
//                         <li class="list-group-item">
//                             <strong>Eye color:</strong> ${p.eye_color}
//                         </li>
//                         <li class="list-group-item">
//                             <strong>Hair color:</strong> ${p.hair_color}
//                         </li>
//                         <li class="list-group-item">
//                             <strong>Skin color:</strong> ${p.skin_color}
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     `)
//             .join("");
//
//         status.className = "alert alert-success mb-0";
//         status.textContent = "✔️ Loaded!";
//     } catch (err) {
//         status.className = "alert alert-danger mb-0";
//         status.textContent = "❌ Error loading data";
//         console.error(err);
//     }
// }
// // Event listener
// document.addEventListener("DOMContentLoaded", () => {
//     document.getElementById("prod_load_btn")
//         ?.addEventListener("click", loadPeople);
// });

// Import our custom CSS
import '../scss/styles.scss';

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap';

async function loadGhibliFilms() {
    const status = document.getElementById("prod_status_local");
    const list   = document.getElementById("prod_list_local");

    try {
        status.className = "alert alert-warning mb-0";
        status.textContent = "⏳ Loading Ghibli films...";

        const res = await fetch("https://ghibliapi.vercel.app/films");
        if (!res.ok) throw new Error("Failed to load");

        const films = await res.json();

// Optional: shorten long descriptions
        const makeSummary = (text, max = 160) =>
            text.length > max ? text.slice(0, max - 1) + "…" : text;

        list.innerHTML = films
            .map(f => {
                const summary = makeSummary(f.description || "");

                return `
            <div class="col">
                <div class="card shadow-sm h-100 border-0 ghibli-card">
                    <div class="ghibli-poster-wrapper">
                        <img src="${f.image}"
                             class="card-img-top ghibli-poster"
                             alt="${f.title}">
                    </div>

                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title mb-1">${f.title}</h5>
                        <p class="text-muted small mb-2">
                            ${f.original_title} • ${f.release_date}
                        </p>
                        <p class="card-text small flex-grow-1 ghibli-desc mb-2">
                            ${summary}
                        </p>

                        <div class="d-flex justify-content-between align-items-center mt-2">
                            <span class="badge bg-primary">
                                ⭐ ${f.rt_score}
                            </span>
                            <span class="badge bg-dark">
                                🎬 ${f.director}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        `;
            })
            .join("");
        status.className = "alert alert-success mb-0";
        status.textContent = "✔️ Loaded!";
    } catch(err) {
        status.className = "alert alert-danger mb-0";
        status.textContent = "❌ Error loading films";
        console.error(err);
    }
}
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('prod_load_btn')
        ?.addEventListener('click', loadGhibliFilms);
});