// JS Mega Oefening – alles in één DOMContentLoaded-blok
document.addEventListener('DOMContentLoaded', () => {
    const $  = id => document.getElementById(id);
    const $$ = sel => document.querySelectorAll(sel);

    // =========================
    // 1. Groet Generator
    // =========================

    // pure
    const makeGreeting = name => `Hallo ${name}! 👋`;

    // impure
    function handleGreeting() {
        const inp = $('gr_name');
        const out = $('gr_out');
        const name = inp.value.trim();

        if (!name) {
            out.className = 'alert alert-warning mb-0';
            out.textContent = '⚠️ Vul een naam in';
            return;
        }

        out.className = 'alert alert-success mb-0';
        out.textContent = makeGreeting(name);
    }

    $('gr_btn')?.addEventListener('click', handleGreeting);

    // =========================
    // 2. Formatter Station
    // =========================
    (function initFormatter() {
        const inp   = $('fs_text');
        const btnUp = $('fs_upper');
        const btnLo = $('fs_lower');
        const btnCa = $('fs_cap');
        const list  = $('fs_results');

        const capitalize = str => {
            const t = str.trim();
            if (!t) return '';
            return t.charAt(0).toUpperCase() + t.slice(1).toLowerCase();
        };

        function prependItem(text) {
            if (!text.trim()) return;

            list.innerHTML =
                `<li class="list-group-item">${text}</li>` + list.innerHTML;

            while (list.children.length > 5) {
                list.removeChild(list.lastElementChild);
            }
        }

        btnUp?.addEventListener('click', () => {
            const v = inp.value;
            if (!v.trim()) return;
            prependItem(v.toUpperCase());
        });

        btnLo?.addEventListener('click', () => {
            const v = inp.value;
            if (!v.trim()) return;
            prependItem(v.toLowerCase());
        });

        btnCa?.addEventListener('click', () => {
            const v = inp.value;
            const c = capitalize(v);
            if (!c) return;
            prependItem(c);
        });
    })();

    // =========================
    // 3. Slug Maker (regex)
    // =========================
    (function initSlugMaker() {
        const inp = $('sm_title');
        const out = $('sm_slug');

        function makeSlug(title) {
            let t = title.toLowerCase();
            t = t.trim();
            t = t.replace(/[\s_]+/g, '-');
            t = t.replace(/[^a-z0-9-]/g, '');
            t = t.replace(/-+/g, '-');
            t = t.replace(/^-+|-+$/g, '');
            return t;
        }

        function handleInput() {
            const s = makeSlug(inp.value);
            out.textContent = s || '-';
        }

        inp?.addEventListener('input', handleInput);
    })();

    // =========================
    // 4. Tags Manager
    // =========================
    (function initTags() {
        const inp     = $('tm_input');
        const btnAdd  = $('tm_add');
        const btnSort = $('tm_sort');
        const btnRev  = $('tm_rev');
        const btnClr  = $('tm_clear');
        const list    = $('tm_list');
        const elCount = $('tm_count');
        const elUniq  = $('tm_unique');

        let tags = [];

        const clean = v => v.trim();
        const lower = v => v.toLowerCase();
        const isDuplicate = (arr, value) => {
            const val = lower(value);
            return arr.some(t => lower(t) === val);
        };

        const render = () => {
            list.innerHTML = tags
                .map((t, i) =>
                    `<li class="list-group-item d-flex justify-content-between align-items-center">
                        <span>${t}</span>
                        <span class="badge text-bg-secondary rounded-pill">${i}</span>
                     </li>`
                )
                .join('');

            elCount.textContent = `${tags.length}`;
            const uniqCount = new Set(tags.map(lower)).size;
            elUniq.textContent = `${uniqCount}`;
        };

        btnAdd?.addEventListener('click', () => {
            const val = clean(inp.value);
            if (!val) return;
            if (isDuplicate(tags, val)) return;
            tags.push(val);
            inp.value = '';
            render();
        });

        btnSort?.addEventListener('click', () => {
            tags.sort((a, b) => lower(a).localeCompare(lower(b)));
            render();
        });

        btnRev?.addEventListener('click', () => {
            tags.reverse();
            render();
        });

        btnClr?.addEventListener('click', () => {
            tags = [];
            render();
        });

        render();
    })();

    // =========================
    // 5. Todo App
    // =========================
    (function initTodo() {
        const form    = $('todo_form');
        const inp     = $('todo_input');
        const msg     = $('todo_msg');
        const list    = $('todo_list');
        const countEl = $('todo_count_open');

        const btnAll  = $('todo_filter_all');
        const btnOpen = $('todo_filter_open');
        const btnDone = $('todo_filter_done');
        const btnClr  = $('todo_clear_done');

        const tasks = [];
        let currentFilter = 'all'; // 'all' | 'open' | 'done'

        function updateFilterButtons() {
            const map = {
                all:  btnAll,
                open: btnOpen,
                done: btnDone
            };
            Object.entries(map).forEach(([key, btn]) => {
                if (!btn) return;
                btn.classList.remove('btn-primary', 'btn-outline-primary');
                if (key === currentFilter) {
                    btn.classList.add('btn-primary');
                } else {
                    btn.classList.add('btn-outline-primary');
                }
            });
        }

        function render() {
            const openCount = tasks.filter(t => !t.done).length;
            countEl.textContent = openCount;

            const rows = [];
            tasks.forEach((task, index) => {
                if (currentFilter === 'open' && task.done) return;
                if (currentFilter === 'done' && !task.done) return;

                rows.push(`
                    <li class="list-group-item d-flex justify-content-between align-items-center ${task.done ? 'todo-done' : ''}">
                        <span class="todo-text" data-idx="${index}">
                            ${task.text}
                        </span>
                        <button class="btn btn-sm btn-danger todo-del" data-idx="${index}">X</button>
                    </li>
                `);
            });

            list.innerHTML = rows.join('');
        }

        function handleAdd(e) {
            e.preventDefault();
            const text = inp.value.trim();
            if (!text) {
                msg.className = 'alert alert-danger mb-2';
                msg.textContent = '❌ Vul een taak in';
                return;
            }

            tasks.push({ text, done: false });
            msg.className = 'alert alert-success mb-2';
            msg.textContent = `Taak toegevoegd: ${text}`;
            inp.value = '';
            render();
        }

        function handleListClick(e) {
            const target = e.target;
            const idx = target.dataset.idx;
            if (idx === undefined) return;

            if (target.classList.contains('todo-text')) {
                tasks[idx].done = !tasks[idx].done;
                render();
                return;
            }

            if (target.classList.contains('todo-del')) {
                tasks.splice(idx, 1);
                render();
            }
        }

        function clearDone() {
            for (let i = tasks.length - 1; i >= 0; i--) {
                if (tasks[i].done) tasks.splice(i, 1);
            }
            render();
        }

        form?.addEventListener('submit', handleAdd);
        list?.addEventListener('click', handleListClick);

        btnAll?.addEventListener('click', () => {
            currentFilter = 'all';
            updateFilterButtons();
            render();
        });
        btnOpen?.addEventListener('click', () => {
            currentFilter = 'open';
            updateFilterButtons();
            render();
        });
        btnDone?.addEventListener('click', () => {
            currentFilter = 'done';
            updateFilterButtons();
            render();
        });
        btnClr?.addEventListener('click', clearDone);

        updateFilterButtons();
        render();
    })();

    // =========================
    // 6. Converters & Calculators
    // =========================
    (function initConverters() {
        // 6.1 cm → m/inch
        const inpCm  = $('uc_cm');
        const btnToM = $('uc_to_m');
        const btnToIn = $('uc_to_in');
        const badgeM = $('uc_m');
        const badgeIn = $('uc_in');

        const invalid = () => {
            badgeM.textContent = 'ongeldig';
            badgeIn.textContent = 'ongeldig';
        };

        btnToM?.addEventListener('click', () => {
            const cmVal = inpCm.value.trim();
            if (cmVal === '') return invalid();
            const cm = Number(cmVal);
            if (cm < 0 || Number.isNaN(cm)) return invalid();
            const meter = (cm / 100).toFixed(2);
            badgeM.textContent = meter;
        });

        btnToIn?.addEventListener('click', () => {
            const cmVal = inpCm.value.trim();
            if (cmVal === '') return invalid();
            const cm = Number(cmVal);
            if (cm < 0 || Number.isNaN(cm)) return invalid();
            const inch = (cm / 2.54).toFixed(2);
            badgeIn.textContent = inch;
        });

        // 6.2 Celsius → Kelvin
        const cToK = c => c + 273.15;
        const m2Btn = $('m2_btn');
        const m2Out = $('m2_out');

        m2Btn?.addEventListener('click', () => {
            const raw = $('m2_c').value.trim();
            const c = parseFloat(raw);
            if (raw === '' || Number.isNaN(c)) {
                m2Out.className = 'alert alert-warning mb-0';
                m2Out.textContent = 'Vul een geldig getal in';
                return;
            }
            const k = cToK(c);
            m2Out.className = 'alert alert-success mb-0';
            m2Out.textContent = `${c}°C = ${k.toFixed(2)} K`;
        });

        // 6.3 Korting
        const calcDiscount = (price, pct) => price * (1 - pct / 100);

        $('discount_btn')?.addEventListener('click', () => {
            const pRaw = $('price').value.trim();
            const dRaw = $('discount').value.trim();
            const out  = $('discount_out');

            const price = parseFloat(pRaw);
            const disc  = parseFloat(dRaw);

            if (
                pRaw === '' || dRaw === '' ||
                Number.isNaN(price) || Number.isNaN(disc) ||
                disc < 0 || disc > 100
            ) {
                out.className = 'alert alert-warning mb-0';
                out.textContent = 'Vul een geldige prijs en korting in (0–100%)';
                return;
            }

            const newPrice = calcDiscount(price, disc);
            out.className = 'alert alert-success mb-0';
            out.textContent = `Nieuwe prijs: €${newPrice.toFixed(2)} (Korting: ${disc}%)`;
        });
    })();

    // =========================
    // 7. BMI
    // =========================
    (function initBmi() {
        const bmi = (kg, cm) => {
            const m = cm / 100;
            return kg / (m * m);
        };

        function categorizeBmi(val) {
            if (val < 18.5) return { label: 'Ondergewicht', klass: 'alert alert-info mb-0' };
            if (val < 25)   return { label: 'Gezond gewicht', klass: 'alert alert-success mb-0' };
            if (val < 30)   return { label: 'Overgewicht', klass: 'alert alert-warning mb-0' };
            return { label: 'Obesitas', klass: 'alert alert-danger mb-0' };
        }

        $('bmi_btn')?.addEventListener('click', () => {
            const wRaw = $('bmi_w').value.trim();
            const hRaw = $('bmi_h').value.trim();
            const out  = $('bmi_out');

            const w = parseFloat(wRaw);
            const h = parseFloat(hRaw);

            if (
                wRaw === '' || hRaw === '' ||
                Number.isNaN(w) || Number.isNaN(h) || h <= 0
            ) {
                out.className = 'alert alert-warning mb-0';
                out.textContent = 'Vul geldige waarden in';
                return;
            }

            const val = bmi(w, h);
            const { label, klass } = categorizeBmi(val);
            out.className = klass;
            out.textContent = `BMI = ${val.toFixed(2)} — Categorie: ${label}`;
        });
    })();

    // =========================
    // 8. ES6 Classes (User/Admin & Pets)
    // =========================
    (function initClasses() {
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
                this.role = 'Admin';
            }
            info() {
                return `[ADMIN] ${super.info()}`;
            }
        }

        const clsUsers = [];

        function addClassUser() {
            const name = $('cls_name').value.trim();
            const age  = Number($('cls_age').value);
            const role = $('cls_role').value;
            const list = $('cls_list');

            if (!name || Number.isNaN(age)) return;

            const u = role === 'admin'
                ? new Admin(name, age)
                : new User(name, age);

            clsUsers.push(u);
            list.innerHTML = clsUsers
                .map(user => `<li class="list-group-item">${user.info()}</li>`)
                .join('');
        }

        $('cls_btn')?.addEventListener('click', addClassUser);

        // Pets
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
                super(name, 'hond');
            }
            speak() {
                return `🐶 ${this.name} blaft!`;
            }
        }

        class Cat extends Animal {
            constructor(name) {
                super(name, 'kat');
            }
            speak() {
                return `🐱 ${this.name} miauwt!`;
            }
        }

        const pets = [];

        function addPet() {
            const name = $('pet_name').value.trim();
            const type = $('pet_type').value;
            const list = $('pet_list');
            if (!name) return;

            let pet;
            if (type === 'hond') pet = new Dog(name);
            else if (type === 'kat') pet = new Cat(name);
            else pet = new Animal(name, type);

            pets.push(pet);
            list.innerHTML = pets
                .map(p => `<li class="list-group-item">${p.speak()}</li>`)
                .join('');

            $('pet_name').value = '';
            $('pet_name').focus();
        }

        $('pet_btn')?.addEventListener('click', addPet);
        $('pet_name')?.addEventListener('keydown', e => {
            if (e.key === 'Enter') addPet();
        });
    })();

    // =========================
    // 9. Form: live preview + preventDefault
    // =========================
    (function initForm() {
        const inp    = $('ev_name');
        const form   = $('ev_form');
        const preview = $('ev_preview');
        const status = $('ev_status');

        function updatePreview() {
            const name = inp.value.trim();
            if (!name) {
                preview.className = 'alert alert-secondary mb-2';
                preview.textContent = 'Wacht op input…';
            } else {
                preview.className = 'alert alert-info mb-2';
                preview.textContent = `Hallo ${name}! 👋`;
            }
        }

        function handleSubmit(e) {
            e.preventDefault();
            const name = inp.value.trim();

            if (!name) {
                status.className = 'alert alert-danger mb-0';
                status.textContent = '❌ Vul een naam in';
                return;
            }

            status.className = 'alert alert-success mb-0';
            status.textContent = `Formulier verstuurd voor ${name}`;
        }

        inp?.addEventListener('input', updatePreview);
        form?.addEventListener('submit', handleSubmit);
        updatePreview();
    })();

    // =========================
    // 10. Dark mode toggle
    // =========================
    (function initDarkMode() {
        const btn = $('dm_toggle');
        const body = document.body;

        function updateLabel(isDark) {
            btn.textContent = isDark ? 'Light mode ☀️' : 'Dark mode 🌙';
        }

        btn?.addEventListener('click', () => {
            const isDark = body.classList.toggle('dark-mode');
            updateLabel(isDark);
        });
    })();
});