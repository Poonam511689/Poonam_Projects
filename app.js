const express = require('express');
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
})