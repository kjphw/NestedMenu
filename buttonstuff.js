/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
function dropdown(subject) {
    var dropdown = document.querySelector(subject);
    if (dropdown.style.display === "none" || dropdown.style.display === subject) {
        dropdown.style.display = "flex";
    } else {
        dropdown.style.display = "none";
    }
}
