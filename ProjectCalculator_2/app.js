const express = require('express');
const server=  express();
const PORT = 4444;

const path = require('path');

server.use(express.static(path.join(__dirname , 'static')));




server.listen(PORT , ()=>{
    console.log('http://localhost:' + PORT);
})
