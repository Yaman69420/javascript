// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

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

//Object.entries() maakt van een object een array van arrays, waarin elk binnenste array bestaat uit twee waarden:
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
})