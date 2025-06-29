const path = require('path');
const express = require('express');
const server = express();
const port = 4444;

server.use(express.urlencoded({extended:true}));


const teachershandler = require('./routes/teacher');
server.use('/teacher' , teachershandler);

const studentshandler = require('./routes/student');
server.use('/student' , studentshandler);

server.listen(port,()=>{
    console.log('http://localhost:'+port);
});
