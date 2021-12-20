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

function addItem() {
    let tdI = document.getElementById('todo_item');
    if (tdI.value) {
        document.getElementById('td_items').innerHTML += '<li>'+tdI.value+'</li>';
       // save();
    }
        tdI.value = '';
        tdI.focus();
}

function keyPress(event) {
    if (event.which == 13) addItem();
}

/*window.onload = function() {
    init();
}*/
