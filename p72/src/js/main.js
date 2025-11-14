// Import our custom CSS
import '../scss/styles.scss'
import * as bootstrap from 'bootstrap'

// Elements
const box = document.querySelector('#rb_box');
const msg = document.querySelector('#rb_msg');

document.addEventListener('DOMContentLoaded', () => {

    box.addEventListener('mouseover', () => {
        msg.className = 'alert alert-info mb-0';
        msg.textContent = 'HALLO!';
    });

    box.addEventListener('mouseleave', () => {
        msg.className = 'alert alert-secondary mb-0';
        msg.textContent = 'KOM TERUG!.';
    });

    box.addEventListener('click', () => {
        msg.className = 'alert alert-success mb-0';
        msg.textContent = 'Je klikt!';
    });
    box.addEventListener('dblclick', () => {
        msg.className = 'alert alert-success mb-0';
        msg.textContent = 'Dubbelklik wow!';
    });

});