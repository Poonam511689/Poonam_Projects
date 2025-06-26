const express = require('express');
const server=  express();
const PORT = 4444;
const {v4:uuidv4 } = require('uuid');

const path = require('path');
server.use(express.urlencoded({extended:true}));
server.use(express.json());
server.use(express.static(path.join(__dirname , 'public')));

let todos = [
    { id:1 , name :"task 1"},

    {  id:2 , name : "task2" }
];

server.get('/gettodos' , (req,res,next)=>{

    res.send(todos);




})


server.post('/addtodo',(req,res)=>{
    const{name} = req.body;
    todos.push({
        id : uuidv4(),
        name
    })
res.redirect('/gettodos');
})


server.post('/deletetodo',(req,res)=>{
    const{id} = req.body;
   todos =  todos.filter((task)=>{
if(task.id ==id) return false;
return true;
    })
res.redirect('/gettodos');
})


server.listen(PORT , ()=>{
    console.log('http://localhost:' + PORT);
})
