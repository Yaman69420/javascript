// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

//eigen js
//function naam(parameter){
// return resultaat
//}

// naam(waarde)

//pure function
function berekenVierkant() {
    const getalInput = document.getElementById('fn_getalInput');
    const output = document.getElementById('fn_output');
    const getal = parseInt(getalInput.value);
    const antwoord = getal ** 2;

    if(!getal){
        output.className = "alert alert-warning mt-3 mb-0"
        output.textContent = "Geef een getal in!"
        return
    }

    output.textContent = `*${getal}^2 = ${antwoord}*`;
}

document.addEventListener("DOMContentLoaded", () => {
    const btnGreet = document.getElementById('fn_btnGreet')
    btnGreet.addEventListener("click", berekenVierkant);
});