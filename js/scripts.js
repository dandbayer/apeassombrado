const listaForm = document.querySelector('.lista-form');
const listaInput = document.querySelector('.lista-input');
const listaItemslist = document.querySelector('.lista-items');

let items = [];

listaForm.addEventListener('submit', function(event) {
    event.preventDefault();
    addItem(listaInput.value);
})

function addItem(item) {
    if (item !== '') {
        const newItem = {
            id: Date.now(),
            name: item,
            completed: false
        };
        items.push(newItem);
        addToLocalStorage(items);
        listaInput.value = '';
    }
}

function renderItems(items) {
    listaItemslist.innerHTML = '';
    items.forEach(function(item) {
        const checked = item.completed ? 'checked': null;
        const li = document.createElement('li');
        li.setAttribute('class', 'item');
        li.setAttribute('data-key', item.id);
        
        if (item.completed === true) {
            li.classList.add('checked');
        }

    li.innerHTML = `
        <input type="checkbox" class="checkbox" ${checked}>
        ${item.name}
        <button class="delete-button">X</button>`
    ;
    listaItemslist.append(li);
    })
}

function addToLocalStorage(items) {
    localStorage.setItem('items', JSON.stringify(items));
    renderItems(items);
}

function getFromLocalStorage() {
    const reference = localStorage.getItem('items');
    if (reference) {
        items = JSON.parse(reference);
        renderItems(items);
    }
}

function toggle(id) {
    items.forEach(function(item) {
        if (item.id == id) {
            item.completed = !item.completed;
        }
    });
addToLocalStorage(items);
}

function deleteItem(id) {
    items = items.filter(function(item) {
        return item.id != id;
    });
addToLocalStorage(items);
}

getFromLocalStorage()

listaItemslist.addEventListener('click', function(event) {
    if (event.target.type === 'checkbox') {
        toggle(event.target.parentElement.getAttribute('data-key'));
    }
    if (event.target.classList.contains('delete-button')) {
        deleteItem(event.target.parentElement.getAttribute('data-key'));
    }
})

