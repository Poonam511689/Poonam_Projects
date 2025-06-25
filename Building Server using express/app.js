const express = require('express');
const PORT  = 8888;
const server = express();
const path  = require('path');

server.use('/files' , express.static(path.join(__dirname , 'static')));

server.get('/' , (req,res)=>{
    console.log(__dirname);
    console.log(req);
   // res.send("<h1>Hello World</h1>");
    res.send(`Hello World`);
})

server.get('/greet' , (req,res)=>{
    console.log(req);
   
    res.send(`hello! ${req.query.name}`);
     
})


server.get('/greet/:name' , (req,res)=>{
    console.log(req);
 
   
      res.send(`hello! ${req.params.name}`);
})

server.get('/file' , (req , res)=>{
    console.log(req);
    //res.sendFile(path.join(__dirname + '/index.html'));
       res.sendFile(__dirname + '/index.html');
})

server.get('/server.js' , (req , res)=>{
   console.log("here is your requested server.js ");
})


server.listen(PORT , (err)=>{
    //console.log('server started at http://localhost:${PORT}');
      console.log(`Server started at http://localhost:${PORT}`);
})