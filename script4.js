// script.js
document.addEventListener('DOMContentLoaded', () => {
    const listItems = document.querySelectorAll('#color-list li');

    // Fonction pour générer une couleur aléatoire
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Ajouter un écouteur d'événement à chaque élément de la liste
    listItems.forEach(item => {
        item.addEventListener('click', () => {
            item.style.color = getRandomColor();
        });
    });
});