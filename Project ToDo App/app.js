const express = require('express');
<<<<<<< HEAD
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
=======
const server = express();
const path = require('path');
const port = 8888;

server.set('view engine' , 'hbs');
//server.set('myhbsfoldername' , 'views');

server.get('/' , (req,res)=>{
    res.sendFile(path.join(__dirname , 'index.html'));
})

server.get('/learnhbs',(rew,res)=>{
    res.render('index.hbs');
})

server.listen(port , ()=>{
    console.log("server started at http://localhost:8888 ");
>>>>>>> 89cbee2c45b76b12639f7497b42df3927c5012e0
})