const addtask = document.querySelector('#addtask');
const newtask = document.querySelector('#newtask');
const tasklist = document.querySelector('.tasklist');

function addToDom(todos) {
    tasklist.innerHTML = ""; // Clear every time
    todos.forEach(element => {
        const li = document.createElement('li');
        li.innerText = element.name;
        tasklist.appendChild(li);
    });
}


axios.get('/gettodos')
.then((res) => {
    addToDom(res.data);
})
.catch((err) => {
    console.error(err);
});


// Add new task
addtask.addEventListener('click', (ev) => {
    ev.preventDefault();
    axios.post('/addtodo', {
        name: newtask.value
    })
    .then((res) => {
        addToDom(res.data);
        newtask.value = ""; //  Clear input
    })
    .catch((err) => {
        console.error(err);
    });
});

// Get all todos
axios.get('/gettodos')
.then((res) => {
    addToDom(res.data);
})
.catch((err) => {
    console.error(err);
});
