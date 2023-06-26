const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container')

function addtask(){
    if (inputBox.value === ''){
        alert('you must write something ! ')
    }
    else {
        const li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    inputBox.value = "";
}