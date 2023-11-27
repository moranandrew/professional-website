/**
 * script.js
 * JS code supporting andrewdmoran.com resume website
 * 
 * @author Andrew Moran
 */


/**
 * Handles the expandable and collapsible sections on education.html
 */
let coll = document.getElementsByClassName("collapsible");
let i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}


/**
 * Toggle Dark Mode On
 * When button is pressed the .dark-mode css colors are used.
 */
function goDark() {
    let element = document.body;
    element.classList.toggle("dark-mode");
}