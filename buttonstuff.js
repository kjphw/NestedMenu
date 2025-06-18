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

/***********************************************************************************/
/* Name: displayImage                                                              */
/* Desription: Displays images.                                                    */
/* Date: May 27, 2025                                                              */
/* Author: Katelyna Pastrana                                                       */
/* References: https://www.ezmcq.com/ez/show_aia_link.php?kw=web&&city=JavaScript, */
/*    https://www.youtube.com/watch?v=hdI2bqOjy3c, Karen Works Lectures in Canvas, */
/*    https://www.w3schools.com/jsref/jsref_gethours.asp, Time Changing Images,    */
/*    https://www.geeksforgeeks.org/how-to-display-images-in-javascript/, and      */
/*    https://www.w3schools.com/tags/ref_colornames.asp                            */
/***********************************************************************************/

function displayImage(src, h, w, alt) {
    //Creates a new image element
    let image = document.createElement("img");
              
    //Set source of image and alt attributes
    image.src = src;
    image.height = h;
    image.width = w;
    image.alt = alt;
              
    //Create and aply a centered heading with the image
    let div = document.createElement("div");
    div.style.textAlign = "center";
    div.appendChild(image);

    document.body.appendChild(div);
}
