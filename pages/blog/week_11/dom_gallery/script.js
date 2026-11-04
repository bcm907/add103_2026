function change(picture, text) {
    document.getElementById("large").src = picture;
    document.getElementById("large").alt = text;
    document.getElementById("caption").textContent = text;

}

function setBgColor(color) {
    document.body.style.backgroundColor = color;
    
}