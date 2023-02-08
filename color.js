let picker = document.getElementById("colorPickerContainer")
let color = document.getElementById("selectedColorHexCode")

function gray() {
    picker.style.backgroundColor = "#e0e0e0"
    color.textContent = "#e0e0e0"
}

function green() {
    picker.style.backgroundColor = "#6fcf97"
    color.textContent = "#6fcf97"
}

function blue() {
    picker.style.backgroundColor = "#56ccf2"
    color.textContent = "#56ccf2"
}

function purple() {
    picker.style.backgroundColor = "#bb6bd9"
    color.textContent = "#bb6bd9"
}