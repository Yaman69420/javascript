// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

// Eigen JS

// Elements
const baseInput = document.querySelector('#sm_title');
const out = document.querySelector('#sm_slug');


function makeSlug(title) {
    let slug = title.toLowerCase() // Converts all letters to lowercase. Example: "Hello World" → "hello world"

    slug = slug.replace(/[ _]+/g, '-'); // → Replaces spaces and underscores (_) with hyphens (-).The + means “one or more in a row”, so multiple spaces become one hyphen.Example: "hello_world test" → "hello-world-test"

    slug = slug.replace(/[^a-z0-9-]/g, ''); // → Removes all characters except lowercase letters, numbers, and hyphens.Example: "hello@world!" → "helloworld"

    slug = slug.replace(/-+/g, '-'); // → Collapses multiple consecutive hyphens into a single one.Example: "hello---world" → "hello-world"

    // slug = slug.replace(/^-+|-+$/g, ''); // → Removes hyphens from the start or end of the slug.Example: "-hello-world-" → "hello-world"

    return slug;
}

baseInput.addEventListener('input', () => {
    const resultaat = makeSlug(baseInput.value);
    out.textContent = resultaat;
});