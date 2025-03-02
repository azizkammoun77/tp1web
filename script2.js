// script.js
document.addEventListener('DOMContentLoaded', () => {
    const colorPicker = document.getElementById('color-picker');
    const fontSizeInput = document.getElementById('font-size');
    const fontFamilySelect = document.getElementById('font-family');
    const editableParagraph = document.getElementById('editable-paragraph');

    // Fonction pour mettre à jour la couleur du texte
    function updateTextColor() {
        editableParagraph.style.color = colorPicker.value;
    }

    // Fonction pour mettre à jour la taille de la police
    function updateFontSize() {
        editableParagraph.style.fontSize = `${fontSizeInput.value}px`;
    }

    // Fonction pour mettre à jour la police d'écriture
    function updateFontFamily() {
        editableParagraph.style.fontFamily = fontFamilySelect.value;
    }

    // Écouteurs d'événements
    colorPicker.addEventListener('input', updateTextColor);
    fontSizeInput.addEventListener('input', updateFontSize);
    fontFamilySelect.addEventListener('change', updateFontFamily);
});