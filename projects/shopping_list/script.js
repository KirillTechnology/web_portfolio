var button = document.getElementById('enter');
var input = document.getElementById('user_input');
var shoping_list = document.querySelector('ol');
var del_buttons = document.querySelectorAll('.btn_del');


function addToList(x) {
    var p = document.createElement('p');
    p.appendChild(document.createTextNode(x));

    var b = document.createElement('button');
    b.classList.add('btn_del');
    b.appendChild(document.createTextNode('Delete'));

    var div = document.createElement('div');
    div.classList.add('list_item');
    div.appendChild(p);
    div.appendChild(b);

    var li = document.createElement('li');
    li.appendChild(div)

    shoping_list.appendChild(li);
    
    input.value = '';
}

function toggleItem(event) {
    if (event.target.tagName === 'P') {
        event.target.classList.toggle('done');
    }
}

function deleteItem(event) {
    if (event.target.tagName === 'BUTTON') {
        event.target.parentElement.parentElement.remove();
    }
}

function list_event_handler(event) {
    toggleItem(event);
    deleteItem(event);
}

shoping_list.addEventListener('click', list_event_handler);

button.addEventListener('click', function() {
    if (input.value) {
       addToList(input.value)
    }
}); // click, mouseenter, mouseleave

input.addEventListener('keydown', function(event) {
    if (input.value && event.key === 'Enter') {
        addToList(input.value)
    }
});