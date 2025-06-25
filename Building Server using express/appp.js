const express = require('express');
const PORT  = 8888;
const server = express();

//sending data using forms
server.use(express.urlencoded({extended:true}));

server.get('/' , (req,res)=>{
    console.log(__dirname);
     res.sendFile(__dirname + '/indexx.html');
})

server.get('/greet' , (req,res)=>{
    console.log(req);
   
    res.send(`hello! ${req.query.name}`);
     
})
server.post('/greet' , (req,res)=>{
    // res.send(`hello! ${req.query.name}`);
       res.send(`hello! ${req.body.name}`);
     
})







server.listen(PORT , (err)=>{
    
      console.log(`Server started at http://localhost:${PORT}`);
})