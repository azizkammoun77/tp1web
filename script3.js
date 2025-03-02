// script.js
document.addEventListener('DOMContentLoaded', () => {
    const nameInput = document.getElementById('name-input');
    const contentInput = document.getElementById('content-input');
    const addTodoButton = document.getElementById('add-todo');
    const todoList = document.getElementById('todo-list');

    // Fonction pour ajouter une Todo
    function addTodo() {
        const name = nameInput.value.trim();
        const content = contentInput.value.trim();

        if (name === '' || content === '') {
            alert('Veuillez remplir le nom et le contenu de la tâche.');
            return;
        }

        const todoItem = document.createElement('li');
        todoItem.classList.add('todo-item');

        const todoText = document.createElement('div');
        todoText.innerHTML = `<strong>${name}</strong>: ${content}`;

        const todoActions = document.createElement('div');
        todoActions.classList.add('todo-actions');

        const completeButton = document.createElement('button');
        completeButton.classList.add('complete');
        completeButton.textContent = 'Terminer';
        completeButton.addEventListener('click', () => {
            todoItem.classList.toggle('completed');
        });

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete');
        deleteButton.textContent = 'Supprimer';
        deleteButton.addEventListener('click', () => {
            todoList.removeChild(todoItem);
        });

        todoActions.appendChild(completeButton);
        todoActions.appendChild(deleteButton);
        todoItem.appendChild(todoText);
        todoItem.appendChild(todoActions);
        todoList.appendChild(todoItem);

        // Réinitialiser les champs
        nameInput.value = '';
        contentInput.value = '';
    }

    // Écouteur d'événement pour le bouton "Ajouter Todo"
    addTodoButton.addEventListener('click', addTodo);

    // Écouteur d'événement pour la touche "Entrée"
    contentInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTodo();
        }
    });
});