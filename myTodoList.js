/*function save() {
    localStorage.setItem('item', document.querySelector('.td_items').innerHTML);
  }

function init() {
    const fromStorage = localStorage.getItem('item');
    if (fromStorage) {
      document.querySelector('.td_items').innerHTML = fromStorage;
    }
   // document.querySelector('.todo__options').addEventListener('change', this.update);
}*/

function AddItem() {
    let tdI = document.getElementById('todo_item').value;
    if (tdI) {
        document.getElementById('td_items').innerHTML += '<li>'+tdI+'</li>';
       // save();
    }
        document.getElementById('todo_item').value = '';
        document.getElementById('todo_item').focus();
}

function KeyPress(event) {
    if (event.which == 13) AddItem();
}

/*window.onload = function() {
    init();
}*/
