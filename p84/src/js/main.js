// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js
const products = [];

function Product(name, prijs) {
    this.name = name;
    this.prijs = prijs;
    this.label = function() {
        return `${this.name} - €${this.prijs.toFixed(2)}`;
    };
}

function addProduct() {
    const name = document.getElementById("prod_name").value.trim();
    const prijs = document.getElementById("prod_price").value.trim();
    const list = document.getElementById("prod_list");

    if (!name || !prijs) return;

    const product = new Product(name, Number(prijs));
    products.push(product);

    list.innerHTML = products
        .map(p => `<li class="list-group-item">${p.label()}</li>`)
        .join("");
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("prod_btn")
        ?.addEventListener("click", addProduct);
});