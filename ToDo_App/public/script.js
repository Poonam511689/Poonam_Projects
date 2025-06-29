const addtask = document.querySelector('#addtask');
const newtask = document.querySelector('#newtask');
const tasklist = document.querySelector('.tasklist');

function addToDom(todos) {
    tasklist.innerHTML = ""; // Clear list

    todos.forEach(element => {
        const li = document.createElement('li');
        li.innerText = element.name;

        // Apply "completed" class if task is marked done
        if (element.completed) {
            li.style.textDecoration = "line-through";
            li.style.opacity = 0.6;
        }

        // ✅ Complete button
        const doneBtn = document.createElement('button');
        doneBtn.innerHTML = '✔️';
        doneBtn.style.marginRight = '8px';
        doneBtn.onclick = () => {
            axios.post('/completetodo', { id: element.id })
                .then((res) => {
                    addToDom(res.data);
                })
                .catch((err) => console.error(err));
        };

        // ❌ Delete button
        const delBtn = document.createElement('button');
        delBtn.innerHTML = '&times;';
        delBtn.onclick = () => {
            axios.post('/deletetodo', { id: element.id })
                .then((res) => {
                    addToDom(res.data);
                })
                .catch((err) => console.error(err));
        };

        const btnGroup = document.createElement('div');
        btnGroup.appendChild(doneBtn);
        btnGroup.appendChild(delBtn);

        li.innerHTML = element.name;
        li.appendChild(btnGroup);

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

