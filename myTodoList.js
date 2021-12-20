// saving todo_item into localStorage
function save(elem) {
    localStorage.setItem(++localStorage.length, elem);
}

// restoring data from localStorage
function init() {
    let it = "";
    if (localStorage.length)
        for (let i = 1; i <= localStorage.length; i++) {
            it = localStorage.getItem(i);
            document.getElementById('td_items').innerHTML += '<li>'+ it +'</li>';
    }
}

// adding todo_item to the HTML-list and to localStorage
function addItem() {
    tdI = document.getElementById('todo_item');
    if (tdI.value) {
        document.getElementById('td_items').innerHTML += '<li>'+ tdI.value +'</li>';
        save(tdI.value);
        tdI.value = '';
    }   
    tdI.focus();
}

// reaction on Enter pressing
function keyPress(event) {
    if (event.which == 13) addItem();
}

// reaction on F5 pressing
window.onload = function() {
    init();
}

// clear localStorage on page loading
document.onload = function() {
    localStorage.clear();
}
