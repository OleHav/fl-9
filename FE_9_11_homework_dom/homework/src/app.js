// let rootNode = document.getElementById("root");
// // Your code goes here
// rootNode.appendChild(/* Append your list item node*/);

window.onload = function () {

    let todoList = [];

    if(localStorage.getItem('todo') !== undefined) {
        todoList = JSON.parse(localStorage.getItem('todo'));
        out();
    }

    document.getElementById('add').onclick = function () {
        let task = document.getElementById('in').value;
        
        let temp = {};
            temp.todo = task;
            temp.check = false;
        
        let i = todoList.length;
            todoList[i] = temp;
        console.log(todoList);
        out();
        localStorage.setItem('todo', JSON.stringify(todoList));
    }

    function out() {
        let out = '';
        let MAX_todoList_length = 10;
        for (let key = 0; key < MAX_todoList_length; key++) {
            if (todoList[key].check === true) {
                out += `<input type="checkbox" checked>`;
            } else {
                out += `<input type="checkbox">`;
            }

            out += todoList[key].todo + '<br>';

        }
        document.getElementById('out').innerHTML = out;
    }
}